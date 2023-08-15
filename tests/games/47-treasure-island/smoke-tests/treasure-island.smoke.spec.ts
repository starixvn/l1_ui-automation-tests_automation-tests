import { expect } from "@playwright/test";
import { GameEvent } from "sc-automation-core/lib/_shared";
import { TreasureIslandLocators } from "../treasure-island-locators";
import { TreasureIslandConfigs } from "../treasure-island-configs";
import { SmokeBases, Components } from "sc-automation-core";

class TreasureIslandSmokeSpec extends SmokeBases.SlotGameBase {
<<<<<<< HEAD
    /**
     *
     */
    constructor() {
        const smokeOptions: SmokeBases.IBaseOptions = {
            placeBetChoices: [TreasureIslandConfigs.choices[0]],
            gameConfiguration: TreasureIslandConfigs,
            locators: TreasureIslandLocators,
            waitBetTimeout: 5000,
            snapshotFolderPath: __filename,
            placeBetAmount: process.env.npm_config_project === "vg"? 10 : 1
        };
        super(smokeOptions);
    }
=======
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      placeBetChoices: [TreasureIslandConfigs.choices[0]],
      gameConfiguration: TreasureIslandConfigs,
      locators: TreasureIslandLocators,
      waitBetTimeout: 5000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 5 : 1,
    };
    super(smokeOptions);
  }
>>>>>>> master

  protected betStakeLevelTests(): void {
    // no test
  }

<<<<<<< HEAD
            const bet = { choice: TreasureIslandConfigs.choices[0], amount:this.options.placeBetAmount??1 };
            this.game.attachSocketAndCaptureEvent(GameEvent.WinStatus);

            // Act
            const placeBetResponse = await this.player.placeBet(bet.choice, bet.amount);
            await this.game.waitForSettlement();
            
            // Assert
            expect(placeBetResponse.endBet).toBe(bet.amount * parseFloat(bet.choice));
        });
    }
=======
  protected placeBetAndSettleTests(): void {
    Components.test("THEN player able to place a bet and settle", async () => {
      // Arrange
      Components.test.setTimeout(this.options.gameConfiguration.maxTimeout);

      const bet = {
        choice: TreasureIslandConfigs.choices[0],
        amount: this.options.placeBetAmount ?? 1,
      };
      this.game.attachSocketAndCaptureEvent(GameEvent.WinStatus);

      // Act
      const placeBetResponse = await this.player.placeBet(
        bet.choice,
        bet.amount
      );
      await this.game.waitForSettlement();

      // Assert

      expect(placeBetResponse.endBet).toBe(bet.amount * parseFloat(bet.choice));
    });
  }
>>>>>>> master
}

new TreasureIslandSmokeSpec().start();
