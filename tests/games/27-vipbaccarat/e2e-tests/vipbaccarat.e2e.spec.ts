import { VipBaccaratConfigs } from "../vipbaccarat-configs";
import { E2EBases, Components } from "sc-automation-core";
import { VipBaccaratLocators } from "./vipbaccarat-locators";
import { expect } from "@playwright/test";

class VipBaccaratE2ESpec extends E2EBases.TableGameBase {
  /**
   *
   */
  constructor() {
    const e2eOptions: E2EBases.IBaseOptions = {
      placeBetChoices: [
        "big",
        "small",
        "player",
        "banker",
        "tie",
        "playerPair",
        "bankerPair",
        "natural",
      ],
      gameConfiguration: VipBaccaratConfigs,
      locators: VipBaccaratLocators,
      waitBetTimeout: 10000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 50 : 10,
      multiPlaceBetChoices:[
        "big",
        "player",
        "tie",
        "playerPair",
        "bankerPair",
      ],
      indexTicketHistory: { totalbet: -8, isIdLink: false },
      gameLobbyNavigation: [
        Components.BaseLocator.baseLocatorNames.tabSedie,
        Components.BaseLocator.baseLocatorNames.icoGame1,
      ],
      historyItems : {
        roundid: "phien",
        betamount: "small",
        betwin: "betwin"
    },
    };
    super(e2eOptions);
  }

  protected LedBarTests(): void {
    //inappropriate for this game
  }

  protected returnGameLobby(): void {
  }

  protected turnbackGame(): void {
  }
  
  protected inGameUiTests() {
    Components.test("Verify the dealer image appears @UI01", async () => {
        // Act
        await this.game.waitUntilNextRound();
        await this.game.waitForTimeout(this.options.waitBetTimeout);
        const dealerSnapshot = await this.game.capture('imgdealer');
        // Assert
        expect(dealerSnapshot.image).toMatchSnapshot(dealerSnapshot.name, { maxDiffPixelRatio: 0.3 });
    });

    Components.test("Verify all bet choices display correctly @UI02", async () => {
        for (const iterator of this.options.placeBetChoices) {
            // Act
            const choiceSnapshot = await this.game.capture(iterator + "Choice");
            // Assert
            expect(choiceSnapshot.image).toMatchSnapshot(choiceSnapshot.name);
        }
    });
    Components.test("Verify default state of chip bar @UI03", async () => {
        const chipbar = await this.game.capture(`defaultChipBar${process.env.npm_config_project}`);
        // Assert
        expect(chipbar.image).toMatchSnapshot(chipbar.name);
    });

    Components.test("Verify UI of statistic @UI03", async () => {
      const imgStatistic = await this.game.capture(`imgStatistic`);
      // Assert
      expect(imgStatistic.image).toMatchSnapshot(imgStatistic.name);
  });

}

}

new VipBaccaratE2ESpec().start();

