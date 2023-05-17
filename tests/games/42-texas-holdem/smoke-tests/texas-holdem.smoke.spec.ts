import { expect } from "@playwright/test";
import { GameEvent } from "sc-automation-core/lib/_shared";
import { TexasHoldemPokerrLocators } from "../texas-holdem-locators";
import { TexasHoldemPokerrConfigs } from "../texas-holdem-configs";
import { SmokeBases, Components } from "sc-automation-core";

class TexasHoldemPokerrSmokeSpec extends SmokeBases.CardGameBase {
    /**
     *
     */
    constructor() {
        const smokeOptions: SmokeBases.IBaseOptions = {
            placeBetChoices: [TexasHoldemPokerrConfigs.choices[0],TexasHoldemPokerrConfigs.choices[1]],
            gameConfiguration: TexasHoldemPokerrConfigs,
            locators: TexasHoldemPokerrLocators,
            waitBetTimeout: 1000,
            snapshotFolderPath: __filename,
            placeBetAmount: process.env.npm_config_project === "vg"? 10 : 1
        };

        super(smokeOptions);
    }


    protected inGameBetChoiceTests(): void {
        Components.test("AND bet choices should be displayed on table", async () => {
            // Arrange
            Components.test.setTimeout(this.options.gameConfiguration.maxTimeout);
            await this.game.waitForTimeout(this.options.waitBetTimeout);
            await this.game.clickLocator("closeguide")

            for (const placeBetChoice of this.options.placeBetChoices) {
                // Act
                const betChoice = await this.game.captureChoice(placeBetChoice);

                // Assert
                expect(betChoice.image).toMatchSnapshot(betChoice.name);
            }
        });
    }

    protected placeBetAndSettleTests(): void {
        Components.test("THEN player able to place a bet and settle", async () => {
            // Arrange
            Components.test.setTimeout(this.options.gameConfiguration.maxTimeout);
            const bet = { choice: this.options.placeBetChoices[0], amount:this.options.placeBetAmount??1 };
            this.game.attachSocketAndCaptureEvent(GameEvent.Deal);        
           
            // Act
            const placebetdeal = await this.player.placeBet(bet.choice, bet.amount);
            let result = await followCardAndSettle(this.game)  
            
            // Assert
            expect(placebetdeal.deal.totalAmount).toBe(bet.amount);
            expect(placebetdeal.deal.choices[bet.choice]).toBe(bet.amount)
            expect(result.endBet).toBe(bet.amount*3);
            expect(result.choices[bet.choice]).toBe(bet.amount)

        });
    }

}


new TexasHoldemPokerrSmokeSpec().start();


const followCardAndSettle = async (game: any) => {
    await game.attachSocketAndCaptureEvent(GameEvent.EndBet);
    await game.waitForTimeout()
    await game.clickLocator("standcard")
    await game.waitForTimeout()
    await game.clickLocator("followcard")
    await game.waitForTimeout()
    await game.clickLocator("viewcards")
    await game.waitForTimeout()
    await game.clickLocator("viewcards")
    let endbet =  await game.latestCaptureEvent(GameEvent.EndBet);   
    let settledResults = {
        endBet:  endbet?.call.totalAmount ,
        choices:  endbet?.call.choices,
    }
    
    return settledResults
};
