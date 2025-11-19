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

interface GameConfig {
  name: string;
  gameId: number;
}

// Configuration
const CONFIG = {
  timeout: 250000,
  ssoUrl: "https://l2-glbs2.lumigame.com/signin/sso",
  gameBaseUrl: "https://l2-mini2.lumigame.com",
  networkConditions: {
    "4g": {
      downloadSpeed: (4 * 1024 * 1024) / 8, // 4 Mbps
      uploadSpeed: (3 * 1024 * 1024) / 8, // 3 Mbps
      latency: 20, // 20ms RTT
    },
  },
  games: [
    { name: "Xóc Đĩa Mini", gameId: 9 },
    { name: "Trên 7 Dưới 7", gameId: 103 },
    { name: "Tung Xu Bóng Đá", gameId: 93 },
    { name: "Tài Xỉu", gameId: 1 },
    { name: "Rồng Hổ", gameId: 7 },
    { name: "Bầu Cua", gameId: 3 },
    { name: "Cao Thấp", gameId: 45 },
    { name: "Cào Baccarat", gameId: 10 },
    { name: "Tài Xỉu Sic Bo", gameId: 25 },
    { name: "Xí Ngầu Lục Sắc", gameId: 71 },
  ] as GameConfig[],
  consoleQuiet: {
    timeout: 5000,
    quietPeriod: 1000,
    checkInterval: 500,
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

  await client.send("Network.emulateNetworkConditions", {
    offline: false,
    downloadThroughput: conditions.downloadSpeed,
    uploadThroughput: conditions.uploadSpeed,
    latency: conditions.latency,
  });
}


async function getGameToken(page: Page): Promise<string> {
  // Get the actual browser user agent
  const browserUserAgent = await page.evaluate(() => navigator.userAgent);

  const response = await page.request.post(CONFIG.ssoUrl, {
    data: {
      playerId: "3726065",
      playerName: "username_3726065",
      language: "vi-VN",
      currency: "INH",
      seq: "d,y,lumi",
      siteId: "4100300",
      siteName: "lumi",
      ip: "10.10.50.125",
      browserUserAgent,
      auth: {
        operatorId: "ONEworksVGCash",
        operatorSecret: "VG@SC123",
      },
      token: null,
      redirectUrl:
        "https://l2-games2.lumigame.com/?token=c6ad1125-0932-440c-9071-0983a5855176&lang=vi-VN&appType=1&op=VG&cg=Cash_INH",
      verifyResult: null,
      gameId: 0,
      setting: {
        evn: "LOCAL_2",
        systemType: "VG2",
        apiUrl: "http://l2-sg-api-local2-service:5000",
        authUrl: "http://l2-auth-api-local2-service:5000",
        client: {
          id: "game-server",
          secret: "gameserver@20luminet&",
        },
        expireIn: 1750228621,
        useAuthenticate: true,
        requestTimeout: 10000,
        owUrl: "https://l2-ows2.lumigame.com/SabaClub",
        localhost: "http://localhost:7456",
        mobileLocalhost: "http://localhost:3000",
        port: 5000,
        connectSiteUrl: "https://connectsite.lumigame.com/login",
        enableCors: true,
        corsUrls: ["https://l2-info2.lumigame.com/", "http://localhost:3001"],
        simulatorUrl: "http://l2-game-client-simulator-local2.lumigame.com",
        livePageUrl: "https://l2-seal-live-page-client-demo2.lumigame.com",
        todayPageUrl:
          "https://l2-seal-hot-league-wall-client-demo2.lumigame.com",
      },
      domain: "example.com",
      localhost: false,
      isOpenOnIframe: false,
      appType: 3,
      isCash: true,
      partner: "1W",
      disableJackpotGames: false,
      expandAdvanceSetting: false,
      instantMode: 1,
      devIp: null,
      operatorToken: "ONEworksVGCashToken",
      setDefaultBalance: false,
      ref: "",
      deeplink:
        "https://4qwcm.test-app.link/pPv9z8d27ub/?uri=https://connectsite.lumigame.com/login",
      isApp: false,
      returnUrl: "",
      simulator: false,
      disableAward: false,
      resource: null,
    },
  });

  const result = await response.json();
  return result.token;
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
  gameConfig: GameConfig
): Promise<{ loadTime: number; resourceSize: number }> {
  await page.waitForTimeout(CONFIG.switchDelay);

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

  // Start tracking resources
  page.on("response", responseListener);

  // Get new token and navigate to game
  const token = await getGameToken(page);
  const gameUrl = `${CONFIG.gameBaseUrl}/?token=${token}&lang=vi-VN&appType=3&gameId=${gameConfig.gameId}&op=VG&cg=Cash_INH`;

  const startTime = Date.now();
  await page.goto(gameUrl);
  await waitForGameLoadMessage(page);
  const loadTime = Date.now() - startTime;

  // Wait for any remaining resources to finish loading
  // Keep waiting until no new responses for 2 seconds
  while (Date.now() - lastResponseTime < 2000) {
    await page.waitForTimeout(100);
  }

  // Stop tracking resources
  page.removeListener("response", responseListener);

  console.log(`Load time for ${gameConfig.name}: ${loadTime}ms`);
  console.log(
    `Resource size for ${gameConfig.name}: ${(totalSize / 1024 / 1024).toFixed(2)}MB`
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
  console.log("\nGame Performance Summary:");
  console.log("------------------------");
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

  // Measure performance for each game
  const results: GamePerformance[] = [];
  for (const gameConfig of CONFIG.games) {
    const { loadTime, resourceSize } = await measureGameSwitchTime(
      page,
      gameConfig
    );
    results.push({ game: gameConfig.name, loadTime, resourceSize });
  }

  // Calculate and log results
  const stats = await calculateStats(results);
  await logPerformanceResults(stats);
});
