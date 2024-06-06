import { GroupLocators } from "../group-locators";
import { GroupConfigs, gameConfigs } from "../group-configs";
import { SmokeBases, Components } from "sc-automation-core";
import { expect } from "@playwright/test";
import { GameEvent } from "sc-automation-core/lib/_shared";

const listGames = [23, 72, 77,39,42];
//  23 , 39 ,42, 72, 77

class Group1SmokeSpec extends SmokeBases.CardGameBase {
  constructor() {
    let smokeOptions: SmokeBases.IBaseOptions = {
      gameConfiguration: GroupConfigs,
      locators: GroupLocators[23],
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
          const tagGame =
            process.env.npm_config_project === "l2" ? "GameID" : "gameId";
          const ssoLink = global.ssoLink.split(tagGame);

          const IdMap = new Map([
            [23, 3820],
            [39, 3836],
            [42, 3837],
            [72, 3871],
            [77, 3876],
          ]);
          const _gameId =
            process.env.npm_config_project === "l2"
              ? IdMap.get(gameId)
              : gameId;

          await this.game.page.goto(ssoLink[0] + tagGame + "=" + _gameId);

          await this.selectCurrency(process.env.npm_config_env);

          await this.game.waitUntilGameUiLoad();
          this.options.locators = GroupLocators[gameId];
          this.options.gameConfiguration.name = gameConfigs[gameId].name;
          this.options.gameConfiguration.id = gameId;
        }
      );

      await Components.test.step(
        `Verify that players can finish placing bets for one round of Game ${gameConfigs[gameId].name}.`,
        async () => {
          Components.test.setTimeout(this.options.gameConfiguration.maxTimeout);

          const bet = {
            choice: gameConfigs[gameId].betchoice,
            amount: this.options.placeBetAmount ?? 1,
          };
          this.game.attachSocketAndCaptureEvent(GameEvent.WinStatus);
          this.game.attachSocketAndCaptureEvent(GameEvent.Deal);

          if (gameId == 39) {
            
            const placebetdeal = await this.placeBet(bet.choice, bet.amount);
            let result = await this.followCardAndSettle();

            // Assert
            expect(placebetdeal.deal.totalAmount).toBe(bet.amount);
            expect(placebetdeal.deal.choices[bet.choice]).toBe(bet.amount);
            expect(result.endBet).toBe(bet.amount * 3);
            expect(result.choices[bet.choice]).toBe(bet.amount);
          }
          else if (gameId == 42) {
            await this.game.waitForTimeout()
            await this.clickLocator("closeguide",1000);
            const placebetdeal = await this.placeBet(bet.choice, bet.amount);
            let result = await this.followCardAndSettle42();

            // Assert
            expect(placebetdeal.deal.totalAmount).toBe(bet.amount);
            expect(placebetdeal.deal.choices[bet.choice]).toBe(bet.amount);
            expect(result.endBet).toBe(bet.amount * 3);
            expect(result.choices[bet.choice]).toBe(bet.amount);
          } 
          else {
            console.log(gameId);
            
            // Act
            await this.clickLocator("cancelbet",5000)
            await this.clickLocator("cancelbet",5000)
            const placebetdeal = await this.placeBet(bet.choice, bet.amount);
            await this.game.waitForTimeout(6000);

            if(gameId==77){
              await this.clickLocator("standcard",2000);
              await this.clickLocator("btnConfirmStand",6000);
            }

            expect(placebetdeal.deal.totalAmount).toBe(bet.amount);
            console.log('click cancel');
            
            await this.game.clickLocator("cancelbet",2000);
            await this.game.clickLocator("cancelbet",2000);

          }
        }
      );
    });
  }

  async placeBet(choice: any, amount: number) {
    await this.clickLocator(`stake${amount}`);
    await this.clickLocator(`${choice}Choice`, 2000);

    const submitButton = this.locator(`submitBetBoard`);
    if (submitButton) {
        await submitButton.click(this.game.page);
    }
    else {
      await this.clickLocator("hitcard", 0);
    }
    return this.game.waitForDeal();
  }

  async clickLocator(element: string, wait = 500) {
    console.log(element);
    const locator = this.locator(element);
    if (locator) {
      await locator.click(this.game.page);
      await this.game.waitForTimeout(wait);
    }
  }

  locator(name: string) {
    return this.options.locators.find((x: any) => x.name === name);
  }

  async selectCurrency(env: string) {
    if (!env.includes("local")) {
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
  }

  protected runScenario(): void {
    for (const iterator of listGames) {
      this.smokeTests(iterator);
    }
  }

  async followCardAndSettle() {
    this.game.attachSocketAndCaptureEvent(GameEvent.EndBet);
    await this.game.waitForTimeout(8000);
    await this.clickLocator("standcard", 10000);
    await this.clickLocator("followcard", 5000);
    let endbet = await this.game.latestCaptureEvent(GameEvent.EndBet);
    
    let settledResults = {
      endBet: endbet?.call.totalAmount,
      choices: endbet?.call.choices,
    };
  
    return settledResults;
  };

  async followCardAndSettle42(){
    this.game.attachSocketAndCaptureEvent(GameEvent.EndBet);
    await this.game.waitForTimeout();
    await this.clickLocator("standcard");
    await this.game.waitForTimeout();
    await this.clickLocator("followcard");
    await this.game.waitForTimeout();
    await this.clickLocator("viewcards");
    await this.game.waitForTimeout();
    await this.clickLocator("viewcards");
    let endbet = await this.game.latestCaptureEvent(GameEvent.EndBet);
    let settledResults = {
      endBet: endbet?.call.totalAmount,
      choices: endbet?.call.choices,
    };
  
    return settledResults;
  };

  

}

new Group1SmokeSpec().start();



