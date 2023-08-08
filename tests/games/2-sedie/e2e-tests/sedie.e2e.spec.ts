import { SedieConfigs } from "../sedie-configs";
import { E2EBases, Components, CustomExpect } from "sc-automation-core";
import { SedieLocators } from "./sedie-locators";

class SedieE2ESpec extends E2EBases.TableGameBase {
  /**
   *
   */
  constructor() {
    const e2eOptions: E2EBases.IBaseOptions = {
      placeBetChoices: SedieConfigs.choices,
      gameConfiguration: SedieConfigs,
      locators: SedieLocators,
      waitBetTimeout: 8000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 10 : 1,
    };
    super(e2eOptions);
  }

  protected ticketHistoryTests(): void {
    Components.test("Verify history and ticket detail", async () => {
      // Act 1
      await this.game.clickHistory(2000);
      const ticketdata = await getDataFistRowHistory(
        this.game,
        "lblHistoryFirstRow"
      );

      const winamount = ticketdata[ticketdata?.length - 1];
      const betChoiceAmount = ticketdata[ticketdata?.length - 7];
      
      // Assert
      CustomExpect.expect(winamount.trim()).toEqual(global.settledata.betwin);
      CustomExpect.expect(betChoiceAmount).toEqual(global.settledata.bet);

      //Post-Act
      await this.game.clickOutSide();
    });
  }

  protected sockettest(): void {
    Components.test("test", async () => {
    global.wsMessageReceived = []
      // Act 1
      this.game.page.on("websocket", async (ws) => {
        ws.on("framereceived", async (msg: any) => {
          console.log(msg.payload);
            global.wsMessageReceived.push(msg.payload);

      })
    })
      
    //  await this.game.page.screenshot({path: `testsocket.png`}) 
    console.log(global.wsMessageReceived);
      
    });
  }

  
  protected runScenario(): void {
    this.sockettest();
  }


}

new SedieE2ESpec().start();

const getDataFistRowHistory = async (game: any, elementname: string) => {
  let tempdata = await game.getTextLocator(elementname);
  return tempdata?.split(" ") || "";
};
