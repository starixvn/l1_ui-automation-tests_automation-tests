import { numbergameLocators } from "../number-game-locators";
import { numbergameConfigs } from "../number-game-configs";
import { SmokeBases,Components } from "sc-automation-core";
import { expect } from "@playwright/test";

class numbergameSmokeSpec extends SmokeBases.NumberGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      placeBetChoices: ["1", "25"],
      gameConfiguration: numbergameConfigs,
      locators: numbergameLocators,
      waitBetTimeout: 1000,
      snapshotFolderPath: __filename,
      placeBetAmount: 1
    };
    super(smokeOptions);
  }

  protected AId_1(): void {
    Components.test("Test google sheet @AId_1", async () => {
        console.log("Test google sheet");
    });
  }

  protected AId_2(): void {
    Components.test("Test google sheet @AId_2", async () => {
        console.log("Test google sheet");
    });
  }

  protected AId_3(): void {
    Components.test("Test google sheet @AId_3", async () => {
        console.log("Test google sheet");
    });
  }

  protected AId_4(): void {
    Components.test("Test google sheet @AId_4", async () => {
        console.log("Test google sheet");
    });
  }

  protected AId_5(): void {
    Components.test("Test google sheet @AId_5", async () => {
        console.log("Test google sheet");
        // expect(1).toBe(2);
    });
  }

  protected runScenario(): void {
    this.AId_1()
    this.AId_2()
    this.AId_3()
    this.AId_4()
    this.AId_5()

  }
}

new numbergameSmokeSpec().start();
