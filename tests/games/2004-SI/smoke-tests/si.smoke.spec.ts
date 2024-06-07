import { GroupLocators, MemberSiteLocators } from "../group-locators";
import { GroupConfigs, gameConfigs } from "../group-configs";
import { SmokeBases, Components } from "sc-automation-core";
import { expect } from "@playwright/test";
import { GameEvent } from "sc-automation-core/lib/_shared";
export const extLocators = [
  new Components.ImageLocator("centerMenu", 1092, 290, 0, 0),
  new Components.ImageLocator("rightMenu", 1154, 290, 0, 0),
  new Components.ImageLocator("leftMenu", 988, 290, 0, 0),
];

const lstOtherGames = [7, 3, 45, 10, 25, 71, 80];

// 1 , 3, ,7 ,9, 10, 45
class Group4SmokeSpec extends SmokeBases.TableGameBase {
  constructor() {
    let smokeOptions: SmokeBases.IBaseOptions = {
      gameConfiguration: GroupConfigs,
      locators: GroupLocators[1],
      waitBetTimeout: 8000,
      placeBetChoices: [GroupConfigs.choices[0]],
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 10 : 1,
    };
    super(smokeOptions);
  }

  protected smokeTestsMiniSedie(): void {
    Components.test(`Smoke Tests Mini Sedie`, async () => {
      await Components.test.step(
        `Verify that game mini Sedie can be opened.`,
        async () => {
          await this.game.page.goto(global.authLink);
          await this.game.page.focus(MemberSiteLocators.rightCollapseMenu);
          await this.game.click(MemberSiteLocators.MiniGamesbtn);
          console.log(`MemberSiteLocators.instantPlayIcon`);
          await this.game.click(MemberSiteLocators.instantPlayIcon);
          await this.game.click("text=→", 1000);
          await this.game.click("text=→", 1000);
          await this.game.click(MemberSiteLocators.MiniSeDiegame, 1000);
          await this.game.page
            .frameLocator(
              "div >> internal:has-text=/^Instant Play←→$/ >> iframe"
            )
            .getByRole("button", { name: "Submit" })
            .click();
          await this.game.waitForTimeout(10000);
          await this.game.page
            .frameLocator(
              "div >> internal:has-text=/^Instant Play←→$/ >> iframe"
            )
            .locator("#GameCanvas")
            .focus();

          this.options.locators = GroupLocators[9].concat(extLocators);
          this.options.gameConfiguration.name = gameConfigs[9].name;
          this.options.gameConfiguration.id = 9;
          this.options.gameConfiguration.betBoard = gameConfigs[9].betBoard;
        }
      );

      await Components.test.step(
        `Verify that players can finish placing bets for one round of mini Sedie`,
        async () => {
          Components.test.setTimeout(this.options.gameConfiguration.maxTimeout);

          let bet = {
            choice: gameConfigs[9].betchoice,
            amount: this.options.placeBetAmount ?? 1,
          };

          console.log(bet);

          this.game.attachSocketAndCaptureEvent(GameEvent.WinStatus);
          this.game.attachSocketAndCaptureEvent(GameEvent.EndBet);

          // Act
          let placeBetResponse, settledResults;

            placeBetResponse = await this.placeBet(
              this.options.gameConfiguration,
              bet.choice,
              bet.amount
            );
            console.log(placeBetResponse);

            expect(placeBetResponse.endBet).toBe(bet.amount);
            settledResults = await this.game.waitForSettlement();

          // Assert
          expect(settledResults.winAmount).not.toBe("undefined");
          await this.game.waitForTimeout(2000);

        }
      );
    });
  }

  protected smokeTestsBigSmall(): void {
    Components.test(`Smoke Tests Big Small`, async () => {
      await Components.test.step(
        `Verify that game mini Sedie can be opened.`,
        async () => {
          this.options.locators = GroupLocators[1].concat(extLocators);
          this.options.gameConfiguration.name = gameConfigs[1].name;
          this.options.gameConfiguration.id = 1;
          this.options.gameConfiguration.betBoard = gameConfigs[1].betBoard;
          await this.clickLocator("centerMenu", 5000);
        }
      );

      await Components.test.step(
        `Verify that players can finish placing bets for one round of Big Small`,
        async () => {
          Components.test.setTimeout(this.options.gameConfiguration.maxTimeout);

          let bet = {
            choice: gameConfigs[1].betchoice,
            amount: this.options.placeBetAmount ?? 1,
          };

          console.log(bet);

          this.game.attachSocketAndCaptureEvent(GameEvent.WinStatus);
          this.game.attachSocketAndCaptureEvent(GameEvent.EndBet);

          // Act
          let placeBetResponse, settledResults;

          placeBetResponse = await this.placeBet(
            this.options.gameConfiguration,
            bet.choice,
            bet.amount
          );
          console.log(placeBetResponse);

          expect(placeBetResponse.endBet).toBe(bet.amount);
          settledResults = await this.game.waitForSettlement();

          // Assert
          expect(settledResults.winAmount).not.toBe("undefined");
          await this.game.waitForTimeout(2000);
        }
      );
    });
  }

  protected smokeTestsRemainGames(gameId: number): void {
    Components.test(`Smoke Tests ${gameConfigs[gameId].name}.`, async () => {
      await Components.test.step(
        `Verify that game ${gameConfigs[gameId].name} can be opened.`,
        async () => {
          console.log(gameId);

          this.options.locators = GroupLocators[gameId].concat(extLocators);
          this.options.gameConfiguration.name = gameConfigs[gameId].name;
          this.options.gameConfiguration.id = gameId;
          this.options.gameConfiguration.betBoard =
            gameConfigs[gameId].betBoard;
          if (gameId >= 71) {
            await this.clickLocator("rightMenu", 15000);
          } else {
            await this.clickLocator("rightMenu", 8000);
          }
          // await this.game.page.screenshot({ path: `screenshots/smokeTest-${gameConfigs[gameId].name}.png` });
        }
      );

      await Components.test.step(
        `Verify that players can finish placing bets for one round of ${gameConfigs[gameId].name}`,
        async () => {
          Components.test.setTimeout(this.options.gameConfiguration.maxTimeout);

          let bet = {
            choice: gameConfigs[gameId].betchoice,
            amount: this.options.placeBetAmount ?? 1,
          };

          console.log(bet);

          this.game.attachSocketAndCaptureEvent(GameEvent.WinStatus);
          this.game.attachSocketAndCaptureEvent(GameEvent.EndBet);

          // Act
          let placeBetResponse, settledResults;

          if (gameId != 45) {
            placeBetResponse = await this.placeBet(
              this.options.gameConfiguration,
              bet.choice,
              bet.amount
            );
            expect(placeBetResponse.endBet).toBe(bet.amount);
            settledResults = await this.game.waitForSettlement();
          } else {
            settledResults = await this.placeBethilo(bet.choice, bet.amount);
          }

          console.log(placeBetResponse);

          expect(placeBetResponse.endBet).toBe(bet.amount);
          settledResults = await this.game.waitForSettlement();

          // Assert
          expect(settledResults.winAmount).not.toBe("undefined");
          await this.game.waitForTimeout(2000);
        }
      );
    });
  }

  async placeBet(gameConfigs: any, choice: string, amount: number) {
    await this.game.waitForTimeout(2000);

    let placeBetResponse = await this.betOn(gameConfigs, choice, amount);

    if (!placeBetResponse || placeBetResponse.endBet == -1) {
      console.log("retry place bet");
      await this.game.waitUntilPlaceBet();
      placeBetResponse = await this.betOn(gameConfigs, choice, amount);
    }

    return placeBetResponse;
  }

  async betOn(
    gameConfigs: { betBoard?: boolean },
    choice: string,
    amount: number = 1
  ): Promise<any> {
    await this.clickToChoice(choice);
    if (gameConfigs.betBoard) {
      await this.clickLocator(`stake${amount}`);
      await this.clickLocator(`submitBetBoard`, 0);
    }
    return this.game.waitForEndBet();
  }

  async clickToChoice(choice: string) {
    const postfix = this.options.gameConfiguration.betBoard ? "BetBoard" : "";
    await this.clickLocator(`${choice}Choice${postfix}`, 0);
  }

  async clickLocator(element: string, wait = 500) {
    const locator = this.locator(element);

    if (locator) {
      await locator.click(this.game.page);
      await this.game.waitForTimeout(wait);
    }
  }

  locator(name: string) {
    return this.options.locators.find((x: any) => x.name === name);
  }

  protected runScenario(): void {
    this.smokeTestsMiniSedie();
    this.smokeTestsBigSmall();
    for (const gameId of lstOtherGames) {
      this.smokeTestsRemainGames(gameId);
    }
  }

  async placeBethilo(choice: string, amount: number) {
    this.game.attachSocketAndCaptureEvent(GameEvent.EndDeal);
    await this.clickLocator("stake" + amount);
    await this.clickLocator("startbet", 2000);
    await this.clickLocator(choice + "Choice", 1000);
    await this.clickLocator("lo" + "Choice", 2000); // click multiple choices aim to handle case first card is A
    await this.clickLocator("collect");
    let message = await this.game.latestCaptureEvent(GameEvent.EndDeal);

    let settledResults = {
      settlementResult: message?.result?.settlementResult,
      endBet: message?.result?.amount,
      winAmount: message?.result?.betwin,
    };
    return settledResults;
  }
}

new Group4SmokeSpec().start();
