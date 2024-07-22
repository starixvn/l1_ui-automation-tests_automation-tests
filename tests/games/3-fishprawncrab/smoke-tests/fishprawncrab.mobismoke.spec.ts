import { MobiLocators } from "../fishprawncrab-locators";
import { FPCConfigs } from "../fishprawncrab-configs";
import { SmokeBases } from "sc-automation-core";

class SedieSmokeSpec extends SmokeBases.MobiGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      gameConfiguration: FPCConfigs,
      locators: MobiLocators,
      waitBetTimeout: 1000,
      placeBetChoices: FPCConfigs.choices,
      snapshotFolderPath: __filename,
      placeBetAmount: 10,
    };

    super(smokeOptions);
  }

  protected hedgeBetTests(): void {
      //no hedge bets
  }
}

new SedieSmokeSpec().start();
