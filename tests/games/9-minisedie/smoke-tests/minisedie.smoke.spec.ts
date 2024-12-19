import { MiniSedieLocators } from "../minisedie-locators";
import {
  MiniSedie1Configs,
  MiniSedie2Configs,
  MiniSedie3Configs,
  MiniSedie4Configs,
} from "../minisedie-configs";
import { SmokeBases } from "sc-automation-core";

class MultiMiniSedieSmokeSpec extends SmokeBases.MultiplayGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.MultiplayGameOptions = {
      placeBetChoices: [
        MiniSedie1Configs.choices[0],
        MiniSedie2Configs.choices[0],
      ],
      gameConfiguration: MiniSedie1Configs,
      subGameConfigurations: [
        MiniSedie2Configs,
        MiniSedie3Configs,
        MiniSedie4Configs,
      ],
      locators: MiniSedieLocators,
      waitBetTimeout: 5000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 10 : 1,
    };

    super(smokeOptions);
  }

  protected override ticketHistoryTests(): void {}
  protected subGameplaceBetAndSettleTests(): void {}
}


new MultiMiniSedieSmokeSpec().start();
