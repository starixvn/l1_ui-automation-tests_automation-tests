import { expect } from "@playwright/test";
import { extAladdinLocators } from "./aladdin-locators";
import { AladdinConfigs } from "../aladdin-configs";
import { E2EBases, Components } from "sc-automation-core";
const CascadingSlotLocatorNames = Components.BaseLocator.baseLocatorNames
class AladdinE2ESpec extends E2EBases.CascadingSlotGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: E2EBases.IBaseOptions = {
      placeBetChoices: [AladdinConfigs.choices[2]],
      gameConfiguration: AladdinConfigs,
      locators: extAladdinLocators,
      waitBetTimeout: 5000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 5 : 0.2,
    };
    super(smokeOptions);
  }
  protected mainUITests() {
    Components.test("Verify game name", async () => {
        //Act
        await Components.test.step("Capture game name and compare with snapshot", async () => {
            const gamename = await this.game.capture(CascadingSlotLocatorNames.imgGameName);

         //Assert
            expect(gamename.image).toMatchSnapshot(gamename.name);
        });
    });
    Components.test("Verify roundID is null in first load game", async () => {
        //Act
        await Components.test.step("Capture Round ID at the first load and compare with snapshot", async() => {
            const defaultRoundID =  await this.game.capture(CascadingSlotLocatorNames.lblRoundID);
        //Assert
            expect(defaultRoundID.image).toMatchSnapshot(defaultRoundID.name, {maxDiffPixelRatio : 0});
        });
    });

    Components.test("Verify bottom area", async () => {
        //Act
        await Components.test.step("Capture bottom area at the first load and compare with snapshot", async() => {
            const imgBottomArea =  await this.game.capture(CascadingSlotLocatorNames.imgBottomArea);
        //Assert
            expect(imgBottomArea.image).toMatchSnapshot(imgBottomArea.name);
        });
    });

    Components.test("Verify tumble win list is clear", async () => {
        //Act
        await Components.test.step("Capture tumble win list at the first load and compare with snapshot", async () => {
            const defaultTumbleWinList = await this.game.capture(CascadingSlotLocatorNames.lblTumbleWinList);
        //Assert
            expect(defaultTumbleWinList.image).toMatchSnapshot(defaultTumbleWinList.name);
        });
    });

    Components.test("Verify menu expand with sound and music on", async () => {
        //Act
        await Components.test.step("Click hamburger menu", async () => {
            await this.game.clickLocator(CascadingSlotLocatorNames.mnuHamburger);
        });
        await Components.test.step("Capture expand hamburger menu and compare with the snapshot", async () => {
            const mnuHamburgerExpandSoundOn = await this.game.capture(CascadingSlotLocatorNames.mnuHamburgerExpandSoundOn);
        //Assert
            expect(mnuHamburgerExpandSoundOn.image).toMatchSnapshot(mnuHamburgerExpandSoundOn.name);
        });
        //Post-Act
        await Components.test.step("Click out side to close the menu", async () => {
            await this.game.clickOutSide(1000);
        });
    });

    Components.test("Verify menu expand with sound and music off", async () => {
        //Act
        await Components.test.step("Click on hamburger menu", async () => {
            await this.game.clickLocator(CascadingSlotLocatorNames.mnuHamburger);
        });
        await Components.test.step("Click on sound icon", async () => {
            await this.game.clickLocator(CascadingSlotLocatorNames.icoSound);
        });
        await Components.test.step("Click on music icon", async () => {
            await this.game.clickLocator(CascadingSlotLocatorNames.icoMusic);
        });
        await Components.test.step("Capture expand hamburger menu and compare with snapshot", async () => {
            const mnuHamburgerExpandSoundOff = await this.game.capture(CascadingSlotLocatorNames.mnuHamburgerExpandSoundOff);
            //Assert
            expect(mnuHamburgerExpandSoundOff.image).toMatchSnapshot(mnuHamburgerExpandSoundOff.name);

        });
        //Post-Act
        await Components.test.step("Click outside to close the menu", async () => {
            await this.game.clickOutSide();
        });
    });

}
  
}

new AladdinE2ESpec().start();
