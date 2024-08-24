import type { PlaywrightTestConfig } from "@playwright/test";
import { devices } from "@playwright/test";
import * as os from "os";

const testMatch = `${process.env.npm_config_gameid}-*`;
const admin = `${process.env.npm_config_admin}`;

const config: PlaywrightTestConfig = {
  retries: 0,
  testDir: "./tests",
  timeout: 200 * 1000,
  expect: {
    timeout: 10 * 1000,
    toMatchSnapshot: {
      maxDiffPixelRatio: 0.1,
    },
    toHaveScreenshot: {
      maxDiffPixels: 500,
    },
  },
  /* Run tests in files in parallel */
  fullyParallel: false,
  // reporter: [["list"], ["html", { open: "never" }]],
  reporter: [["html",{ open: "never" }],["line"], [
    "allure-playwright",
    {
      detail: true,
      resultsDir: "allure-results",
      suiteTitle: false,
      environmentInfo: {
        Browser: "Chromium",
        Env: process.env.npm_config_env,
        OS: os.platform() + ' - ' + os.version()
      },
    },
  ]],
  use: {
    actionTimeout: 0,
    trace: "off",
    screenshot: "only-on-failure",
    headless: true,
    viewport: {
      width: 1280,
      height: 720,
    },
    launchOptions: {
      args: ["--no-sandbox", "--use-angle=gl", "--enable-gpu", '--disable-web-security'],
    },
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: "Smoke_Club",
      testMatch: `**/${testMatch}/smoke-tests/*.smoke.spec.ts`,
      use: {
        ...devices["Desktop Chrome"],
      },
    },
    {
      name: "Smoke_Saba_Play",
      testMatch: `**/2005-SabaPlay/smoke-tests/*.smoke.spec.ts`,
      use: {
        ...devices["Desktop Chrome"],
      },
    },
    {
      name: "Smoke_XD",
      testMatch: `**/${testMatch}/smoke-tests/*.smoke.spec.ts`,
      use: {
        ...devices["Desktop Chrome"],
        "viewport": {
          "width": 600,
          "height": 930
        }
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
        browserName: 'chromium',
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
  ],

  /* Folder for test artifacts such as screenshots, videos, traces, etc. */
  // outputDir: 'test-results/',
};

export default config;
