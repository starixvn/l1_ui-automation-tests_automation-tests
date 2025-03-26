import { L1IsLocators, L2IsLocators } from "../colorgame-locators";
import { ColorGameConfigs, Isconfigs } from "../colorgame-configs";
import { SmokeBases, Components } from "sc-automation-core";
import { expect } from "@playwright/test";
import { GameEvent } from "sc-automation-core/lib/_shared";

class ColorGameSmokeSpec extends SmokeBases.ISGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      gameConfiguration: ColorGameConfigs,
      locators: process.env.npm_config_project?.includes("l2")
        ? L2IsLocators
        : L1IsLocators,
      waitBetTimeout: 5000,
      placeBetChoices: ["yellow"],
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project?.includes("l2") ? 10 : 1,
      isconfig: Isconfigs,
    };

    super(smokeOptions);
  }
  protected preCondition(): void {
    Components.test("preCondition is instant games offered", async () => {
      // Arrange
      Components.test.setTimeout(this.options.gameConfiguration.maxTimeout);
      const currentUrl = this.game.page.url();
      const url = new URL(currentUrl);
      const domain = url.hostname;
      await this.game.page.goto("https://" + domain + "/#Sports/s=1_0&d=l");
      await this.game.page.reload();
      await this.game.page.waitForLoadState("domcontentloaded");
      await this.game.waitForTimeout(5000);
      const isPromotionPopup = await this.game.page
        .locator("//div[contains(@class,'promo-highlight__btn')]/label")
        .count();
      if (isPromotionPopup > 0) {
        await this.game.page
          .locator("//div[contains(@class,'promo-highlight__btn')]/label")
          .click();
        await this.game.page
          .locator("//div[contains(@class,'promo-highlight__btn')]/a")
          .click();
        await this.game.waitForTimeout(5000);
        await this.game.page.locator("//div[@id='dialogMessage']//a").click();
      }
    });
  }
  protected openInstantGame(): void {
    Components.test(
      `Smoke Tests ${this.options.gameConfiguration.name}`,
      async () => {
        await this.game.click(this.options.locators.gameIcon);
        await this.game.waitUntilGameUiLoad(2);
        await this.game.waitForTimeout(3000);
        await this.game.page
          .frameLocator("iframe")
          .first()
          .locator("#GameCanvas")
          .scrollIntoViewIfNeeded();
      }
    );
  }

  protected placeBetAndSettleTests(): void {
    Components.test("THEN player able to place a bet and settle", async () => {
      // Arrange
      Components.test.setTimeout(this.options.gameConfiguration.maxTimeout);
      this.game.attachSocketAndCaptureEvent(GameEvent.WinStatus);

      // Act
      await this.game.waitUntilPlaceBet();
      await this.game.page
        .frameLocator("iframe")
        .frameLocator("iframe")
        .locator("#GameCanvas")
        .click({ clickCount: 6, position: { x: 430, y: 182 } });
      // Act
      const settledResults = await this.game.waitForSettlement();

      // Assert
      expect(settledResults.settlementResult).toMatchBetOptions(
        this.options.gameConfiguration.choices
      );
    });
  }
}

new ColorGameSmokeSpec().start();
