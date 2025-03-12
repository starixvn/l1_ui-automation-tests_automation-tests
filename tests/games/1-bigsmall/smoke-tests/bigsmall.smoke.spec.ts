import { BigSmallLocators } from "../bigsmall-locators";
import { BigSmallConfigs } from "../bigsmall-configs";
import { SmokeBases, Components } from "sc-automation-core";
import { expect } from "@playwright/test";

class BigSmallSmokeSpec extends SmokeBases.BalancedBettingGameBase {
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      placeBetChoices: [BigSmallConfigs.choices[0]],
      gameConfiguration: BigSmallConfigs,
      locators: BigSmallLocators,
      waitBetTimeout: 14000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 10 : 1,
    };

    super(smokeOptions);
  }

  protected TestWS(): void {
    Components.test(
      "Verify user can open minigame success without error",
      async () => {
        
        this.game.page.on("websocket", (websocket: any) => {
    websocket.on("framesent", (message) => {
      console.log(1,message.payload)

    })


    websocket.on("framereceived", (message) => {
      console.log(2,message.payload)
    })
  })


        console.log("test");
        console.log("Starting WebSocket test");
        await this.game.page.routeWebSocket('wss://l1-proxy1.lumigame.com/sedie', ws => {
          ws.onMessage(message => {
            console.log("Message from server: ", message.payload);
          });


        });


        console.log("WebSocket test setup complete");


        await this.game.page.routeWebSocket('wss://echo.websocket.org/', ws => {
          ws.onMessage(message => {
            console.log(message);
            ws.send('James Test1');  // Intercept and modify the response.
            ws.send('James Test2');  // Intercept and modify the response.
            ws.send('James Test3');  // Intercept and modify the response.
          });
      });

      // Navigate to the WebSocket page
      await this.game.page.goto('https://echo.websocket.org/.ws');

      // Interact with the page's UI to send a WebSocket message
      // await this.game.page.getByRole('button', { name: 'Pause Messaging' }).click();  // Clicking a button.
      // await this.game.page.locator('#content').fill('Hello chatbot');  // Filling input with a message.
      // await this.game.page.getByRole('button', { name: 'Send Message' }).click();  // Sending the message.
      await this.game.page.waitForTimeout(10000);
      }
    );
  }

  protected runScenario(): void {
    // super.runScenario();
    this.TestWS();
  }
}
new BigSmallSmokeSpec().start();
