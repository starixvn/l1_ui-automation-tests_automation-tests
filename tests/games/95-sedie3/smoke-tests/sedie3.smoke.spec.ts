import { SeDie3Locators } from "../sedie3-locators";
import { SeDie3Configs } from "../sedie3-configs";
import { SmokeBases, Components } from "sc-automation-core";

class SeDie3SmokeSpec extends SmokeBases.TableGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      gameConfiguration: SeDie3Configs,
      locators: SeDie3Locators,
      waitBetTimeout: 7000,
      placeBetChoices: [SeDie3Configs.choices[0]],
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 10 : 1,
    };

    super(smokeOptions);
  }
  protected inGameDealerTests(): void {
  }

//   protected inGameBetChoiceTests() {
//     Components.test("AND bet choices should be displayed on table", async () => {
//         // Arrange
//         Components.test.setTimeout(this.options.gameConfiguration.maxTimeout);
//         await this.game.waitUntilPlaceBet();

//         for (const placeBetChoice of this.options.placeBetChoices) {
//             // Act
//             const betChoice = await this.game.captureChoice(placeBetChoice);

//             // Assert
//             expect(betChoice.image).toMatchSnapshot(betChoice.name);
//         }
//     });
// }
}

new SeDie3SmokeSpec().start();
