import { BigSmallCityLocators } from "../bigsmall-city-locators";
import { BigSmallCity1Configs, BigSmallCity2Configs, BigSmallCity3Configs, BigSmallCity4Configs } from "../bigsmall-city-configs";
import { expect } from "@playwright/test";
import { SmokeBases, Components } from "sc-automation-core";


class MultiMiniSedieSmokeSpec extends SmokeBases.MultiplayGameBase {
    /**
     *
     */
    constructor() {
        const smokeOptions: SmokeBases.MultiplayGameOptions = {
            placeBetChoices: [BigSmallCity1Configs.choices[0], BigSmallCity1Configs.choices[1]],
            gameConfiguration: BigSmallCity1Configs,
            subGameConfigurations: [BigSmallCity2Configs, BigSmallCity3Configs, BigSmallCity4Configs],
            locators: BigSmallCityLocators,
            waitBetTimeout: 5000,
            snapshotFolderPath: __filename,
            placeBetAmount: process.env.npm_config_project === "vg"? 10 : 1

        };

        super(smokeOptions);
    }

    protected inGameBetChoiceTests(): void {
        Components.test("AND bet choices should be displayed on table", async () => {
            // Arrange
            Components.test.setTimeout(this.options.gameConfiguration.maxTimeout);
            await this.game.waitUntilNextRound();

            await this.game.clickLocator("closeguide");
            await this.game.waitForTimeout(this.options.waitBetTimeout);
            // Act
            const betChoice = await this.game.captureChoice(this.options.placeBetChoices[0]);
            const gamename1 = await this.game.captureLocator("imgGame1")
            const gamename2 = await this.game.captureLocator("imgGame2")
            const gamename3 = await this.game.captureLocator("imgGame3")
            const gamename4 = await this.game.captureLocator("imgGame4")


            // Assert
            expect(betChoice.image).toMatchSnapshot(betChoice.name);
            expect(gamename1.image).toMatchSnapshot(gamename1.name);
            expect(gamename2.image).toMatchSnapshot(gamename2.name);
            expect(gamename3.image).toMatchSnapshot(gamename3.name);
            expect(gamename4.image).toMatchSnapshot(gamename4.name);

        });
    }

}

new MultiMiniSedieSmokeSpec().start();
