import { expect } from "@playwright/test";
import { extGodOfFortuneLocators } from "./godoffortune-locators";
import { GodOfFortuneConfigs } from "../godoffortune-configs";
import { E2EBases, Components } from "sc-automation-core";
class GodOfFortuneE2ESpec extends E2EBases.CascadingSlotGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: E2EBases.IBaseOptions = {
      placeBetChoices: [GodOfFortuneConfigs.choices[0]],
      gameConfiguration: GodOfFortuneConfigs,
      locators: extGodOfFortuneLocators,
      waitBetTimeout: 5000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 1 : 0.2,
    };
    super(smokeOptions);
  }

protected inGameTests(): void {
    
}

//   protected mainUITests() {
//     Components.test("Verify game name", async () => {
//         //Act
//         await Components.test.step("Capture game name and compare with snapshot", async () => {
//             const gamename = await this.game.capture(CascadingSlotLocatorNames.imgGameName);
//             await this.game.page.screenshot({path: "screenshot1.png"});

//          //Assert
//             expect(gamename.image).toMatchSnapshot(gamename.name);
//         });
//     });
//     Components.test("Verify roundID is null in first load game", async () => {
//         //Act
//         await Components.test.step("Capture Round ID at the first load and compare with snapshot", async() => {
//             const defaultRoundID =  await this.game.capture(CascadingSlotLocatorNames.lblRoundID);
//         //Assert
//             expect(defaultRoundID.image).toMatchSnapshot(defaultRoundID.name, {maxDiffPixelRatio : 0});
//         });
//     });

//     Components.test("Verify bottom area", async () => {
//         //Act
//         await Components.test.step("Capture bottom area at the first load and compare with snapshot", async() => {
//             const imgBottomArea =  await this.game.capture(CascadingSlotLocatorNames.imgBottomArea);
//         //Assert
//             expect(imgBottomArea.image).toMatchSnapshot(imgBottomArea.name);
//         });
//     });

//     Components.test("Verify menu expand with sound and music on", async () => {
//         //Act
//         await Components.test.step("Click hamburger menu", async () => {
//             await this.game.clickLocator(CascadingSlotLocatorNames.mnuHamburger);
//         });
//         await Components.test.step("Capture expand hamburger menu and compare with the snapshot", async () => {
//             const mnuHamburgerExpandSoundOn = await this.game.capture(CascadingSlotLocatorNames.mnuHamburgerExpandSoundOn);
//         //Assert
//             expect(mnuHamburgerExpandSoundOn.image).toMatchSnapshot(mnuHamburgerExpandSoundOn.name);
//         });
//         //Post-Act
//         await Components.test.step("Click out side to close the menu", async () => {
//             await this.game.clickOutSide(1000);
//         });
//     });

//     Components.test("Verify menu expand with sound and music off", async () => {
//         //Act
//         await Components.test.step("Click on hamburger menu", async () => {
//             await this.game.clickLocator(CascadingSlotLocatorNames.mnuHamburger);
//         });
//         await this.game.page.screenshot({path: "screenshot2.png"});

//         await Components.test.step("Click on sound icon", async () => {
//             await this.game.clickLocator(CascadingSlotLocatorNames.icoSound);
//         });
//         await Components.test.step("Click on music icon", async () => {
//             await this.game.clickLocator(CascadingSlotLocatorNames.icoMusic);
//         });
//         await Components.test.step("Capture expand hamburger menu and compare with snapshot", async () => {
//             const mnuHamburgerExpandSoundOff = await this.game.capture(CascadingSlotLocatorNames.mnuHamburgerExpandSoundOff);
//             //Assert
//             expect(mnuHamburgerExpandSoundOff.image).toMatchSnapshot(mnuHamburgerExpandSoundOff.name);

//         });
//         //Post-Act
//         await Components.test.step("Click outside to close the menu", async () => {
//             await this.game.clickOutSide();
//         });
//     });

// }
  
}

new GodOfFortuneE2ESpec().start();
