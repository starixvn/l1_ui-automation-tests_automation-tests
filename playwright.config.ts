import type { PlaywrightTestConfig } from "@playwright/test";
import { devices } from "@playwright/test";
import * as os from "os";

const testMatch = `${process.env.npm_config_gameid}-*`;
const admin = `${process.env.npm_config_admin}`;

const config: PlaywrightTestConfig = {
  retries: 0,
  testDir: "./tests",
  timeout: 200 * 1000,
  // Configure snapshot path template to remove platform suffix
  snapshotPathTemplate:
    "{testDir}/{testFileDir}/{testFileName}-snapshots/{arg}{ext}",
  expect: {
    timeout: 10 * 1000,
    toMatchSnapshot: {
      maxDiffPixelRatio: 0.2,
    },
    toHaveScreenshot: {
      maxDiffPixels: 500,
    },
  },
  /* Run tests in files in parallel */
  fullyParallel: false,
  // reporter: [["list"], ["html", { open: "never" }]],
  reporter: [
    [
      "html",
      {
        open: "never",
        outputFolder: `playwright-report/${process.env.npm_config_gameid}`,
      },
    ],
    ["json", { outputFile: "test-results/report.json" }],
    [
      "allure-playwright",
      {
        detail: false,
        resultsDir: "allure-results",
        suiteTitle: true,
        environmentInfo: {
          Browser: "Chromium",
          Env: process.env.npm_config_env,
          OS: os.platform() + " - " + os.version(),
        },
      },
    ],
  ],
  use: {
    actionTimeout: 0,
    screenshot: "only-on-failure",
    headless: true,
    viewport: {
      width: 1280,
      height: 720,
    },
    launchOptions: {
      args: [
        "--no-sandbox",
        "--use-angle=gl",
        "--disable-gpu",
        "--disable-web-security",
        "--ignore-certificate-errors",
        "--ignore-ssl-errors",
        "--ignore-certificate-errors-spki-list",
        "--disable-extensions",
        "--disable-dev-shm-usage",
        "--no-first-run",
        "--disable-background-timer-throttling",
        "--disable-backgrounding-occluded-windows",
        "--disable-renderer-backgrounding",
        "--disable-features=TranslateUI",
        "--disable-ipc-flooding-protection",
      ],
    },
    trace: "off",
  },

  projects: [
    {
      name: "Smoke_Club",
      testMatch: `**/${testMatch}/smoke-tests/*.smoke.spec.ts`,
      use: {
        ...devices["Desktop Chrome"],
        // storageState: `.auth/user.json`,
      },
    },
    {
      name: "Smoke_XD",
      testMatch: `**/${testMatch}/smoke-tests/*.smoke.spec.ts`,
      use: {
        ...devices["Desktop Chrome"],
        viewport: {
          width: 600,
          height: 930,
        },
      },
    },
    {
      name: "Smoke_Mobi",
      testMatch: `**/${testMatch}/smoke-tests/*.mobismoke.spec.ts`,
      use: {
        ...devices["Desktop Chrome"],
      },
    },
    {
      name: "Smoke_MobiDirect",
      testMatch: `**/${testMatch}/smoke-tests/*.mobidirectsmoke.spec.ts`,
      use: {
        ...devices["Desktop Chrome"],
      },
    },
    {
      name: "Smoke_Keno",
      testMatch: `**/${testMatch}/smoke-tests/*.kenosmoke.spec.ts`,
      use: {
        ...devices["Desktop Chrome"],
      },
    },
    {
      name: "Smoke_Instant_Play",
      testMatch: `**/${testMatch}/smoke-tests/*.issmoke.spec.ts`,
      use: {
        ...devices["Desktop Chrome"],
      },
    },
    {
      name: "Smoke_Marble_Health_Check",
      testMatch: `**/${testMatch}/smoke-tests/*.healthcheck.spec.ts`,
      use: {
        ...devices["Desktop Chrome"],
      },
    },
    {
      name: "admin",
      testMatch: `**/${testMatch}/admin-tests/*${admin}.spec.ts`,
      use: {
        ...devices["Desktop Chrome"],
      },
    },
    {
      name: "android",
      testMatch: `**/${testMatch}/smoke-tests/*.smoke.spec.ts`,
      use: {
        browserName: "chromium",
      },
    },
    {
      name: "E2E_CI",
      testMatch: `**/${testMatch}/e2e-tests/*.e2e.spec.ts`,
      use: {
        ...devices["Desktop Chrome"],
      },
    },
    {
      name: "Guide",
      testMatch: `**/${testMatch}/game-guide-tests/*.gameguide.spec.ts`,
      use: {
        ...devices["Desktop Chrome"],
      },
    },
    {
      name: "setup",  
      use: {
        ...devices["Desktop Chrome"],
        viewport: {
          width: 1280,
          height: 720,
        },
      },
      testMatch: /.*\.setup\.ts/,
    },
    {
      name: "Quick_Smoke",
      testMatch: `**/quicksmoke/all-games.smoke.ts`,
      use: {
        ...devices["Desktop Chrome"],
        // storageState: `.auth/user.json`,
      },
    },
  ],

  /* Folder for test artifacts such as screenshots, videos, traces, etc. */
  // outputDir: 'test-results/',
};

export default config;
