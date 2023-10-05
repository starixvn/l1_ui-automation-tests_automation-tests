import { DJClubConfigs } from "../dj-club-configs";
import { E2EBases, Components } from "sc-automation-core";

class DJClubE2ESpec extends E2EBases.SlotGameBase {
  /**
   *
   */
  constructor() {
    const e2eOptions: E2EBases.IBaseOptions = {
      placeBetChoices: [DJClubConfigs.choices[0], DJClubConfigs.choices[1]],
      gameConfiguration: DJClubConfigs,
      locators: Components.BaseLocator.ClassicSlotLocators,
      waitBetTimeout: 5000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 10 : 1,
    };
    super(e2eOptions);
  }
}

new DJClubE2ESpec().start();
