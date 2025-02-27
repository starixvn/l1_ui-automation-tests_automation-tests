import { SeDie3Locators } from "../sedie3-locators.ts";
import * as gameconfig from "../sedie3-configs";
import { AdminBases } from "sc-automation-core";
import { expect } from "allure-playwright";

class SedieAdminSpec extends AdminBases.RoundBetDetailGameBase {
  /**
   *
   */
  constructor() {
    const adminOptions: AdminBases.IBaseOptions = {
      placeBetChoices: ["white"],
      gameConfiguration: gameconfig.SeDie3Configs,
      locators: SeDie3Locators,
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
        expect(await page.locator(key).screenshot()).toMatchSnapshot(expectSnapshot[key],{  maxDiffPixelRatio : 0.2 });
    }
    await page.close();
}

}

new SedieAdminSpec().start();

