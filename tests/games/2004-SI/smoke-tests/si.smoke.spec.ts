import { GroupLocators, MemberSiteLocators } from "../group-locators";
import { GroupConfigs, gameConfigs } from "../group-configs";
import { SmokeBases, Components } from "sc-automation-core";
import { expect } from "@playwright/test";
import { GameEvent } from "sc-automation-core/lib/_shared";

const listGames = [1];

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

  protected smokeTests(gameId: number): void {
    Components.test(`Smoke Tests ${gameConfigs[gameId].name}.`, async () => {
      await Components.test.step(
        `Verify that game ${gameConfigs[gameId].name} can be opened.`,
        async () => {

          // const ssoLink = global.ssoLink.split(tagGame);
          // console.log(ssoLink);
          await this.game.page.goto(global.authLink);
          await this.game.page.focus(MemberSiteLocators.rightCollapseMenu)
          // await this.game.click(MemberSiteLocators.rightCollapseMenu)
          await this.game.click(MemberSiteLocators.MiniGamesbtn)
          console.log(`MemberSiteLocators.instantPlayIcon`);
          
          await this.game.click(MemberSiteLocators.instantPlayIcon)
          console.log(`MemberSiteLocators.BigSmallgame`);
          await this.game.click(MemberSiteLocators.BigSmallgame)

          await this.game.waitForTimeout(1000)
          if (!process.env.npm_config_env?.includes("local")) {
            const frameExists = await this.game.page.$("#frmGame");
            if (frameExists) {
              await this.game.page
                .frameLocator("#frmGame")
                .locator("text=Submit")
                .click();
            } else {
              await this.game.page.locator("text=Submit").click();
            }
          }
          // await this.game.waitUntilGameUiLoad();
          // // this.game.gameSocket =

          // this.options.locators = GroupLocators[gameId];
          // this.options.gameConfiguration.name = gameConfigs[gameId].name;
          // this.options.gameConfiguration.id = gameId;
          // this.options.gameConfiguration.betBoard =
          //   gameConfigs[gameId].betBoard;


        }
      );

      // await Components.test.step(
      //   `Verify that players can finish placing bets for one round of Game ${gameConfigs[gameId].name}.`,
      //   async () => {
      //     Components.test.setTimeout(this.options.gameConfiguration.maxTimeout);

      //     let bet = {
      //       choice: gameConfigs[gameId].betchoice,
      //       amount:
      //         gameId == 22 || gameId == 27
      //           ? 10
      //           : this.options.placeBetAmount ?? 1,
      //     };

      //     if (gameId == 26) {
      //       bet.amount = process.env.npm_config_project === "l2" ? 50 : 10;
      //     }

      //     this.game.attachSocketAndCaptureEvent(GameEvent.WinStatus);
      //     this.game.attachSocketAndCaptureEvent(GameEvent.EndBet);

      //     // Act
      //     let placeBetResponse, settledResults;

      //     if (gameId != 45) {
      //       placeBetResponse = await this.placeBet(
      //         this.options.gameConfiguration,
      //         bet.choice,
      //         bet.amount
      //       );
      //       expect(placeBetResponse.endBet).toBe(bet.amount);
      //       settledResults = await this.game.waitForSettlement();
      //     } else {
      //       settledResults = await this.placeBethilo(bet.choice, bet.amount);
      //     }

      //     // Assert
      //     expect(settledResults.winAmount).not.toBe("undefined");
      //     await this.game.waitForTimeout(2000);
      //   }
      // );
    });
  }

  // async placeBet(gameConfigs: any, choice: string, amount: number) {
  //   await this.game.waitForTimeout(5000);

  //   let placeBetResponse = await this.betOn(gameConfigs, choice, amount);

  //   if (!placeBetResponse || placeBetResponse.endBet == -1) {
  //     console.log("retry place bet");
  //     await this.game.waitUntilPlaceBet();
  //     placeBetResponse = await this.betOn(gameConfigs, choice, amount);
  //   }

  //   return placeBetResponse;
  // }

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
    for (const iterator of listGames) {
      this.smokeTests(iterator);
    }
  }


}

new Group4SmokeSpec().start();
