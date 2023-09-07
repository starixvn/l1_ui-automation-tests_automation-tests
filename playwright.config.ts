import type { PlaywrightTestConfig } from "@playwright/test";
import { devices } from "@playwright/test";

const testMatch = `${process.env.npm_config_gameid}*`;

const config: PlaywrightTestConfig = {
  retries: 0,
  testDir: "./tests",
  timeout: 120 * 1000,
  expect: {
    timeout: 10 * 1000,
    toMatchSnapshot: {
      maxDiffPixelRatio: 0.05,
    },
  },
  /* Run tests in files in parallel */
  fullyParallel: false,
  reporter: [["line"], ["html", { open: "never" }]],
  use: {
    actionTimeout: 0,
    trace: "off",
    headless: true,
    viewport: {
      width: 1280,
      height: 720,
    },
    screenshot: "only-on-failure",
    launchOptions: {
      args: ["--no-sandbox", "--use-angle=gl", "--enable-gpu"],
    },
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: "Smoke_CI",
      testMatch: `**/${testMatch}/smoke-tests/*.smoke.spec.ts`,
      use: {
        ...devices["Desktop Chrome"],
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
      name: "autobot",
      testMatch: `*/autobot/autobot.spec.ts`,
      use: {
        ...devices["Desktop Chrome"],
      },
    },
  ],

  /* Folder for test artifacts such as screenshots, videos, traces, etc. */
  // outputDir: 'test-results/',
};

export default config;
