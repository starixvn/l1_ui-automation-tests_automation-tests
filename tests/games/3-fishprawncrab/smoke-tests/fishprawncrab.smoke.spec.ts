import { FPCLocators } from "../fishprawncrab-locators";
import { FPCConfigs } from "../fishprawncrab-configs";
import { SmokeBases, Components } from "sc-automation-core";
import { GameEvent } from "sc-automation-core/lib/_shared";
import { expect } from "@playwright/test";

class FPCSmokeSpec extends SmokeBases.MiniGameBase {
<<<<<<< HEAD
    /**
     *
     */
    constructor() {
        const smokeOptions: SmokeBases.IBaseOptions = {
            placeBetChoices: [FPCConfigs.choices[3]],
            gameConfiguration: FPCConfigs,
            locators: FPCLocators,
            waitBetTimeout: 10000,
            snapshotFolderPath: __filename,
            placeBetAmount: process.env.npm_config_project === "vg"? 10 : 1
        };
=======
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      placeBetChoices: [FPCConfigs.choices[3]],
      gameConfiguration: FPCConfigs,
      locators: FPCLocators,
      waitBetTimeout: 10000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 10 : 1,
    };
>>>>>>> master

    super(smokeOptions);
  }
  protected override hedgeBetTests(): void {}

<<<<<<< HEAD
    protected placeBetAndSettleTests(): void {
        Components.test("THEN player able to place a bet and settle", async () => {
            Components.test.setTimeout(this.options.gameConfiguration.maxTimeout);
            const bet = { choice: this.options.placeBetChoices[0], amount: this.options.placeBetAmount ?? 1 };
            
            this.game.attachSocketAndCaptureEvent(GameEvent.WinStatus);
=======
  protected placeBetAndSettleTests(): void {
    Components.test("THEN player able to place a bet and settle", async () => {
      Components.test.setTimeout(this.options.gameConfiguration.maxTimeout);
      const bet = {
        choice: this.options.placeBetChoices[0],
        amount: this.options.placeBetAmount ?? 1,
      };
>>>>>>> master

      this.game.attachSocketAndCaptureEvent(GameEvent.WinStatus);

      // Act
      const placeBetResponse = await this.player.placeBet(
        bet.choice,
        bet.amount
      );
      const settledResults = await this.game.waitForSettlement();

      // Assert
      expect(placeBetResponse.endBet).toBe(bet.amount);
      expect(settledResults.settlementResult).toMatchBetOptions(
        this.options.gameConfiguration.choices
      );
    });
  }
}

new FPCSmokeSpec().start();
