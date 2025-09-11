import { queenofbountyLocators} from "../queenofbounty-locators";
import * as gameconfig from"../queenofbounty-configs";
import { AdminBases } from "sc-automation-core";



class QueenOfBountyAdminTDSpec extends AdminBases.CascadingBetDetailGameBase {
 
  constructor() {
    const adminOptions: AdminBases.IBaseOptions = {
      placeBetChoices: [gameconfig.queenofbountyConfigs.choices[0]],
      gameConfiguration: gameconfig.queenofbountyConfigs,
      locators: queenofbountyLocators,
      waitBetTimeout: 8000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 1 : 0.2, 
      multiPlaceBetChoices: [],
      Adminconfiguration:
        gameconfig[`AdminDataSet_` + process.env.npm_config_env],
    };
    super(adminOptions);
  }

}

new QueenOfBountyAdminTDSpec().start();



