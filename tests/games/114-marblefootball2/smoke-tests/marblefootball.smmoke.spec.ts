import { MarbleFootball2Locators } from "../marblefootball-locators";
import { MarbleFootball2Configs } from "../marblelfootball-configs";
import {Components, SmokeBases } from "sc-automation-core";
import * as fs from 'fs';

class MarbleFootball2SmokeSpec extends SmokeBases.MarbleGameBase {
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      placeBetChoices: ["home", "away", "draw","over", "under", "odd", "even"],
      gameConfiguration: MarbleFootball2Configs,
      locators: MarbleFootball2Locators,
      waitBetTimeout: 85000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 10 : 1,
    };

    super(smokeOptions);
  }
  protected async placeBetAndSettleTests(): Promise<void> {
    Components.test("Get Odds config", async () => {
      Components.test.setTimeout(36000000)
      this.game.attachSocketAndCaptureEvent('winners')
      const winners = await this.game.waitForEvent('winners')
      let roundId = winners.winners.roundId;
      
      for (let index = 0; index < 1000; index++) {
        console.log(index);
        const id = generateRandomStr(index);
        roundId = roundId + 1


        this.game.attachSocketAndCaptureEvent('odds')
        const messages = await this.game.waitForEvent('odds')
        const message = JSON.stringify(messages.odds)
        console.log(message);
        const numbers = message.match(/\d+\.?\d*/g) || [];
        if (numbers.length === 0) {
            console.log("No numbers found in the message.");
            return;
        }
        // Prepare content with each number on a new line
        const content = `${roundId}\n${numbers.join('\n') }\n`;
        fs.appendFile('./odds/prematch.txt', content, (err) => {
          if (err) {
              console.error('Error writing to file:', err);
          } else {
              console.log(`Successfully appended result to PREMATCH ${roundId}`);
        }
        });

        await this.game.waitForTimeout(5000)
        await this.game.clickLocator('homeChoice')

        
        this.game.attachSocketAndCaptureEvent('videoResult')
        const resultmessage = await this.game.waitForEvent('videoResult')
        const result = JSON.stringify(resultmessage.videoResult.firstHalf)
        // Count occurrences of H (case sensitive)
        const countH = (result.match(/H/g) || []).length;
        
        // Count occurrences of A (case sensitive)
        const countA = (result.match(/A/g) || []).length;
        
        // Prepare the content in "H-A" format with new line
        
        const contentResult = `${roundId}\n${Array(7).fill(`${countH}-${countA}`).join('\n')}\n`;
        
        // Write to file (append mode)
        fs.appendFile('./odds/result.txt', contentResult, (err) => {
            if (err) {
                console.error('Error writing to file:', err);
            } else {
                console.log(`Successfully appended result to RESULT ${roundId}`);
            }
        });



        this.game.attachSocketAndCaptureEvent('odds')
        const messagesLive = await this.game.waitForEvent('odds')
        const messagelive = JSON.stringify(messagesLive.odds)
        const numberslive = messagelive.match(/\d+\.?\d*/g) || [];
        if (numberslive.length === 0) {
            console.log("No numbers found in the message.");
            return;
        }
        // Prepare content with each number on a new line
        const contentlive = `${roundId}\n${numberslive.join('\n') }\n`;
        await fs.appendFile('./odds/live.txt', contentlive, (err) => {
          if (err) {
              console.error('Error writing to file:', err);
          } else {
              console.log(`Successfully appended result to LIVE ${roundId}`);
        }
        });



        



  }
  });
  }

  protected runScenario(): void {
    this.placeBetAndSettleTests();
  }

}

new MarbleFootball2SmokeSpec().start();

const generateRandomStr = (index: number) => 
  index.toString() + Array.from({length: 4}, () => 
      String.fromCharCode(65 + Math.floor(Math.random() * 26))
  ).join('');
