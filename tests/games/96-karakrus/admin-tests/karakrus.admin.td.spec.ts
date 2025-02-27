import { KaraKrusLocators } from "../karakrus-locators.ts";
import * as gameconfig from "../karakrus-configs";
import { AdminBases } from "sc-automation-core";
import { expect } from "allure-playwright";

class KaraKrusAdminSpec extends AdminBases.RoundBetDetailGameBase {
  /**
   *
   */
  constructor() {
    const adminOptions: AdminBases.IBaseOptions = {
      placeBetChoices: ["krus"],
      gameConfiguration: gameconfig.KaraKrusConfigs,
      locators: KaraKrusLocators,
      waitBetTimeout: 10000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 10 : 1, 
      Adminconfiguration:
        gameconfig[`AdminDataSet_` + process.env.npm_config_env],
    };
    super(adminOptions);
  }

  async verifyBetDetails(page: any, roundID: number, expectSnapshot: object) {
    let roundId = await page.locator("//*[@id='game-ticket']/table[1]/tbody//td[1]").innerText();

    expect(roundId.includes(roundID)).toBe(true);

    for (const key in expectSnapshot) {
        expect(await page.locator(key).screenshot()).toMatchSnapshot(expectSnapshot[key],{  maxDiffPixelRatio : 0.1 });
    }
    await page.close();
}

}

new KaraKrusAdminSpec().start();

