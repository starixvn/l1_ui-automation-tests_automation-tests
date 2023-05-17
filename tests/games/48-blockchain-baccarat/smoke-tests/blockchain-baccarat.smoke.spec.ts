import { BlockchainBaccaratLocators } from "../blockchain-baccarat-locators";
import { BlockchainBaccaratConfigs } from "../blockchain-baccarat-configs";
import { SmokeBases, Components } from "sc-automation-core";

class BlockchainBaccaratSmokeSpec extends SmokeBases.TableGameBase {
    /**
     *
     */
    constructor() {
        const smokeOptions: SmokeBases.IBaseOptions = {
            placeBetChoices: [BlockchainBaccaratConfigs.choices[0]],
            gameConfiguration: BlockchainBaccaratConfigs,
            locators: BlockchainBaccaratLocators,
            waitBetTimeout: 18000,
            snapshotFolderPath: __filename,
            placeBetAmount: process.env.npm_config_project === "vg"? 10 : 1
        };
        super(smokeOptions);
    }

    protected inGameDealerTests(): void {
        Components.test("Close game guide at first time load", async () => {
            await this.game.waitForTimeout(5000);
            await this.game.clickLocator("closeguide");
        });
    }
}

new BlockchainBaccaratSmokeSpec().start();
