import type { PlaywrightTestConfig } from "@playwright/test";
import { devices } from "@playwright/test";

const testMatch = `${process.env.npm_config_gameid}-*`;

const config: PlaywrightTestConfig = {
  retries: 0,
  testDir: "./tests",
  timeout: 180 * 1000,
  snapshotPathTemplate:
  "{testDir}/{testFileDir}/{testFileName}-snapshots/{arg}{ext}",
  expect: {
    timeout: 10 * 1000,
    toMatchSnapshot: {
      maxDiffPixelRatio: 0.5,
    },
    toHaveScreenshot: {
      maxDiffPixels: 1000,
    },
  },
  fullyParallel: false,
  reporter: [
    ["list"],
    ["html", { open: "never" }],
    ["json", { outputFile: "test-results.json" }],
  ],
  use: {
    actionTimeout: 0,
    headless: true,
    viewport: {
      width: 1280,
      height: 720,
    },
    screenshot: "only-on-failure",
    launchOptions: {
      args: [
        "--no-sandbox",
        "--use-angle=gl",
        "--enable-gpu",
        "--disable-web-security",
      ],
    },
    trace: "retain-on-failure",
  },

  /* Configure projects for major browsers */
  projects: [
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
};

export default config;
