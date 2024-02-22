import { BacNumbersLocators } from "../bac-numbers-locators";
import { BacNumbersConfigs } from "../bac-numbers-configs";
import { E2EBases,Components } from "sc-automation-core";

class BacNumbersE2ESpec extends E2EBases.NumberGameBase {
  /**
   *
   */
  constructor() {
    const e2eOptions: E2EBases.IBaseOptions = {
      placeBetChoices: ["1", "25"],
      gameConfiguration: BacNumbersConfigs,
      locators: BacNumbersLocators,
      waitBetTimeout: 1000,
      snapshotFolderPath: __filename,
      placeBetAmount: 1
    };
    super(e2eOptions);
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

new BacNumbersE2ESpec().start();
