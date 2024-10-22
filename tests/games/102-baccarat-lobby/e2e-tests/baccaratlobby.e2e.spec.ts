import { BaccaratLobbyConfigs } from "../BaccaratLobby-configs";
import { E2EBases, Components } from "sc-automation-core";
import { BaccaratLobbyLocators } from "./BaccaratLobby-locators";
import { baseLocatorNames } from "sc-automation-core/lib/components/base-game-locator";
import { GameEvent } from "sc-automation-core/lib/_shared";
import { expect } from "sc-automation-core/lib/expects";
import  verifyImage from "sc-automation-core/lib/expects/verify-image";
import { BaseGame } from "sc-automation-core/lib/components";
const extraRate = 0.2;

class BaccaratLobbyE2ESpec extends E2EBases.TableGameBase {
  /**
   *
   */
  constructor() {
    const e2eOptions: E2EBases.IBaseOptions = {
      placeBetChoices: BaccaratLobbyConfigs.choices,
      gameConfiguration: BaccaratLobbyConfigs,
      locators: BaccaratLobbyLocators,
      waitBetTimeout: 1000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 10 : 1,
      multiPlaceBetChoices: [BaccaratLobbyConfigs.choices[1], BaccaratLobbyConfigs.choices[4], BaccaratLobbyConfigs.choices[3], BaccaratLobbyConfigs.choices[2]],
      indexTicketHistory: { totalbet: -2, isIdLink: false },
      gameLobbyNavigation: [
        Components.BaseLocator.baseLocatorNames.tabOthers,
        Components.BaseLocator.baseLocatorNames.icoGame1,
      ],
      historyItems : {
        roundid: "phien",
        betamount: "amount",
        betwin: "betwin"
    },
    };
    super(e2eOptions);
  }



  protected runScenario(): void {
    Components.test("Verify all baccarat games in baccarat lobby", async () => {
      await this.game.waitForTimeout(3000)
      for (let index = 0; index < listGameAll.length; index++) {
        if(index > 1 && (index+1)%6 == 1) {
          console.log((index+1)%6);
          
          await this.game.clickLocator('icoScroll')
        }
        await verifyImage(this.game, `imgGameIcon${listGameAll[index]}`)
      }
    });
    Components.test("Verify baccarat games in lucky tab lobby", async () => {
      await this.game.clickLocator(`imgCategoryLucky`)
      for (let index = 0; index < listGameLucky.length; index++) {
        if(index > 1 && (index+1)%6 == 1) {
          console.log((index+1)%6);
          
          await this.game.clickLocator('icoScroll')
        }
        await verifyImage(this.game, `imgLuckyGameIcon${listGameLucky[index]}`)
      }
      await this.game.clickLocator(`imgCategoryLucky`)
    });

    Components.test("Verify baccarat games in speed tab lobby", async () => {
      await this.game.clickLocator(`imgCategorySpeed`)
      for (let index = 0; index < listGameSpeed.length; index++) {
        if(index > 1 && (index+1)%6 == 1) {
          console.log((index+1)%6);
          
          await this.game.clickLocator('icoScroll')
        }
        await verifyImage(this.game, `imgSpeedGameIcon${listGameSpeed[index]}`)
      }
      await this.game.clickLocator(`imgCategorySpeed`)
    });

    Components.test("Verify baccarat games in classic tab lobby", async () => {
      await this.game.clickLocator(`imgCategoryClassic`)
      for (let index = 0; index < listGameClassic.length; index++) {
        if(index > 1 && (index+1)%6 == 1) {
          console.log((index+1)%6);
          
          await this.game.clickLocator('icoScroll')
        }
        await verifyImage(this.game, `imgClassicGameIcon${listGameClassic[index]}`)
      }
      await this.game.clickLocator(`imgCategoryClassic`)
    });

    Components.test("Verify joining all games from baccarat lobby", async () => {
      Components.test.setTimeout(this.options.gameConfiguration.maxTimeout*3);
      for (let index = 0; index < listGameAll.length; index++) {
        for (let i = 0; i < (index/6 | 0) ; i++) {
          await this.game.clickLocator('icoScroll', 2000)
          console.log("nooo");
          
        }
        await this.game.clickLocator(`imgGameIcon${listGameAll[index]}`)
        console.log("CLICKKKK");
       // await this.game.waitForTimeout(3000);
        await this.game.waitUntilGameUiLoad(1);
        await verifyImage(this.game, `imgDealer${listGameAll[index]}`)
        await this.game.clickLocator(`btnHome${listGameAll[index]}`)
        await this.game.waitForTimeout(3000);
      }
    });
  }

}

let listGameAll = [ "VIPBaccarat", "LuckyBaccarat", "LuckyBaccarat2", "LuckyBaccarat3", "Baccarat2", "Baccarat3", "VIPBaccarat2", "VIPBaccarat3", "LuckyBaccarat4", "LuckyBaccarat5", "Baccarat4", "Baccarat5", "VIPBaccarat4", "VIPBaccarat5", "SpeedBaccarat", "SpeedBaccarat2", "SpeedBaccarat3"]
let listGameLucky = ["LuckyBaccarat", "LuckyBaccarat2", "LuckyBaccarat3", "LuckyBaccarat4", "LuckyBaccarat5"]
let listGameSpeed = ["SpeedBaccarat", "SpeedBaccarat2", "SpeedBaccarat3"]
let listGameClassic = ["VIPBaccarat",] //"Baccarat2", "Baccarat3", "VIPBaccarat2", "VIPBaccarat3", "Baccarat4", "Baccarat5", "VIPBaccarat4", "VIPBaccarat5"]

new BaccaratLobbyE2ESpec().start();
