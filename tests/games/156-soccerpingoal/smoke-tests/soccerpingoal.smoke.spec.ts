import { SoccerPingoalLocators } from "../soccerpingoal-locators";
import { SoccerPingoalConfigs } from "../soccerpingoal-configs";
import { SmokeBases, Components } from "sc-automation-core";
import { expect } from "playwright/test";
import  verifyImage from "sc-automation-core/lib/expects/verify-image";
import { GameEvent } from "sc-automation-core/lib/_shared";;

class SoccerPingoalSmokeSpec extends SmokeBases.TableGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      placeBetChoices: [SoccerPingoalConfigs.choices[0]],
      gameConfiguration: SoccerPingoalConfigs,
      locators: SoccerPingoalLocators,
      waitBetTimeout: 14000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 10 : 1,
    };
    super(smokeOptions);
  }
  protected betChoicesTests() {
    Components.test("Ensure player joined game and saw dealer", async () => {
        // Act
        for (const choice of SoccerPingoalConfigs.choices) {
          await verifyImage(this.game, `${choice}Choice`, 0.05);
        }
    });
  }

  protected placeBetAndSettleTests(): void {
     Components.test("Ensure player place bet and settle successfully", async () => {
        // Act
        const betAmount = this.options.placeBetAmount;
        this.game.attachSocketAndCaptureEvent(GameEvent.OwnBets);
        this.game.attachSocketAndCaptureEvent(GameEvent.Settlement);
        await this.game.clickLocator("redChoice");
        await this.game.clickLocator("btnBet");
        await this.game.waitForTimeout(5000);
        const ownBets = await this.game.latestCaptureEvent(GameEvent.OwnBets);
        const settlement = await this.game.latestCaptureEvent(GameEvent.Settlement);

        // Assert
        console.log(settlement);
        expect(ownBets.endBet).toBe(betAmount);
        expect(settlement.finish.settlementResult).toBeDefined();
        
    });
  }
  
  protected runScenario(): void {
    this.betChoicesTests();
    this.placeBetAndSettleTests();
    this.ticketHistoryTests();
    this.gameGuideTests();
  }
}

new SoccerPingoalSmokeSpec().start();
