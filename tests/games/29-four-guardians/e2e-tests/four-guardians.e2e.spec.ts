import { FourGuardiansConfigs } from "../four-guardians-configs";
import { E2EBases, Components } from "sc-automation-core";

class FourGuardiansE2ESpec extends E2EBases.PortrailClassicGameBase {
    /**
     *
     */
    constructor() {
        const e2eOptions: SmokeBases.IBaseOptions = {
            placeBetChoices: [
                FourGuardiansConfigs.choices[0],
                FourGuardiansConfigs.choices[1],
            ],
            gameConfiguration: FourGuardiansConfigs,
            locators: Components.Portrail_Classic_Locators ,
            waitBetTimeout: 5000,
            snapshotFolderPath: __filename,
        };
        super(e2eOptions);
    }
}

new FourGuardiansE2ESpec().start();
