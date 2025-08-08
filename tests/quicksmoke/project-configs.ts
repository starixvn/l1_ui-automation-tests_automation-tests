// Project-specific configurations
export interface ProjectConfig {
  name: string;
  setupCredentials: (page: any) => Promise<void>;
  betAmountMultiplier?: number;
  baseConfig?: {
    origin?: string;
    getUrl?: (gameName: string) => string;
  };
}

// SG Project Configuration (current)
const SGConfig: ProjectConfig = {
  name: "SG",
  setupCredentials: async (page: any) => {
    const PRODLocator = {
      openLoginFormbtn: "//div[@class='header-option']//a[2]",
      usernameInput: "id=username",
      passwordInput: "id=password",
      submitLoginbtn:
        "//div[@class='login-form__item']//span[text()='Đăng nhập']",
      username: "supertestte120201029",
      password: "1234aa",
    };

    await page.goto("https://www.viva88.net/login888.aspx");
    await page.waitForTimeout(2000);

    const alertDialogSelector = "//div[@class='modal modal--alert']//div[1]/a";
    const alertDialogExists = await page.$(alertDialogSelector);
    if (alertDialogExists) {
      await page.click(alertDialogSelector);
    }

    await page.click("//div[@class='header-option']/div[1]");
    await page.click(
      "//div[@class='header-option']/div[1]/div//span[text()='Mobile']"
    );
    await page.click(PRODLocator.openLoginFormbtn);
    await page.fill(PRODLocator.usernameInput, PRODLocator.username);
    await page.fill(PRODLocator.passwordInput, PRODLocator.password);
    await page.click(PRODLocator.submitLoginbtn);
    await page.waitForLoadState("domcontentloaded");
    await page.waitForTimeout(5000);

    // Navigate to game page
    await page.goto("https://m.viva88.net/#Sports/s=1_0&d=l");
    await page.waitForLoadState("domcontentloaded");
    await page.waitForTimeout(5000);
    await page.addStyleTag({
      content: `#dialogMessage {display: none !important;}
      div[class*="promo"] {display: none !important;}
      a[class*="c-btn c-btn--bot"] {display: none !important;}`,
    });
    await page.locator("div[style*='1130_1636_Saba_SicBo_96']").click();
  },
  betAmountMultiplier: 1,
};

// VG Project Configuration (new)
const VGConfig: ProjectConfig = {
  name: "VG",
  setupCredentials: async (page: any) => {
    //   const PRODLocator = {
    //     openLoginFormbtn: "//div[@class='header-option']//a[2]",
    //     usernameInput: "id=Username",
    //     passwordInput: "id=Password",
    //     submitLoginbtn:
    //       "LoginBtn",
    //     username: "QCTest22082313",
    //     password: "1q2w3e4r",
    //   };

    // VG specific login flow
    await page.goto("https://www.spondemo.com/NewIndex?lang=vn&webskintype=3");
    await page.waitForLoadState("domcontentloaded");
    await page.waitForTimeout(65000);
    console.log("completed manual login");

  },
  betAmountMultiplier: 100, // VG uses higher bet amounts
  baseConfig: {
    origin: "proxy.playvgames.com", // VG proxy origin
    getUrl: (gameName: string) =>
      `wss://proxy.playvgames.com/${gameName}/socket.io/?EIO=4&transport=websocket`,
  },
};

// Export configurations
export const PROJECT_CONFIGS = {
  SG: SGConfig,
  VG: VGConfig,
} as const;

export type ProjectType = keyof typeof PROJECT_CONFIGS;

// Get current project from environment variable or default to SG
export const getCurrentProject = (): ProjectType => {
  const project = process.env.PROJECT?.toUpperCase() as ProjectType;
  return PROJECT_CONFIGS[project] ? project : "SG";
};

export const getCurrentProjectConfig = (): ProjectConfig => {
  return PROJECT_CONFIGS[getCurrentProject()];
};
