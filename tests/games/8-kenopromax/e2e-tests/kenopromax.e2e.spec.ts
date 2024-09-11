import { KenoProMaxConfigs } from "../KenoProMax-configs";
import { E2EBases, Components } from "sc-automation-core";
import { KenoProMaxLocators } from "./KenoProMax-locators";
import { expect } from "@playwright/test";
import { GameEvent } from "sc-automation-core/lib/_shared";
import { baseLocatorNames } from "sc-automation-core/lib/components/base-game-locator";
import  verifyImage from "sc-automation-core/lib/expects/verify-image";

class KenoProMaxE2ESpec extends E2EBases.TableGameBase {
  /**
   *
   */
  constructor() {
    const e2eOptions: E2EBases.IBaseOptions = {
      placeBetChoices: KenoProMaxConfigs.choices,
      gameConfiguration: KenoProMaxConfigs,
      locators: KenoProMaxLocators,
      waitBetTimeout: 25500,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 10 : 1,
      multiPlaceBetChoices: ["big","odd","gold", "wood","water","fire","earth"],
      indexTicketHistory: { totalbet: -2, isIdLink: false },
      gameLobbyNavigation: [
        Components.BaseLocator.baseLocatorNames.tabOthers,
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

  protected inGameUiTests(): void {
    Components.test("Verify all bet choices display correctly @UI01", async () => {
        await this.game.waitForEvent(GameEvent.StartRound)
        await this.game.waitForTimeout(5500)
        for (const iterator of this.options.placeBetChoices) {
            // Act
            await verifyImage(this.game, iterator + "Choice")
        }
    });
    Components.test("Verify default state of chip bar @UI02", async () => {
        await verifyImage(this.game, `defaultChipBar${process.env.npm_config_project}`, 0.05)
    });
    Components.test("Verify UI of statistic @UI03", async () => {
      await verifyImage(this.game, `imgStatistic`);
      await this.game.waitForTimeout(4000);
    });    
  }

protected LedBarTests(): void {
}

protected turnbackGame(): void {
}

protected returnGameLobby(): void {
  
}

}

new KenoProMaxE2ESpec().start();

