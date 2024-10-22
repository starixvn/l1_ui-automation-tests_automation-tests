import { KaraKrusLocators } from "../KaraKrus-locators";
import { KaraKrusConfigs } from "../KaraKrus-configs";
import { SmokeBases, Components } from "sc-automation-core";

class KaraKrusSmokeSpec extends SmokeBases.TableGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      gameConfiguration: KaraKrusConfigs,
      locators: KaraKrusLocators,
      waitBetTimeout: 7000,
      placeBetChoices: [KaraKrusConfigs.choices[0]],
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

new KaraKrusSmokeSpec().start();
