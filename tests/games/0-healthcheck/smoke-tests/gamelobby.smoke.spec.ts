import { gamelobbyConfigs } from "../gamelobby-configs";
import { SmokeBases, Components } from "sc-automation-core";
import { expect } from "@playwright/test";

export const gameLobbyLocators = [
  new Components.ImageLocator("gamelobby", 405, 667, 136, 44),
];

const lstItems = [
  { control: "[id$=tab-ios]", imageName: "taiSabaIOS.png" },
  { control: "[id$=tab-android]", imageName: "taiSabaAndroid.png" },
];

class healthSmokeSpec extends SmokeBases.TableGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      gameConfiguration: gamelobbyConfigs,
      locators: gameLobbyLocators,
      waitBetTimeout: 8000,
      placeBetChoices: [],
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 10 : 1,
    };

    super(smokeOptions);
  }

  protected gameLobbyLoadsucceess(): void {
    Components.test(
      "Verify that game looby is loaded success without error",
      async () => {
        await this.game.waitForTimeout(3000)
        await this.game.page.mouse.click(15,15)
        await this.game.waitForTimeout(2000)
        const gamelobby = await this.game.captureLocator("gamelobby");
        expect(gamelobby.image).toMatchSnapshot(gamelobby.name,{maxDiffPixelRatio: 0.15});
        // if (process.env.npm_config_project === "l1") {
        //   const newtab = await navigateDownloadPage(
        //     this.game.page.context(),
        //     this.game.page
        //   );
        //   for (const iterator of lstItems) {
        //     await newtab.click(iterator.control);
        //     await newtab.waitForLoadState();
        //     await newtab.waitForTimeout(2000);
        //     expect(
        //       await newtab.screenshot({
        //         path: `screenshots/${iterator.imageName}`,
        //         fullPage: true,
        //       })
        //     ).toMatchSnapshot(iterator.imageName, { maxDiffPixelRatio: 0.05 });
        //   }
        // }
      }
    );
  }

  protected runScenario(): void {
    this.gameLobbyLoadsucceess();
  }
}

new healthSmokeSpec().start();

// const navigateDownloadPage = async (context: any, page: any) => {
//   const [newtab] = await Promise.all([
//     context.waitForEvent("page"),
//     await page.locator("id=GameCanvas").click({ position: { x: 943, y: 650 } }),
//   ]);
//   await newtab.waitForLoadState();
//   await newtab.waitForTimeout(10000);
//   return newtab;
// };
