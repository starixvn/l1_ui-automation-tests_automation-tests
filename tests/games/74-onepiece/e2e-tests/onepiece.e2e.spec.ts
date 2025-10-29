import { OnePieceConfigs } from "../onepiece-configs";
import { E2EBases , Components} from "sc-automation-core";


class OnePieceE2ESpec extends E2EBases.PortrailClassicGameBase {
    /**
     *
     */
    constructor() {
        const e2eOptions: E2EBases.IBaseOptions = {
            placeBetChoices: [OnePieceConfigs.choices[0], OnePieceConfigs.choices[1]],
            gameConfiguration: OnePieceConfigs,
            locators: Components.Portrail_Classic_Locators ,
            waitBetTimeout: 5000,
            snapshotFolderPath: __filename,
            placeBetAmount: process.env.npm_config_project === "l2" ? 10 : 1,
            isJackpot: process.env.npm_config_project === "l2" ? true : false,
        };
        super(e2eOptions);
    }
}

new OnePieceE2ESpec().start();
