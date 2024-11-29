import { MobiLocators } from "../fishprawncrab-locators";
import { FPCConfigs } from "../fishprawncrab-configs";
import { SmokeBases } from "sc-automation-core";

let extConfigs = { ...FPCConfigs };
extConfigs.socketName = "gw";

class FPCSmokeSpec extends SmokeBases.MobiGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      gameConfiguration: extConfigs,
      locators: MobiLocators,
      waitBetTimeout: 5000,
      placeBetChoices: extConfigs.choices,
      snapshotFolderPath: __filename,
      placeBetAmount: 10,
    };

    super(smokeOptions);
  }

  protected hedgeBetTests(): void {
      //no hedge bets
  }
}

new FPCSmokeSpec().start();
