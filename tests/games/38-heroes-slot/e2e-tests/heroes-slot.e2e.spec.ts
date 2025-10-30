import { HeroesSlotConfigs } from "../heroes-slot-configs";
import { E2EBases , Components} from "sc-automation-core";

class HeroesSlotE2ESpec extends E2EBases.PortrailClassicGameBase {
    /**
     *
     */
    constructor() {
        const e2eOptions: E2EBases.IBaseOptions = {
            placeBetChoices: [HeroesSlotConfigs.choices[0]],
            gameConfiguration: HeroesSlotConfigs,
            locators: Components.Portrail_Classic_Locators,
            waitBetTimeout: 1000,
            snapshotFolderPath: __filename,
        };
        super(e2eOptions);
    }
    async clickSpinButton() {
        await this.game.waitForTimeout(2000);
        await this.game.page.mouse.click(640, 570);
        await this.game.waitForTimeout(200);
       }
      
}

new HeroesSlotE2ESpec().start();
