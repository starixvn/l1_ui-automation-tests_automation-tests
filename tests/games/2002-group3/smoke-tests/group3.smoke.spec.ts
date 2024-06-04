import { GroupLocators } from "../group-locators";
import { GroupConfigs, gameConfigs } from "../group-configs";
import { SmokeBases, Components } from "sc-automation-core";
import { expect } from "@playwright/test";
import { GameEvent } from "sc-automation-core/lib/_shared";

const listGames = [  23  ,77,72];
//  23  ,77,72,39,42,45

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
          const ssoLink = global.ssoLink.split("gameId");
          await this.game.page.goto(
            ssoLink[0] + "gameId=" + gameId + "&partnerId=ONEworks1&op=SG"
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
            choice: this.options.placeBetChoices,
            amount: this.options.placeBetAmount ?? 1,
          };
          this.game.attachSocketAndCaptureEvent(GameEvent.WinStatus);
          this.game.attachSocketAndCaptureEvent(GameEvent.Deal);

          // Act
          const placebetdeal =await this.placeBet(bet.choice, bet.amount);
          
          if (gameId==39) {

            const placebetdeal = await this.placeBet(bet.choice, bet.amount);
            let result = await followCardAndSettle(this.game);
      
            // Assert
            expect(placebetdeal.deal.totalAmount).toBe(bet.amount);
            expect(placebetdeal.deal.choices[bet.choice]).toBe(bet.amount);
            expect(result.endBet).toBe(bet.amount * 3);
            expect(result.choices[bet.choice]).toBe(bet.amount);
          }
          if (gameId==42) {

            const placebetdeal = await this.placeBet(bet.choice, bet.amount);
            let result = await followCardAndSettle42(this.game);
      
            // Assert
            expect(placebetdeal.deal.totalAmount).toBe(bet.amount);
            expect(placebetdeal.deal.choices[bet.choice]).toBe(bet.amount);
            expect(result.endBet).toBe(bet.amount * 3);
            expect(result.choices[bet.choice]).toBe(bet.amount);
          }

          else{
          let endDeal = await this.game.latestCaptureEvent(GameEvent.Deal).deal;
          console.log(endDeal);
          
          const isdealerPontoon = endDeal.dealer.length == 0 ? false : true;
          const playertotal = Math.max(endDeal.hands[0].total[0], endDeal.hands[0].total[1] ?? 0);
          
          console.log(isdealerPontoon,playertotal);
          
          
          expect(placebetdeal.deal.hands[0].bet).toBe(bet.amount);
          expect(placebetdeal.deal.hands[0].pos).toBe(parseInt(bet.choice));

            if (isdealerPontoon == false && playertotal < 21){
                await this.game.waitForTimeout(6000);
                await this.game.clickLocator("standcard");
                const isbtnConfirmStand = this.locator("btnConfirmStand")
                console.log(isbtnConfirmStand);
                if (isbtnConfirmStand!= 'undefined') {
                  await this.game.clickLocator("btnConfirmStand");
                }
            }  
            else{
              await this.game.clickLocator("standcard");
            }        // Assert

          await this.game.clickLocator("standcard");

          await this.game.waitForTimeout(2000);          
        }
      }
      );
    });
  }

  async placeBet(choice: any, amount: number) {
    await this.clickLocator(`stake${amount}`);
    await this.clickLocator(`${choice}Choice`, 2000);
    await this.clickLocator("hitcard",0);
    return this.game.waitForDeal();
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

const followCardAndSettle = async (game: any) => {
  await game.attachSocketAndCaptureEvent(GameEvent.EndBet);
  await game.waitForTimeout(8000);
  await game.clickLocator("standcard",10000);
  await game.clickLocator("followcard",5000);
  await game.waitForTimeout();
  let endbet = await game.latestCaptureEvent(GameEvent.EndBet);
  let settledResults = {
    endBet: endbet?.call.totalAmount,
    choices: endbet?.call.choices,
  };

  return settledResults;
};

const followCardAndSettle42 = async (game: any) => {
  await game.attachSocketAndCaptureEvent(GameEvent.EndBet);
  await game.waitForTimeout();
  await game.clickLocator("standcard");
  await game.waitForTimeout();
  await game.clickLocator("followcard");
  await game.waitForTimeout();
  await game.clickLocator("viewcards");
  await game.waitForTimeout();
  await game.clickLocator("viewcards");
  let endbet = await game.latestCaptureEvent(GameEvent.EndBet);
  let settledResults = {
    endBet: endbet?.call.totalAmount,
    choices: endbet?.call.choices,
  };

  return settledResults;
};