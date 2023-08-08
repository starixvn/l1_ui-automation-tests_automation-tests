import { FourGuardiansLocators } from "../four-guardians-locators";
import { FourGuardiansConfigs } from "../four-guardians-configs";
import { SmokeBases, Components } from "sc-automation-core";
import { expect } from "@playwright/test";

class FourGuardiansSmokeSpec extends SmokeBases.SlotGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      placeBetChoices: ["1", "25"],
      gameConfiguration: FourGuardiansConfigs,
      locators: FourGuardiansLocators,
      waitBetTimeout: 5000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 10 : 1,
    };
    super(smokeOptions);
  }

  protected inGameOddsTests(): void {
    Components.test("AND odds should be correct", async () => {
      await this.game.waitForTimeout(this.options.waitBetTimeout);
      // Assert
      const configOdds =
        process.env.npm_config_project === "l2"
          ? this.options.gameConfiguration[
              `${process.env.npm_config_project}odds`
            ]
          : this.options.gameConfiguration.odds;
      expect(this.game.odds).toStrictEqual(configOdds);
    });
  }
}

new FourGuardiansSmokeSpec().start();
