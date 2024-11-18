import { SedieLocators } from "../sedie-locators";
import { SedieConfigs } from "../sedie-configs";
import { SmokeBases, Components } from "sc-automation-core";
import { expect } from "@playwright/test";

const l1lstMiniGames = [
  { gamename: "minisedie", gamemsg: "Xóc Đĩa Mini" },
  { gamename: "oeturbo", gamemsg: "Chẵn Lẻ Siêu Tốc" },
  { gamename: "cointoss", gamemsg: "Tung Đồng Xu" },
  { gamename: "fishprawncrab", gamemsg: "Bầu Cua" },
  { gamename: "dragontiger", gamemsg: "Rồng Hổ" },
  { gamename: "BigSmall", gamemsg: "Tài Xỉu" },
  { gamename: "FootballDice", gamemsg: "Tung Xu Bóng Đá" },
  
];

const l2lstMiniGames = [
  { gamename: "minisedie", gamemsg: "Xóc Đĩa Mini" },
  { gamename: "l2BigSmall", gamemsg: "Tài Xỉu" },
  { gamename: "l2oeturbo", gamemsg: "Chẵn Lẻ Siêu Tốc" },
  { gamename: "l2fishprawncrab", gamemsg: "Bầu Cua" },
  { gamename: "l2bigsmallcity", gamemsg: "Las Vegas" },
  { gamename: "l2dragontiger", gamemsg: "Rồng Hổ" },
  { gamename: "l2cointoss", gamemsg: "Tung Đồng Xu" },

];

class SedieSmokeSpec extends SmokeBases.TableGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      gameConfiguration: SedieConfigs,
      locators: SedieLocators,
      waitBetTimeout: 8000,
      placeBetChoices: [SedieConfigs.choices[0]],
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 10 : 1,
    };

    super(smokeOptions);
  }

  protected OpenMiniGame(): void {
    const miniGamesList = process.env.npm_config_project === "l2" ? l2lstMiniGames : l1lstMiniGames; // Select the correct mini games list
    for (const { gamename, gamemsg } of miniGamesList) {
      Components.test(`Verify user can open ${gamename}`, async () => {
        Components.test.setTimeout(this.options.gameConfiguration.maxTimeout);
        await verifyopenminigame(this.game, gamename, gamemsg);
      });
    }
  }

  protected runScenario(): void {
    super.runScenario();
    // this.OpenMiniGame();
  }
}

new SedieSmokeSpec().start();

const verifyopenminigame = async (
  game: any,
  gamename: string,
  gamemsg: string
) => {
  await game.clickLocator("minigamesicon",1000);
  // await game.page.screenshot({ path: "test.png" });
  await game.clickLocator(`${gamename}icon`, 0);
  let filterA: string[] = [];
  const searchString = `LoadScene ${gamemsg}`;
  game.page.on("console", (msg) => {
    if (msg.text().includes(searchString)) {
      filterA.push(msg.text());
    }
  });

  while (filterA.length < 1) {
    await game.waitForTimeout(100);
  }
  await game.waitForTimeout(2000);
  expect(filterA.length).toEqual(1);
  // await game.page.screenshot({ path: `${gamename}close.png`});
  await game.clickLocator(`${gamename}close`, 1000);

};
