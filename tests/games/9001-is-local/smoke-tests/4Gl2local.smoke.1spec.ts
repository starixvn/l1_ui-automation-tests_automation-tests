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
  networkConditions: {
    "4g": {
      downloadSpeed: (4 * 1024 * 1024) / 8, // 4 Mbps
      uploadSpeed: (3 * 1024 * 1024) / 8, // 3 Mbps
      latency: 20, // 20ms RTT
    },
  },
  games: [
    "Xóc Đĩa Mini",
    "Trên 7 Dưới 7",
    "Tung Xu Bóng Đá",
    "Tài Xỉu",
    "Rồng Hổ",
    "Bầu Cua",
    "Cao Thấp",
    "Cào Baccarat",
    "Tài Xỉu Sic Bo",
    "Xí Ngầu Lục Sắc",
    // "Tung Đồng Xu",
  ],
  consoleQuiet: {
    timeout: 5000,
    quietPeriod: 1000,
    checkInterval: 100,
  },
  switchDelay: 500,
};

// Helper functions
async function setupNetworkConditions(page: Page): Promise<void> {
  const conditions = CONFIG.networkConditions["4g"];
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

  // Set network conditions
  await client.send("Network.emulateNetworkConditions", {
    offline: false,
    downloadThroughput: conditions.downloadSpeed,
    uploadThroughput: conditions.uploadSpeed,
    latency: conditions.latency,
  });
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
  await page.locator(`//div[text()='${gameName}']`).click();

  let totalSize = 0;
  let lastResponseTime = Date.now();
  const responseListener = async (response) => {
    lastResponseTime = Date.now();
    let size = response.headers()["content-length"];

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

  // Wait for any remaining resources to finish loading
  // Keep waiting until no new responses for 2 seconds
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

  // Set up 4G network conditions
  await setupNetworkConditions(page);

  // Initial setup
  const page1Promise = page.waitForEvent("popup");
  await page.goto(CONFIG.loginUrl);
  await page
    .getByRole("button", { name: "Redirect To Instant Version" })
    .click();
  const gamePage = await page1Promise;

  // Set up 4G network conditions for the game page
  await setupNetworkConditions(gamePage);

  // Measure performance for each game
  const results: GamePerformance[] = [];
  for (const game of CONFIG.games) {
    const { loadTime, resourceSize } = await measureGameSwitchTime(
      gamePage,
      game
    );
    results.push({ game, loadTime, resourceSize });
  }

  // Calculate and log results
  const stats = await calculateStats(results);
  await logPerformanceResults(stats);
});
