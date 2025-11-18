import { SummerHeatConfigs } from "../summer-heat-configs";
import { SmokeBases, Components } from "sc-automation-core";
import { expect } from "sc-automation-core/lib/expects";

class SummerHeatSmokeSpec extends SmokeBases.PortrailClassicGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      placeBetChoices: ["25"],
      gameConfiguration: SummerHeatConfigs,
      locators: Components.Portrail_Classic_Locators,
      waitBetTimeout: 1000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 0.02 : 0.02,
      isJackpot: process.env.npm_config_project === "l2" ? true : false,
    };
    super(smokeOptions);
  }

  protected mainUITests() {
    const locators = this.options.locators || Components.Portrail_Classic_Locators;
    
    // Copy tất cả các test từ base class TRỪ test "Verify Hall Of Fame exists"
    Components.test("Verify welcome screen and Play Now button exists", async () => {
      expect(await this.game.isCocosLocatorExists(locators.btnPlayNow), "Play Now button not found").toBe(true);
    });
    Components.test("Verify User can click Play Now button and navigate to game", async () => {
      await this.clickPlayNowButton();
      await this.game.waitForTimeout(5000);
      expect(await this.game.isCocosLocatorExists(locators.btnSpin), "Spin button not found").toBe(true);
    });
    Components.test("Verify center message exists", async () => {
      const centerMessages = [
        "Bấm Quay hoặc giữ phím Space",
        "trên các cột khác nhau sẽ thắng Bonus game",
        "trên các cột khác nhau để thắng Free Spin",
        "Quay trúng ≥3",
        "Tổng Thắng: ",
        "thay thế tất cả biểu tượng, trừ"
      ];
      const actualMessage = await this.game.findLabelText(locators.txtMessageCenter);
      expect(centerMessages).toContain(actualMessage.trim());
    });
    if (this.options.isJackpot) {
      Components.test("Verify Jackpot panel exists", async () => {
        expect(await this.game.isCocosLocatorExists(locators.lblMajorJackpot), "Major jackpot label not found").toBe(true);
        expect(await this.game.isCocosLocatorExists(locators.lblGrandJackpot), "Grand jackpot label not found").toBe(true);
        expect(await this.game.isCocosLocatorExists(locators.lblMinorJackpot), "Minor jackpot label not found").toBe(true);
      });
    }
    Components.test("Verify button auto spin exists", async () => {
      expect(await this.game.isCocosLocatorExists(locators.btnAutoSpin), "Auto spin button not found").toBe(true);
    });
    Components.test("Verify button turbo mode exists", async () => {
      expect(await this.game.isCocosLocatorExists(locators.btnTurbo), "Turbo button not found").toBe(true);
    });
    Components.test("Verify button bet amount setting exists", async () => {
      expect(await this.game.isCocosLocatorExists(locators.betAmountSetting), "Bet amount setting button not found").toBe(true);
    });
    Components.test("Verify button menu exists", async () => {
      expect(await this.game.isCocosLocatorExists(locators.btnMenu), "Menu button not found").toBe(true);
    });
    Components.test("Verify button game guide exists", async () => {
      expect(await this.game.isCocosLocatorExists(locators.btnguide), "Game guide button not found").toBe(true);
    });
    Components.test("Verify all menu items exists", async () => {
      await this.game.clickCocos(locators.btnMenu, 1000);
      expect(await this.game.isCocosLocatorExists(locators.btnLobby), "Lobby button not found").toBe(true);
      expect(await this.game.isCocosLocatorExists(locators.btnMusic), "Music button not found").toBe(true);
      expect(await this.game.isCocosLocatorExists(locators.btnSound), "Sound button not found").toBe(true);
      expect(await this.game.isCocosLocatorExists(locators.btnHistory), "History button not found").toBe(true);
      expect(await this.game.isCocosLocatorExists(locators.btnLine), "Line button not found").toBe(true);
      expect(await this.game.isCocosLocatorExists(locators.btnMenuClose), "Menu close button not found").toBe(true);
      if (this.options.isJackpot) {
        expect(await this.game.isCocosLocatorExists(locators.btnHallOfFame), "Top button not found").toBe(true);
      }
    });
    Components.test("Verify User can open Line setting popup", async () => {
      await this.game.clickCocos(locators.btnLine);
      expect(await this.game.isCocosLocatorExists(locators.popupLineSelection), "Line setting popup not found").toBe(true);
      await this.game.clickCocos(locators.btnClose);
    });
    if (this.options.isJackpot) {
      // Override test "Verify Hall Of Fame exists" với version tùy chỉnh
      Components.test("Verify Hall Of Fame exists", async () => {
        await this.game.clickCocos(locators.btnMenu, 1000);
        await this.game.clickCocos(locators.btnHallOfFame, 1000);
        expect(await this.game.isCocosLocatorExists(locators.btnBigWin), "Big win button not found").toBe(true);
        expect(await this.game.isCocosLocatorExists(locators.btnJackpot), "Jackpot button not found").toBe(true);
      });
      Components.test("Verify User can click tab Jackpot", async () => {
        await this.game.clickCocos(locators.btnJackpot);
        expect(await this.game.isCocosLocatorExists(locators.headerJackpot), "Header jackpot not found").toBe(true);
      });
      Components.test("Verify User can click tab Big Win", async () => {
        await this.game.clickCocos(locators.btnBigWin);
        expect(await this.game.isCocosLocatorExists(locators.headerBigWin), "Header big win not found").toBe(true);
        await this.game.clickCocos(locators.iconCloseHallOfFame);
      });
    }
  }

}

new SummerHeatSmokeSpec().start();
