import { FootballDiceLocators } from "../FootballDice-locators";
import { FootballDiceConfigs } from "../FootballDice-configs";
import { SmokeBases, Components } from "sc-automation-core";

class FootballDiceSmokeSpec extends SmokeBases.TableGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      gameConfiguration: FootballDiceConfigs,
      locators: FootballDiceLocators,
      waitBetTimeout: 25000,
      placeBetChoices: [FootballDiceConfigs.choices[0]],
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

new FootballDiceSmokeSpec().start();
