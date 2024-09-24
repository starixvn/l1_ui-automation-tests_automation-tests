import { expect } from "@playwright/test";
import { BitCoinMasterLocators } from "../bitcoin-master-locators";
import { BitCoinMasterConfigs } from "../bitcoin-master-configs";
import { SmokeBases, Components } from "sc-automation-core";

class BitCoinMasterSmokeSpec extends SmokeBases.MiniGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      placeBetChoices: [BitCoinMasterConfigs.choices[0]],
      gameConfiguration: BitCoinMasterConfigs,
      locators: BitCoinMasterLocators,
      waitBetTimeout: 7000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 10 : 1,
    };

    super(smokeOptions);
  }

  protected inGameBetChoiceTests(): void {
    Components.test(
      "AND bet choices should be displayed on table",
      async () => {
        // Arrange
        Components.test.setTimeout(this.options.gameConfiguration.maxTimeout);
        await this.game.waitForTimeout(this.options.waitBetTimeout);
        for (const placeBetChoice of this.options.placeBetChoices) {
          // Act
          const betChoice = await this.game.captureChoice(placeBetChoice);
          // Assert
          expect(betChoice.image).toMatchSnapshot(betChoice.name, {maxDiffPixelRatio:0.3});
        }
      }
    );
  }

  protected ticketHistoryTests(): void {
    Components.test("AND player could open history popup", async () => {
      // Arrange
      await this.player.openHistory();
      // Act
      const historySnapshot = await this.game.captureHistory();
      // Assert
      expect(historySnapshot.image).toMatchSnapshot(historySnapshot.name);
    });
  }

  protected placeBetAndSettleTests(): void {
    Components.test("Place bet and settle", async () => {
      Components.test.setTimeout(this.options.gameConfiguration.maxTimeout * 2);
      const bet = {
        choice: this.options.placeBetChoices[0],
        amount: this.options.placeBetAmount,
      };

      // Act
      const placebetticket = await placeBet(this.game, bet);

      // Assert
      expect(placebetticket.endBet).toBe(bet.amount);
      expect(placebetticket.betChoice).toBe(bet.choice);
    });
  }

  protected hedgeBetTests(): void {
    //limit feature, will implement later
  }

  protected maxBetTests(): void {
    //limit feature, will implement later
  }

  protected gameGuideTests(): void {
  }
}

new BitCoinMasterSmokeSpec().start();

const placeBet = async (game: any, bet: any) => {
  await waitforSettlement(game);
  await game.attachSocketAndCaptureEvent("ownBets");
  await game.clickLocator(`${bet.choice}Choice`, 1000);
  await game.clickLocator(`stake${bet.amount}`, 1000);
  await game.clickLocator("submitBetBoard");
  let endbet = await game.latestCaptureEvent("ownBets");

  return endbet;
};

const waitforSettlement = async (game: any) => {
  await game.attachSocketAndCaptureEvent("finish");
  let finhish = await game.latestCaptureEvent("finish");
  for (let i = 0; i < 15; i++) {
    if (typeof finhish != "object") {
      await game.attachSocketAndCaptureEvent("finish");
      await game.waitForTimeout(10000);
      finhish = await game.latestCaptureEvent("finish");
    } else break;
  }
  await game.waitForTimeout(15000);
  return finhish;
};
