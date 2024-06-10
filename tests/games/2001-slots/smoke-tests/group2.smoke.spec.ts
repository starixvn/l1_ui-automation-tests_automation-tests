import { GroupLocators } from "../group-locators";
import { GroupConfigs, gameConfigs } from "../group-configs";
import { SmokeBases, Components } from "sc-automation-core";
import { expect } from "@playwright/test";
import { GameEvent } from "sc-automation-core/lib/_shared";

const listGames = [29, 38, 46, 49, 62, 63, 64, 65, 66, 68, 69, 70, 74, 76, 47];

class Group1SmokeSpec extends SmokeBases.SlotGameBase {
  constructor() {
    let smokeOptions: SmokeBases.IBaseOptions = {
      gameConfiguration: GroupConfigs,
      locators: GroupLocators[29],
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
          const tagGame = process.env.npm_config_project === "l2"? "GameID" :"gameId";
          const ssoLink = global.ssoLink.split(tagGame);
          const IdMap = new Map([
            [29, 3829],
            [38, 3835],
            [46, 3845],
            [47, 3846],
            [49, 3854],
            [62, 3861],
            [63, 3862],
            [64, 3863],
            [65, 3864],
            [66, 3867],
            [68, 3865],
            [69, 3866],
            [70, 3869],
            [74, 3874],
            [76, 3875],

          ]);
          const _gameId = process.env.npm_config_project === "l2"? IdMap.get(gameId) :gameId; 

          await this.game.page.goto(
            ssoLink[0] + tagGame + "="+ _gameId
          );


          if (!process.env.npm_config_env?.includes("local")) {
            const frameExists = await this.game.page.$("#frmGame");
            if (frameExists) {
                await this.game.page.frameLocator("#frmGame").locator('text=Submit').click();
            } else {
              await this.game.page.locator('text=Submit').click();
            }
          }
          await this.game.waitUntilGameUiLoad();
          const locatorMap = new Map([
            [29, GroupLocators[29]],
            [38, GroupLocators[38]],
            [46, GroupLocators[46]],
            [47, GroupLocators[47]],
            [49, GroupLocators[49]],
            [62, GroupLocators[62]],
            [63, GroupLocators[63]],
          ]);
          const defaultLocator = locatorMap.get(63);
          this.options.locators = locatorMap.get(gameId) || defaultLocator;
          this.options.gameConfiguration.name = gameConfigs[gameId].name;
          this.options.gameConfiguration.id = gameId;
        }
      );

      await Components.test.step(
        `Verify that players can finish placing bets for one round of Game ${gameConfigs[gameId].name}.`,
        async () => {
          Components.test.setTimeout(this.options.gameConfiguration.maxTimeout);

          let bet = {
            choice: this.options.placeBetChoices,
            amount: this.options.placeBetAmount ?? 1,
          };

          if (gameId==66) {bet.amount = process.env.npm_config_project === "l2" ? 5 : 1} 


          this.game.attachSocketAndCaptureEvent(GameEvent.WinStatus);
          this.game.attachSocketAndCaptureEvent(GameEvent.EndBet);

          // Act
          const placeBetResponse = await this.placeBet(bet.choice, bet.amount);

          const settledResults = await this.game.waitForSettlement();
          // Assert

          expect(placeBetResponse.endBet).toBe(bet.amount);
          expect(settledResults.winAmount).not.toBe("undefined");
          await this.game.waitForTimeout(2000);
        }
      );
    });
  }

  async placeBet(choice: any, amount: number) {
    await this.clickLocator("choiceMenu", 2000);
    await this.clickLocator("clearChoices", 2000);
    await this.clickLocator(`${choice}Choice`, 2000);
    await this.clickLocator("submitPayline");
    await this.clickLocator("stakeMenu");
    await this.clickLocator(`stake${amount}`);
    await this.clickLocator(`spin`, 0);
    return this.game.waitForEndBet();
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

new Group1SmokeSpec().start();
