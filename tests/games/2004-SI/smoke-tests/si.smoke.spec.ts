import { GroupLocators, MemberSiteLocators } from "../group-locators";
import { GroupConfigs, gameConfigs } from "../group-configs";
import { SmokeBases, Components } from "sc-automation-core";
import { expect } from "@playwright/test";
import { GameEvent } from "sc-automation-core/lib/_shared";
export const extLocators = [
  new Components.ImageLocator("centerMenu", 1120, 290, 0, 0),
  new Components.ImageLocator("rightMenu", 1180, 290, 0, 0),
];

const otherGames = [1, 7, 3, 45, 10, 25, 71, 80];
let skipTests = false;

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

  protected preCondition(): void {
    Components.test(`is SI offer`, async () => {
      await Components.test.step(`Precondition for SI test`, async () => {
        await this.game.page.goto(global.authUrl);
        if (await this.game.page.locator("#TW_Close_Btn").isVisible()) {
          await this.game.page.click("#TW_Close_Btn");
        }
        skipTests = !(await this.game.page
          .locator(MemberSiteLocators.instantPlayIcon)
          .isVisible());
        console.log("isSI:", !skipTests);
        if (skipTests) {
          await this.game.page.screenshot({
            path: "/test-results/SkipTest.png",
          });
        }
      });
    });
  }

  protected smokeTestsMiniSedie(): void {
    Components.test(`Smoke Tests Mini Sedie`, async () => {
      Components.test.skip(
        skipTests,
        "Skipping test Because SI does not support at this time"
      );
      await Components.test.step(
        `Verify that game mini Sedie can be opened.`,
        async () => {
          await this.game.page.focus(MemberSiteLocators.rightCollapseMenu);
          await this.game.click(MemberSiteLocators.MiniGamesbtn, 1000);
          await this.game.click(MemberSiteLocators.instantPlayIcon, 1000);
          let firstGameIcon = await this.game.page
            .locator(MemberSiteLocators.MiniSeDiegame)
            .isVisible();
          while (!firstGameIcon) {
            await this.game.click("text=→", 1000);
          }
          await this.game.page
            .locator(MemberSiteLocators.MiniSeDiegame)
            .focus();
          await this.game.click(MemberSiteLocators.MiniSeDiegame, 1000);
          await this.game.page
            .frameLocator(
              "div >> internal:has-text=/^Instant Play←→$/ >> iframe"
            )
            .getByRole("button", { name: "Submit" })
            .click();
          await this.game.page
            .frameLocator(
              "div >> internal:has-text=/^Instant Play←→$/ >> iframe"
            )
            .locator("#GameCanvas")
            .focus();
          await this.game.waitForTimeout(5000);
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
          expect(settledResults.winAmount >= 0).toBeTruthy();
          await this.game.waitForTimeout(2000);
        }
      );
    });
  }

  protected smokeTestsECRNG(): void {
    Components.test(`Smoke Tests EC RNG`, async () => {
      Components.test.skip(
        skipTests,
        "Skipping test Because SI does not support at this time"
      );
      await Components.test.step(
        `Verify that game EC RNG can be opened.`,
        async () => {
          this.options.locators = GroupLocators[99].concat(extLocators);
          this.options.gameConfiguration.name = gameConfigs[99].name;
          this.options.gameConfiguration.id = 99;
          this.options.gameConfiguration.betBoard = gameConfigs[99].betBoard;
          await this.clickLocator("centerMenu", 0);
          await this.game.waitUntilGameUiLoad();
        }
      );

      await Components.test.step(
        `Verify that players can finish placing bets for home of EC RNG`,
        async () => {
          Components.test.setTimeout(this.options.gameConfiguration.maxTimeout);

          let bet = {
            choice: "home",
            amount: this.options.placeBetAmount ?? 1,
          };

          this.game.attachSocketAndCaptureEvent(GameEvent.WinStatus);
          this.game.attachSocketAndCaptureEvent(GameEvent.EndBet);

          // Act
          let placeBetResponse, settledResults;

          placeBetResponse = await this.placeBet(
            this.options.gameConfiguration,
            bet.choice,
            bet.amount
          );

          expect(placeBetResponse.endBet).toBe(bet.amount);
          expect(placeBetResponse.betChoice).toBe(bet.choice);
          settledResults = await this.game.waitForSettlement();

          // Assert
          expect(settledResults.winAmount >= 0).toBeTruthy();
          await this.game.waitUntilPlaceBet();
        }
      );

      await Components.test.step(
        `Verify that players can finish placing bets for away of EC RNG`,
        async () => {
          Components.test.setTimeout(this.options.gameConfiguration.maxTimeout);

          let bet = {
            choice: "away",
            amount: this.options.placeBetAmount ?? 1,
          };

          this.game.attachSocketAndCaptureEvent(GameEvent.WinStatus);
          this.game.attachSocketAndCaptureEvent(GameEvent.EndBet);

          // Act
          let placeBetResponse, settledResults;

          placeBetResponse = await this.placeBet(
            this.options.gameConfiguration,
            bet.choice,
            bet.amount
          );

          expect(placeBetResponse.endBet).toBe(bet.amount);
          expect(placeBetResponse.betChoice).toBe(bet.choice);
          settledResults = await this.game.waitForSettlement();

          // Assert
          expect(settledResults.winAmount >= 0).toBeTruthy();
        }
      );
    });
  }

  protected smokeTestsRemainGames(gameId: number): void {
    Components.test(`Smoke Tests ${gameConfigs[gameId].name}.`, async () => {
      Components.test.skip(
        skipTests,
        "Skipping test Because SI does not support at this time"
      );
      await Components.test.step(
        `Verify that game ${gameConfigs[gameId].name} can be opened.`,
        async () => {
          console.log(gameId);

          this.options.locators = GroupLocators[gameId].concat(extLocators);
          this.options.gameConfiguration.name = gameConfigs[gameId].name;
          this.options.gameConfiguration.id = gameId;
          this.options.gameConfiguration.betBoard =
            gameConfigs[gameId].betBoard;
          await this.clickLocator("rightMenu", 0);
          if (gameId >= 71) {
            await this.clickLocator("rightMenu", 18000);
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

          this.game.attachSocketAndCaptureEvent(GameEvent.WinStatus);
          this.game.attachSocketAndCaptureEvent(GameEvent.EndBet);

          // Act
          let placeBetResponse;

          if (gameId != 45) {
            placeBetResponse = await this.placeBet(
              this.options.gameConfiguration,
              bet.choice,
              bet.amount
            );
            expect(placeBetResponse.endBet).toBe(bet.amount);
            expect(placeBetResponse.endBet).toBe(bet.choice);
          } else {
            await this.placeBethilo(bet.choice, bet.amount);
          }

          await this.game.waitForTimeout(2000);
        }
      );
    });
  }

  async placeBet(gameConfigs: any, choice: string, amount: number) {
    console.log("start place bet", choice);

    let placeBetResponse = await this.betOn(gameConfigs, choice, amount);
    console.log(`placebet response`, placeBetResponse);

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

  async placeBethilo(choice: string, amount: number) {
    this.game.attachSocketAndCaptureEvent(GameEvent.EndDeal);
    await this.clickLocator("stake" + amount);
    await this.clickLocator("startbet", 2000);
    await this.clickLocator(choice + "Choice", 1000);
    await this.clickLocator("lo" + "Choice"); // click multiple choices aim to handle case first card is A
    await this.clickLocator("collect", 0);
  }

  protected runScenario(): void {
    this.preCondition();
    this.smokeTestsMiniSedie();
    this.smokeTestsECRNG();
    otherGames.forEach((gameId) => this.smokeTestsRemainGames(gameId));
  }
}

new Group4SmokeSpec().start();
