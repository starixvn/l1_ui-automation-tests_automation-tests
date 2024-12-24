import { MarblelFootBallLocators } from "./marblelfootball-locators";
import { MarbleFootBallConfigs } from "../marblelfootball-configs";
import { E2EBases, Components} from "sc-automation-core";

class MarbleFootBallE2ESpec extends E2EBases.MarbalGameBase {
    constructor() {
        const E2EOptions: E2EBases.IBaseOptions = {
            placeBetChoices: MarbleFootBallConfigs.choices,
            gameConfiguration: MarbleFootBallConfigs,
            locators: MarblelFootBallLocators,
            waitBetTimeout: 85000,
            snapshotFolderPath: __filename,
            multiPlaceBetChoices: ["draw", "over"],
            historyItems : {
                roundid: "roundId",
                betamount: "amount",
                betwin: "betwin"
            },
            gameLobbyNavigation: [
                Components.BaseLocator.baseLocatorNames.tabAll,
                Components.BaseLocator.baseLocatorNames.icoGame1,
              ],
        };
        super(E2EOptions);
    }

}

new MarbleFootBallE2ESpec().start();
