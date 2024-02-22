import { BacNumbersLocators } from "../bac-numbers-locators";
import { BacNumbersConfigs } from "../bac-numbers-configs";
import { SmokeBases,Components } from "sc-automation-core";

class BacNumbersSmokeSpec extends SmokeBases.NumberGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      placeBetChoices: ["1", "25"],
      gameConfiguration: BacNumbersConfigs,
      locators: BacNumbersLocators,
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

  protected runScenario(): void {
    this.AId_1()
    this.AId_2()
    this.AId_3()
  }
}

new BacNumbersSmokeSpec().start();
