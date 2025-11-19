import { test, expect, Page } from "@playwright/test";

// Types
interface GamePerformance {
  game: string;
  loadTime: number;
  resourceSize: number;
}

interface PerformanceStats {
  average: number;
  max: number;
  min: number;
  totalResourceSize: number;
  details: GamePerformance[];
}

// Configuration
const CONFIG = {
  timeout: 200000,
  loginUrl: "https://l2-glbs.lumigame.com/signin?obCustId=3726065",
  games: [
    "game-81",
    "game-55",
    "game-25",
    "game-107",
    "game-67",
    "game-26",
    "game-10",
    "game-22",
    "game-2",
    "game-113",
    "game-93"
  ],
  consoleQuiet: {
    timeout: 5000,
    quietPeriod: 1000,
    checkInterval: 100,
  },
  switchDelay: 500,
  networkConditions: {
    "4g": {
      downloadSpeed: (4 * 1024 * 1024) / 8, // 4 Mbps
      uploadSpeed: (3 * 1024 * 1024) / 8, // 3 Mbps
      latency: 20, // 20ms RTT
    },
  },
};

// Helper functions

async function setupNetworkConditions(page: Page,is4g: boolean=false): Promise<void> {
  // Using CDP (Chrome DevTools Protocol) to set network conditions
  const client = await page.context().newCDPSession(page);

  // Disable all forms of caching
  await client.send("Network.setCacheDisabled", { cacheDisabled: true });
  await client.send("Network.setBypassServiceWorker", { bypass: true });

  // Set browser caching headers
  await page.setExtraHTTPHeaders({
    "Cache-Control": "no-cache, no-store, must-revalidate",
    Pragma: "no-cache",
    Expires: "0",
  });
  if (is4g) {
    await client.send("Network.emulateNetworkConditions", {
      offline: false,
      latency: CONFIG.networkConditions["4g"].latency,
      downloadThroughput: CONFIG.networkConditions["4g"].downloadSpeed,
      uploadThroughput: CONFIG.networkConditions["4g"].uploadSpeed,
    });
  }
}

async function waitForGameLoadMessage(page: Page): Promise<void> {
  return new Promise<void>((resolve) => {
    const messageHandler = (message) => {
      const text = message.text();
      if (
        (text.includes("Open Game") || text.includes("LoadScene")) &&
        !text.includes("LoadScene Main") &&
        !text.includes("LoadScene db") &&
        !text.includes("LoadScene game-instant")
      ) {
        page.removeListener("console", messageHandler);
        resolve();
      }
    };

    page.on("console", messageHandler);

    // Set a timeout of 30 seconds
    setTimeout(() => {
      page.removeListener("console", messageHandler);
      resolve(); // Resolve anyway after timeout
    }, 30000);
  });
}

async function measureGameSwitchTime(
  page: Page,
  gameName: string
): Promise<{ loadTime: number; resourceSize: number }> {
  console.log(`\nSwitching to game: ${gameName}`);
  await page.waitForTimeout(CONFIG.switchDelay);

  // Click the game tab
  await page.locator(`//img[@alt='${gameName}']`).click();

  let totalSize = 0;
  let lastResponseTime = Date.now();
  // Track filenames and their counts
  const filenameCounts = new Map();

  const responseListener = async (response) => {
    lastResponseTime = Date.now();
    let size = response.headers()["content-length"];
    const contentType = response.headers()["content-type"] || "";
    const url = response.url();

    // Extract filename from URL
    const filename = url.split("/").pop()?.split("?")[0] || "";

    // If content-length is not available, try to get size from response body
    if (!size && response.body) {
      try {
        const buffer = await response.body();
        size = buffer.length;
      } catch (e) {
        // Skip if we can't get the body
        return;
      }
    }

    if (size) {
      const sizeNum = parseInt(size, 10);
      if (!isNaN(sizeNum)) {
        totalSize += sizeNum;

        // Check if it's a JPG image over 100KB
        if (contentType.includes("image/jpeg") && sizeNum > 100000) {
          console.log(
            `Large JPG detected (${Math.round(sizeNum / 1024)}KB): ${url}`
          );

          // Track filename occurrences
          const count = (filenameCounts.get(filename) || 0) + 1;
          filenameCounts.set(filename, count);

          // If this is a duplicate, log it
          if (count > 1) {
            console.log(
              `⚠️ Duplicate filename detected: ${filename} (${count} occurrences)`
            );
            await test.info().annotations.push({
              type: "Duplicate JPG",
              description: `${filename} found ${count} times. Latest URL: ${url}`,
            });
          }

          // Add to test annotations
          await test.info().annotations.push({
            type: "Large JPG",
            description: `${url} (${Math.round(sizeNum / 1024)}KB)`,
          });
        }
      }
    }
  };

  // Start tracking resources just before reload
  page.on("response", responseListener);

  // Reload and measure
  await page.reload();
  const startTime = Date.now();
  await waitForGameLoadMessage(page);
  const loadTime = Date.now() - startTime;

  while (Date.now() - lastResponseTime < 2000) {
    await page.waitForTimeout(100);
  }
  // Stop tracking resources
  page.removeListener("response", responseListener);

  console.log(`Load time for ${gameName}: ${loadTime}ms`);
  console.log(
    `Resource size for ${gameName}: ${(totalSize / 1024 / 1024).toFixed(2)}MB`
  );
  return { loadTime, resourceSize: totalSize };
}

async function calculateStats(
  results: GamePerformance[]
): Promise<PerformanceStats> {
  const loadTimes = results.map((r) => r.loadTime);
  const totalResourceSize = results.reduce((sum, r) => sum + r.resourceSize, 0);
  return {
    average: Math.round(
      loadTimes.reduce((sum, time) => sum + time, 0) / loadTimes.length
    ),
    max: Math.max(...loadTimes),
    min: Math.min(...loadTimes),
    totalResourceSize,
    details: results,
  };
}

async function logPerformanceResults(stats: PerformanceStats): Promise<void> {
  console.log("\nPerformance Summary:");
  console.log("-------------------");
  stats.details.forEach((result) => {
    console.log(`${result.game}:`);
    console.log(`  Load time: ${result.loadTime}ms`);
    console.log(
      `  Resource size: ${(result.resourceSize / 1024 / 1024).toFixed(2)}MB`
    );
  });

  console.log("\nStatistics:");
  console.log("-----------");
  console.log(`Average load time: ${stats.average}ms`);
  console.log(`Maximum load time: ${stats.max}ms`);
  console.log(`Minimum load time: ${stats.min}ms`);
  console.log(
    `Total resource size: ${(stats.totalResourceSize / 1024 / 1024).toFixed(2)}MB`
  );
}

// Main test
test("measure game switch performance", async ({ page }) => {
  test.setTimeout(CONFIG.timeout);
  await setupNetworkConditions(page,true);
  // Initial setup
  await page.goto(CONFIG.loginUrl);
  await page.locator(`//input[@id='7']`).check();
  await page.locator(`//input[@id='get-token']`).click();
  await page.waitForTimeout(1000);
  const token = await page.locator(`//a[@id='redirect']`).innerText();
  console.log(token);
  await page.goto(token);
  // Measure performance for each game
  const results: GamePerformance[] = [];
  for (const game of CONFIG.games) {
    const { loadTime, resourceSize } = await measureGameSwitchTime(page,game);
    results.push({ game, loadTime, resourceSize });
  }

  // Calculate and log results
  const stats = await calculateStats(results);
  await logPerformanceResults(stats);
});
