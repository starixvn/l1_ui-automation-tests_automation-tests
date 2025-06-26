import { BitCoinMasterConfigs } from "../bitcoin-master-configs";
import { E2EBases, Components } from "sc-automation-core";
import { BitcoinMasterLocatorsLocators } from "./bitcoin-master-locators";
import { expect } from "sc-automation-core/lib/expects";
import  verifyImage from "sc-automation-core/lib/expects/verify-image";
import { GameEvent } from "sc-automation-core/lib/_shared";
import { GameGuides } from "sc-automation-core/lib/game-components/guides/guides.spec";

class TexasHoldemPokerE2ESpec extends E2EBases.TableGameBase {
  /**
   *
   */
  constructor() {
    const e2eOptions: E2EBases.IBaseOptions = {
      placeBetChoices: [BitCoinMasterConfigs.choices[0]],
      gameConfiguration: BitCoinMasterConfigs,
      locators: BitcoinMasterLocatorsLocators,
      waitBetTimeout: 8000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 10 : 1,
      multiPlaceBetChoices: [],
      historyItems : {
        roundid: "phien",
        betamount: "baseTotalAmount",
        betwin: "baseRefund"
    },
    };
    super(e2eOptions);
  }
  
  protected inGameUiTests(): void {
    Components.test("Verify UI of table game @UI01", async () => {
      await verifyImage(this.game, 'imgGameName')
      await verifyImage(this.game, 'icoHistory')
      await verifyImage(this.game, 'icoCloseGame')
      await verifyImage(this.game, 'icoGameGuide')
      await verifyImage(this.game, 'icoStatistic')
      await this.game.clickLocator("icoStatistic", 2000);
      await verifyImage(this.game, 'imgStatistic')
      await this.game.clickLocator("icoStatisticClose", 2000);
  });
  }

  protected placeBetAndSettleTests(): void {
    Components.test("Place bet and settle", async () => {
      Components.test.setTimeout(this.options.gameConfiguration.maxTimeout * 3);
      const bet = {
        choice: this.options.placeBetChoices[0],
        amount: this.options.placeBetAmount,
      };

      // Act
      const placebetticket = await placeBet(this.game, bet);

      // Assert
      expect(placebetticket.endBet).toBe(bet.amount);
      expect(placebetticket.betChoice).toBe(bet.choice);
      const settleResult = await waitforSettlement(this.game)
      const settledata = {
        roundId: settleResult?.finish?.roundId,
        betwin: bet.amount,
        bet: bet.amount,
    };
    global.settledata = settledata;
    });
  }
  protected guideTests(): void {
    Components.test("Verify game guide", async () => {
      await this.game.clickLocator("outside", 2000);
      await this.game.clickLocator("icoHistory", 6000);
      await verifyImage(this.game, 'imgGameGuide')
      await this.game.clickLocator("outside", 2000);
  });
  }
  protected runScenario(): void {
    this.inGameUiTests();
    this.placeBetAndSettleTests();
    this.betHistory.tests();
    this.guideTests();

  }
}

new TexasHoldemPokerE2ESpec().start();

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
  let finish = await game.latestCaptureEvent("finish");
  for (let i = 0; i < 15; i++) {
    if (typeof finish != "object") {
      await game.attachSocketAndCaptureEvent("finish");
      await game.waitForTimeout(10000);
      finish = await game.latestCaptureEvent("finish");
    } else break;
  }
  await game.waitForTimeout(15000);
  return finish;
};


