import { coinminingLocators } from "../coinmining-locators";
import { coinminingConfigs } from "../coinmining-configs";
import { SmokeBases, Components } from "sc-automation-core";
import { expect } from "@playwright/test";
import { GameEvent } from "sc-automation-core/lib/_shared";

class coinminingSmokeSpec extends SmokeBases.MiniGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      placeBetChoices: ["spin"],
      gameConfiguration: coinminingConfigs,
      locators: coinminingLocators,
      waitBetTimeout: 1000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 10 : 5,
      isJackpot: process.env.npm_config_project === "l2" ? true : false,
    };
    super(smokeOptions);
  }
  protected inGameBetChoiceTests(): void {}

  protected placeBetAndSettleTests(): void {
    Components.test("THEN player able to place a bet and settle", async () => {
      Components.test.setTimeout(this.options.gameConfiguration.maxTimeout);
      this.game.attachSocketAndCaptureEvent(GameEvent.WinStatus);
      this.game.attachSocketAndCaptureEvent("multiplier");
      const bet = {
        amount: this.options.placeBetAmount ?? 1,
        numberOfClicks: 3,
      };

      // Act
      const settledResults = await placeBet(
        this.game,
        bet.amount,
        bet.numberOfClicks
      );
      //Assert
      expect(settledResults.winAmount.toFixed(2)).toBe(
        (bet.amount * settledResults.multiplier).toFixed(2)
      );
      await this.game.waitForTimeout(3000);
      await this.game.clickHistory();
      await this.game.clickLocator("historyFirstRow", 5000);
      // Helper function to get text content from locators
      const getTextContent = async (
        locator: string,
        defaultValue: string = ""
      ) => {
        return (
          (await this.game.page
            .locator("#microsite")
            .contentFrame()
            .locator("#webview")
            .contentFrame()
            .locator(locator)
            .textContent()) ?? defaultValue
        );
      };

      const ticket_numofclicks = await getTextContent(
        '//div[@id="game-ticket"]/table[1]/tbody[2]/tr[1]/td[1]'
      );
      const ticket_result = await getTextContent(
        '//div[@id="game-ticket"]/table[1]/tbody[2]/tr[1]/td[2]'
      );
      const ticket_multiplier = await getTextContent(
        '//div[@id="game-ticket"]/table[1]/tbody[2]/tr[1]/td[3]',
        "1"
      );
      const ticket_betamount = await getTextContent(
        '//div[@id="game-ticket"]/table[1]/tbody[2]/tr[1]/td[4]'
      );
      const ticket_betwin = await getTextContent(
        '//div[@id="game-ticket"]/table[1]/tbody[2]/tr[1]/td[5]',
        "0"
      );

      const merged_results = settledResults.winAmount ? "Rút Tiền" : "Gãy Cuốc";
      const merged_multiplier =
        settledResults.totalClicks == 1 && settledResults.multiplier == 0
          ? "-"
          : settledResults.multiplier + "x";

      expect(ticket_numofclicks).toBe(settledResults.totalClicks.toString());
      expect(ticket_result).toBe(merged_results);
      expect(ticket_multiplier).toBe(merged_multiplier);
      expect(ticket_betamount).toBe(bet.amount.toString());
      expect(Number(ticket_betwin.trim()).toFixed(1)).toBe(
        (bet.amount * settledResults.multiplier).toFixed(1)
      );
    });
  }
  protected hedgeBetTests(): void {
    //no hedgebet tests
  }

  protected ticketHistoryTests(): void {}
  // protected gameGuideTests(): void {}
}

new coinminingSmokeSpec().start();

const placeBet = async (game: any, amount: number, numberOfClicks: number) => {
  await game.clickLocator("stakeMenu");
  await game.clickLocator("stake" + amount, 1000);
  await game.clickLocator("spin", 10);
  let multiplier = 0;
  let totalClicks = 0;
  for (let i = 0; i < numberOfClicks; i++) {
    await game.waitForTimeout(500);
    await game.clickLocator("stone", 10);
    multiplier = (await game.waitForEvent("multiplier")).multiplier;
    console.log("multiplier",i, multiplier);
    if (multiplier == 0) {
      break;
    }
    totalClicks = i;
  }
  if (multiplier > 0 || multiplier === undefined) {
    await game.clickLocator("collect", 0);
  }
  const message = await game.waitForEvent(GameEvent.WinStatus);
  console.log("message", message);
  const settledResults = {
    reachMaxWin: message?.status?.reachMaxWin,
    winStatus: message?.status?.win,
    winAmount: message?.status?.win ? message?.status?.bet : 0,
    totalClicks: totalClicks + 1,
    multiplier: multiplier,
  };
  console.log("settledResults", settledResults);
  return settledResults;
};
