import { ClassicSlotLocators } from "./four-guardians-e2e-locators";
import { FourGuardiansConfigs } from "../four-guardians-configs";
import { E2EBases } from "sc-automation-core";

class FourGuardiansE2ESpec extends E2EBases.SlotGameBase {
    /**
     *
     */
    constructor() {
        const e2eOptions: E2EBases.IBaseOptions = {
            placeBetChoices: [
                FourGuardiansConfigs.choices[0],
                FourGuardiansConfigs.choices[1],
            ],
            gameConfiguration: FourGuardiansConfigs,
            locators: ClassicSlotLocators,
            waitBetTimeout: 5000,
            snapshotFolderPath: __filename,
        };
        super(e2eOptions);
    }

    protected inGameTests(): void {
        
    }
}

new FourGuardiansE2ESpec().start();
