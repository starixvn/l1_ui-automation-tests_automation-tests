import { DragonTigerLocators } from "../dragontigerfight-locators";
import { DragonTigerConfigs } from "../dragontigerfight-configs";
import { SmokeBases, Components } from "sc-automation-core";
import { expect } from "@playwright/test";

class DragonTigerSmokeSpec extends SmokeBases.TableGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      placeBetChoices: [DragonTigerConfigs.choices[0]],
      gameConfiguration: DragonTigerConfigs,
      locators: DragonTigerLocators,
      waitBetTimeout: 7000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 10 : 1,
    };

    super(smokeOptions);
  }

  protected hedgeBetTests(): void {
   try {
    Components.test(
      "THEN player should get error when they hedge their bets",
      async () => {
        // Arrange
        const { maxTimeout, hedgeBetGroups } = this.options.gameConfiguration;
        Components.test.setTimeout(maxTimeout);

        // Act
        await this.player.placeHedgeBet(
          hedgeBetGroups[0],
          this.options.placeBetAmount ?? 1
        );
        await this.game.waitForTimeout(200);
        const error = await this.game.captureErrorMessage();

        // Assert
        expect(error.image).toMatchSnapshot(error.name);
      }
    );
   } catch (error) {
    console.log(1);
    
   }
  }



}

new DragonTigerSmokeSpec().start();
