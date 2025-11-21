import { MarbleSoccerLocators } from "../marble-soccer-locators";
import { MarbleSoccerConfigs } from "../marble-soccer-configs";
import { Components, SmokeBases } from "sc-automation-core";
import { expect, Page } from "@playwright/test";
import { PRODLocator } from "sc-automation-core/lib/auth/locators";
import { configs } from "sc-automation-core/lib/auth/configs/config";
import { createWorker } from "tesseract.js";
import * as accounts from "sc-automation-core/lib/auth/configs/config.account";
import { join } from "path";

class MarbleSoccerSmokeSpec extends SmokeBases.MarbleGameBase {
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      placeBetChoices: [MarbleSoccerConfigs.choices[0]],
      gameConfiguration: MarbleSoccerConfigs,
      locators: MarbleSoccerLocators,
      waitBetTimeout: 10000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 10 : 1,
    };
    super(smokeOptions);
  }

  private async closeAllPopups(): Promise<void> {
    try {
      await this.game.page.waitForSelector('#popupPanel', { timeout: 8000 });
      await this.game.page.locator('#popupPanel label.c-checkbox').click();
      await this.game.page.locator('#popupPanel .c-btn--primary').click();
    } catch {}

    const closeButtons = await this.game.page.locator('[class*="c-btn--clear"]').all();
    for (const button of closeButtons) {
      try {
        if (await button.isVisible()) {
          await button.click();
          await this.game.waitForTimeout(500);
        }
      } catch {}
    }
  }

  protected leagueTests(): void {
    Components.test('Verify league name', async () => {
      await this.closeAllPopups();
      if (await this.game.page.$(MarbleSoccerLocators.btnClosepopup)) {
        await this.game.page.locator(MarbleSoccerLocators.checkboxDonotShow).click();
        await this.game.page.locator(MarbleSoccerLocators.btnClosepopup).click();
      }
      await this.game.page.locator(MarbleSoccerLocators.sabaPingoalMenu).click();
      await this.game.page.locator(MarbleSoccerLocators.soccerMarbleLeftMenu).click();
      await this.game.page.locator(MarbleSoccerLocators.leagueBanner).click();
      await this.game.waitForTimeout(5000);
      await expect(this.game.page.locator(MarbleSoccerLocators.leagueName)).toHaveText('Soccer Marble - Spinner Premier League');
    });
  }

  protected placeBetOnUpcomingMatchTests(): void {
    Components.test('Verify place bet success on upcoming match 1', async () => {
      for (let index = 1; index < 14; index += 2) {
        const betChoice = `${MarbleSoccerLocators.placeBetButtonUpcomingMatch1}[${index}]`;
        await placeBet(this.game.page, betChoice);
        await this.game.waitForTimeout(1000);
      }
    });

    Components.test('Verify place bet success on upcoming match 2', async () => {
      for (let index = 15; index < 26; index += 2) {
        const betChoice = `${MarbleSoccerLocators.placeBetButtonUpcomingMatch2}[${index}]`;
        await placeBet(this.game.page, betChoice);
        await this.game.waitForTimeout(1000);
      }
    });
  }

  protected placeLiveBetTests(): void {
    Components.test('Verify place bet success on running match', async () => {
      Components.test.setTimeout(this.options.gameConfiguration.maxTimeout*2);
      const prematch = this.game.page.locator('(//*[contains(@class, "is-open")]/*[contains(@class, "in-play")][1]//*[contains(@data-quickbet-open, "false")])[15]');
      await prematch.waitFor({ state: 'visible' });
      await placeBet(this.game.page, `${MarbleSoccerLocators.placeBetButtonRunningMatch}[1]`);
      await this.game.waitForTimeout(30000);
    });

    Components.test('Verify place live bet success', async () => {
      for (let index = 1; index < 4; index += 2) {
        const betChoice = `${MarbleSoccerLocators.placeBetButtonRunningMatch}[${index}]`;
        await placeBet(this.game.page, betChoice);
        await this.game.waitForTimeout(1000);
      }
    });
  }

  protected gameNavigationsTests(): void {
    Components.test('Verify game navigation on mobile', async () => {
      await this.game.page.locator(MarbleSoccerLocators.btnLogOut).click();
      const env = (process.env.npm_config_env ?? "local").toLowerCase();
      const projectCode = process.env.npm_config_project ?? "l1";
      const pwd = projectCode.includes("l1")
        ? configs.prod["l1pwd"]
        : projectCode.includes("l2")
        ? configs.prod["l2pwd"]
        : configs.prod[`${projectCode}pwd`];
      const account = accounts[`${projectCode}${env}`][this.game.gameConfiguration.id] ?? this.game.gameConfiguration.accounts[`${projectCode}${env}`];
      await loginPROD(this.game.page, account, pwd, 'vn', projectCode);
      await this.game.page.locator(MarbleSoccerLocators.lblPingoalLobby).click();
      await this.game.page.locator(MarbleSoccerLocators.lblSoccerMarble).click();
      await this.game.page.waitForLoadState();
      await this.game.waitForTimeout(10000);
      if (await this.game.page.$(MarbleSoccerLocators.closePopupsButton)) {
        await this.game.page.locator(MarbleSoccerLocators.closePopupsButton).click();
      }
      await expect(this.game.page.locator('text=Soccer Marble - Spinner Premier League')).toBeVisible();
      if (await this.game.page.$(MarbleSoccerLocators.icoHomeNova)) {
        await this.game.page.locator(MarbleSoccerLocators.icoHomeNova).click();
      }
      await this.game.page.locator(MarbleSoccerLocators.icoHome).click();
      await this.game.page.locator(MarbleSoccerLocators.lblSoccer).click();
      await this.game.page.waitForLoadState();
      await this.game.waitForTimeout(10000);
      if (await this.game.page.$(MarbleSoccerLocators.closePopupsButton)) {
        await this.game.page.locator(MarbleSoccerLocators.closePopupsButton).click();
      }
      await expect(this.game.page.locator('text=Soccer Marble - Spinner Premier League')).toBeVisible();
    });
  }

  protected override runScenario(): void {
    this.leagueTests();
    this.placeLiveBetTests();
    this.placeBetOnUpcomingMatchTests();
    this.gameNavigationsTests();
  }
}

new MarbleSoccerSmokeSpec().start();

async function confirmBet(page: Page) {
  await page.locator(MarbleSoccerLocators.stakeTextbox).fill("15");
  const button = page.locator(MarbleSoccerLocators.confirmBetButton);
  const clearBetButton = page.locator(MarbleSoccerLocators.clearBetButton);
  while (await button.isVisible()) {
    const oKBtn = page.locator(MarbleSoccerLocators.oKBtn);
    if (await oKBtn.isVisible()) {
      await oKBtn.click();
    }
    const oddsCloseMessage = page.locator(MarbleSoccerLocators.oddsCloseMessage);
    if (await oddsCloseMessage.isVisible()) {
      if (await clearBetButton.isVisible()) {
        await clearBetButton.click();
      }
      return false;
    }
    await button.click();
    await page.waitForTimeout(500);
  }
  return true;
}

async function checkBetTicket(page: Page) {
  await expect(page.locator(MarbleSoccerLocators.messageBetAccepted)).toBeVisible();
  await page.locator(MarbleSoccerLocators.oKBtn).click();
}

async function placeBet(page: Page, betChoice: string) {
  await page.locator(betChoice).click();
  const isConfirmed = await confirmBet(page);
  if (isConfirmed) {
      await checkBetTicket(page);
  }

}

const loginPROD = async (
  page: Page,
  accountId: string,
  pwd: string,
  langCode: string,
  projectCode: string,
  timeout: number = 15000
) => {
  const alertDialogSelector = "//div[@class='modal modal--alert']//div[1]/a";
  await page.waitForSelector(alertDialogSelector, { timeout: 5000 }).catch(() => {});
  const alertDialogExists = await page.$(alertDialogSelector);
  if (alertDialogExists) {
    await page.click(alertDialogSelector);
  }

  if (projectCode === "l1pingoal") {
    await page.click("//div[@class='header-option']/div[1]");
    await page.click("//div[@class='header-option']/div[1]/div//span[text()='Mobile']");
    await page.click(PRODLocator.openLoginFormbtn);
    await page.fill(PRODLocator.usernameInput, accountId);
    await page.fill(PRODLocator.passwordInput, pwd);
    await page.click(PRODLocator.submitLoginbtn);
    await page.waitForLoadState("domcontentloaded");
    await page.waitForTimeout(5000);
  }

  if (projectCode === "l2creditpingoal") {
    if (process.env.npm_config_mobile === "true" && !process.env.npm_config_project?.includes("credit")) {
      await page.setViewportSize({ width: 340, height: 667 });
      await page.goto(configs.prod.l2memberSiteMobile);
      await page.waitForTimeout(3000);
      await page.locator(PRODLocator.l2memberIdInput).waitFor();
      await page.fill(PRODLocator.l2memberIdInput, accountId);
      await page.fill(PRODLocator.l2pwdInput, pwd);
      await page.click(PRODLocator.l2loginButton);
      await page.waitForLoadState("domcontentloaded", { timeout });
      await page.waitForTimeout(8000);
      const iconSurvey = await page.$$(PRODLocator.l2iconClose);
      if (iconSurvey.length > 0) {
        await page.click(PRODLocator.l2iconClose);
      }
      await page.setViewportSize({ width: 1280, height: 720 });
    }

    if (process.env.npm_config_project?.includes("credit")) {
      await page.click("//div[@class='header-option']/div[1]");
      await page.click("//div[@class='header-option']/div[1]/div//span[text()='Mobile']");
      await page.click("//div[@class='header-login']/a[2]");
      await page.fill(PRODLocator.usernameInput, accountId);
      await page.fill(PRODLocator.passwordInput, pwd);
      await page.click("//div[@class='login-form']//a[@class='btn btn--secondary']");
      await page.waitForLoadState("domcontentloaded");
      await page.waitForTimeout(5000);
    } else {
      const isSuccess = await loginWithCaptcha(page, accountId, pwd);
      if (!isSuccess) {
        await page.locator("//i[@class='icon-refresh']").click();
        await page.waitForTimeout(5000);
        await loginWithCaptcha(page, accountId, pwd);
      }
      await page.waitForLoadState("domcontentloaded");
      await page.waitForTimeout(2000);
      await page.locator("#sportsFrame").waitFor({ state: "visible" });
      await page.waitForTimeout(5000);
    }
  }
};

const getCaptcha = async (page: Page) => {
  await page.screenshot({ path: "imgcapha.png", clip: { x: 1114, y: 18, width: 35, height: 12 } });
  let capcha = await getTextLocator("imgcapha.png");
  let retryCount = 0;
  while (capcha.length !== 4 && retryCount < 2) {
    await page.reload({ waitUntil: "domcontentloaded" });
    await page.waitForTimeout(5000);
    await page.screenshot({ path: "imgcapha.png", clip: { x: 1114, y: 18, width: 35, height: 12 } });
    capcha = await getTextLocator("imgcapha.png");
    retryCount++;
  }
  return capcha;
};

const loginWithCaptcha = async (page: Page, accountId: string, pwd: string) => {
  await page.locator(PRODLocator.usernameInput).waitFor({ state: "visible" });
  await page.fill(PRODLocator.usernameInput, accountId);
  await page.fill(PRODLocator.passwordInput, pwd);
  await page.waitForTimeout(500);
  let capcha = await getCaptcha(page);
  await page.fill("#validation", capcha);
  await page.click(`//*[@data-tag="tabBtn"]`);
  await page.waitForTimeout(2000);
  const isFailedCaptcha = await page.isVisible('//*[@class="hint-absolute"]');
  return !isFailedCaptcha;
};

const getTextLocator = async (img: string, whitelist: string = "0123456789", lang: string = "eng") => {
  const worker = await createWorker();
  await worker.loadLanguage(lang);
  await worker.initialize(lang);
  await worker.setParameters({ tessedit_char_whitelist: whitelist });
  const { data: { text } } = await worker.recognize(img);
  await worker.terminate();
  return text.trim();
};
