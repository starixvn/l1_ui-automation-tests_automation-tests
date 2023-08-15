import { FruitSlotLocators } from "../fruit-slot-locators";
import { FruitSlotConfigs } from "../fruit-slot-configs";
import { Components, SmokeBases } from "sc-automation-core";
import { expect } from "@playwright/test";

class FruitSlotSmokeSpec extends SmokeBases.TableGameBase {
<<<<<<< HEAD
    /**
     *
     */
    constructor() {
        const smokeOptions: SmokeBases.IBaseOptions = {
            gameConfiguration: FruitSlotConfigs,
            placeBetChoices: [FruitSlotConfigs.choices[8]],
            waitBetTimeout: 10000,
            locators: FruitSlotLocators,
            snapshotFolderPath: __filename,
            placeBetAmount: process.env.npm_config_project === "vg"? 10 : 1
        };
=======
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      gameConfiguration: FruitSlotConfigs,
      placeBetChoices: [FruitSlotConfigs.choices[8]],
      waitBetTimeout: 22000,
      locators: FruitSlotLocators,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 10 : 1,
    };
>>>>>>> master

    super(smokeOptions);
  }
  protected override inGameDealerTests(): void {}
  // protected inGameBetChoiceTests(): void {
  //   Components.test(
  //     "AND bet choices should be displayed on table",
  //     async () => {
  //       // Arrange
  //       Components.test.setTimeout(this.options.gameConfiguration.maxTimeout);
  //       await this.game.waitUntilNextRound();
  //       await this.game.waitForTimeout(this.options.waitBetTimeout);
  //       for (const placeBetChoice of this.options.placeBetChoices) {
  //         // Act
  //         const betChoice = await this.game.captureChoice(placeBetChoice);
  //         // Assert
  //         expect(betChoice.image).toMatchSnapshot(betChoice.name, {maxDiffPixelRatio:0.3});
  //       }
  //     }
  //   );
  // }
}

new FruitSlotSmokeSpec().start();
