import { MarbalFootBallLocators } from "./marbalfootball-locators";
import { MarbalFootBallConfigs } from "../marbalfootball-configs";
import { E2EBases, Components} from "sc-automation-core";
import { expect } from "@playwright/test";
import { GameEvent } from "sc-automation-core/lib/_shared";
import  verifyImage from "sc-automation-core/lib/expects/verify-image";
import { baseLocatorNames } from "sc-automation-core/lib/components/base-game-locator";


class MarbalFootBallE2ESpec extends E2EBases.MarbalGameBase {
    constructor() {
        const E2EOptions: E2EBases.IBaseOptions = {
            placeBetChoices: MarbalFootBallConfigs.choices,
            gameConfiguration: MarbalFootBallConfigs,
            locators: MarbalFootBallLocators,
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


new MarbalFootBallE2ESpec().start();
