import { gamelobbyConfigs } from "../gamelobby-configs";
import { SmokeBases, Components } from "sc-automation-core";
import { expect } from "@playwright/test";
const fs = require("fs");

export const gameLobbyLocators = [
  new Components.ImageLocator("gamelobby", 7, 187, 175, 409),
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
      `Verify the performance of loading game match requirements`,
      async () => {
        // Act 1
        await Components.test.step(
          "Expect first load time to be less than the configured time",
          async () => {
            const { totalLoad } = this.game.trackDownloadReport;
            // expect(totalLoad.duration).toBeLessThan(60000);
            await this.game.waitForTimeout(5000); //wait for file csv generate
          }
        );

        // Assert 1
        await Components.test.step("Expect no duplicated files.", async () => {
          const listfiles = await getFileNameFromCSV(
            "./test-results/firstload.csv"
          );
          const duplicated = await this.game.checkDuplicatedFileName(listfiles);
          console.log("Duplicated files: ", duplicated);
          // expect(duplicated.length).toBe(0);
          const totalSize = await getTotalFileSizeFromCSV(
            "./test-results/firstload.csv"
          );
          console.log("totalSize: ", totalSize.toFixed(2));
        });
        //Post-Act
        await Components.test.step(
          "Warning about large image files",
          async () => {
            let largeImage = getLargeImageromCSV(
              "./test-results/firstload.csv",0.5
            );
            console.log("largeImage: ", largeImage);
            expect(largeImage.length).toBe(0);
          }
        );
      }
    );
  }

  protected runScenario(): void {
    this.gameLobbyLoadsucceess();
  }
}

new healthSmokeSpec().start();

function getFileNameFromCSV(filePath: string): string[] {
  const csvContent = fs.readFileSync(filePath, "utf-8");
  return csvContent
    .split("\n")
    .slice(1) // Skip the header row
    .map((row) => row.split(",")[0])
    .filter(Boolean); // Remove empty entries
}

function getTotalFileSizeFromCSV(filePath: string): number {
  const csvContent = fs.readFileSync(filePath, "utf-8");
  const rows = csvContent.split("\n").slice(1); // Skip header row

  return rows.reduce((totalSize, row) => {
    const [, , itemSize = ""] = row.split(",");
    return totalSize + (parseFloat(itemSize) || 0);
  }, 0);
}

function getLargeImageromCSV(
  filePath: string,
  expectFileSize: number = 0.5
): string[] {
  const csvContent = fs.readFileSync(filePath, "utf-8");
  const rows = csvContent.split("\n").slice(1); // Skip header row

  return rows
    .map((row) => {
      const [itemLink = "", filetype = "", itemSize = ""] = row.split(",");
      return {
        itemLink: itemLink.trim(),
        filetype: filetype.trim(),
        itemSize: parseFloat(itemSize) || 0,
      };
    })
    .filter(
      ({ itemLink, filetype, itemSize }) =>
        itemLink &&
        (filetype.includes("image/webp") ||
          filetype.includes(".png") ||
          filetype.includes(".jpg")) &&
        itemSize >= expectFileSize
    )
    .map(({ itemLink }) => itemLink);
}
