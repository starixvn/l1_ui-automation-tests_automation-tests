import { VipSedieConfigs } from "../vip-sedie-configs";
import { E2EBases, Components, CustomExpect } from "sc-automation-core";
import { VipSedieLocators } from "./vip-sedie-locators";

class SedieE2ESpec extends E2EBases.TableGameBase {
  /**
   *
   */
  constructor() {
    const e2eOptions: E2EBases.IBaseOptions = {
      placeBetChoices: VipSedieConfigs.choices,
      gameConfiguration: VipSedieConfigs,
      locators: VipSedieLocators,
      waitBetTimeout: 8000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 50 : 10,
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
      const roundId = ticketdata[ticketdata?.length - 10];
      
      // Assert
      CustomExpect.expect(winamount.trim()).toEqual(global.settledata.betwin);
      CustomExpect.expect(betChoiceAmount).toEqual(global.settledata.bet);
      CustomExpect.expect(roundId).toEqual(global.settledata.roundID);

      //Post-Act
      await this.game.clickOutSide();
    });
  }

}

new SedieE2ESpec().start();

const getDataFistRowHistory = async (game: any, elementname: string) => {
  let tempdata = await game.getTextLocator(elementname);
  return tempdata?.split(" ") || "";
};
