import { Group1Locators } from "../group1-locators";
import { Group1Configs } from "../group1-configs";
import { SmokeBases, Components } from "sc-automation-core";
const listGames =  [1,3,21,77]

class Group1SmokeSpec extends SmokeBases.TableGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      gameConfiguration: Group1Configs,
      locators: Group1Locators,
      waitBetTimeout: 8000,
      placeBetChoices: [Group1Configs.choices[0]],
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 10 : 1,
    };

    super(smokeOptions);
  }

  protected inGameUITest(gameId: number): void {
    Components.test(`In Game UI Tests ${gameId}`, async () => {
      console.log(global.ssoLink); 
      const token = global.ssoLink.split('?')[1]


      // await this.game.page.goto("https://www.sabagame.com/?token="+token+"&lang=vi-VN&gameId="+gameId+"&op=SG")
      // await this.game.page.goto(global.ssoLink)
      // await this.game.waitForTimeout(10000)
      const ssoLink = global.ssoLink.split('gameId')
      await this.game.page.goto(ssoLink[0]+'gameId='+gameId+'&partnerId=ONEworks1&op=SG')
      await this.game.click('//input[@value="Submit"]')
      await this.game.waitUntilGameUiLoad()
    });
  }

  
  protected runScenario(): void {
    for (const iterator of listGames) {
      this.inGameUITest(iterator)
    }
  }
}

new Group1SmokeSpec().start();
