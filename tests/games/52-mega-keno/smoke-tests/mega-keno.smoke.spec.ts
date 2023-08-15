import { MegaKenoLocators } from "../mega-keno-locators";
import { MegaKenoConfigs, MegaKeno2Configs } from "../mega-keno-configs";
import { expect } from "@playwright/test";
import { SmokeBases, Components } from "sc-automation-core";

class MultiMiniSedieSmokeSpec extends SmokeBases.MultiplayGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.MultiplayGameOptions = {
      placeBetChoices: [MegaKenoConfigs.choices[0], MegaKenoConfigs.choices[1]],
      gameConfiguration: MegaKenoConfigs,
      subGameConfigurations: [MegaKeno2Configs],
      locators: MegaKenoLocators,
      waitBetTimeout: 5000,
      snapshotFolderPath: __filename,
<<<<<<< HEAD
      placeBetAmount: process.env.npm_config_project === "vg" ? 10 : 1,
=======
      placeBetAmount: process.env.npm_config_project === "l2" ? 10 : 1,
>>>>>>> master
    };

    super(smokeOptions);
  }

  protected inGameBetChoiceTests(): void {
    Components.test("AND bet choices should be displayed on table",
      async () => {
        // Arrange
        Components.test.setTimeout(this.options.gameConfiguration.maxTimeout);
<<<<<<< HEAD
        await this.game.clickLocator("mnuKeno");
        await this.game.waitForTimeout(1000);
        await this.game.clickLocator("icoMegaKeno");
        await this.game.waitForTimeout(this.options.waitBetTimeout * 5);
=======
         await this.game.waitForTimeout(this.options.waitBetTimeout);
>>>>>>> master

        // Act
        const gamename1 = await this.game.captureLocator("imgGame1");
        const gamename2 = await this.game.captureLocator("imgGame2");
        const gamename3 = await this.game.captureLocator("imgGame3");
        const gamename4 = await this.game.captureLocator("imgGame4");

        // Assert
        expect(gamename1.image).toMatchSnapshot(gamename1.name);
        expect(gamename2.image).toMatchSnapshot(gamename2.name);
        expect(gamename3.image).toMatchSnapshot(gamename3.name);
        expect(gamename4.image).toMatchSnapshot(gamename4.name);
      }
    );
  }

  protected hedgeBetTests(): void {
    Components.test("THEN player should get error when they hedge their bets", async () => {
      // Arrange
      Components.test.setTimeout(this.options.gameConfiguration.maxTimeout);
      // Act
      await this.player.placeHedgeBet(this.options.gameConfiguration.hedgeBetGroups[0], 1);
      await this.game.waitForTimeout(100)
      const error = await this.game.captureErrorMessage();
      // Assert
      expect(error.image).toMatchSnapshot(error.name, {maxDiffPixelRatio : 0.3});
  });
  }

}

new MultiMiniSedieSmokeSpec().start();
