import { SedieLocators } from "../sedie-locators";
import { SedieConfigs } from "../sedie-configs";
import { SmokeBases, Components } from "sc-automation-core";
import { expect } from "@playwright/test";

const MiniGameG7Locators = [
  new Components.ImageLocator("game1", 725, 262, 10, 10),
  new Components.ImageLocator("game2", 768, 353, 10, 10),
  new Components.ImageLocator("game3", 730, 456, 10, 10),
  new Components.ImageLocator("game4", 639, 492, 0, 0),
  new Components.ImageLocator("game5", 542, 261, 0, 0),
  new Components.ImageLocator("game6", 496, 360, 10, 10),
  new Components.ImageLocator("game7", 539, 450, 0, 0),
];

const MiniGameG6Locators = [
  new Components.ImageLocator("game1", 744, 278, 0, 0),
  new Components.ImageLocator("game2", 769, 388, 0, 0),
  new Components.ImageLocator("game3", 700, 477, 0, 0),
  new Components.ImageLocator("game4", 577, 475, 0, 0),
  new Components.ImageLocator("game5", 508, 385, 0, 0),
  new Components.ImageLocator("game6", 536, 270, 0, 0),
];

class SedieSmokeSpec extends SmokeBases.TableGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      gameConfiguration: SedieConfigs,
      locators: SedieLocators,
      waitBetTimeout: 8000,
      placeBetChoices: [SedieConfigs.choices[0]],
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 10 : 1,
    };

    super(smokeOptions);
  }

  protected OpenMiniGame(): void {
    Components.test(
      "Verify user can open minigame success without error",
      async () => {
        const gameid = await getOfferedGameIds(this.game);
        for (let index = 1; index <= gameid.length; index++) {
          if (gameid.length === 7) {
            SedieLocators.push(...MiniGameG7Locators);
          } else {
            SedieLocators.push(...MiniGameG6Locators);
          }
          await verifyopenminigame(this.game, index);
        }
      }
    );
  }

  protected runScenario(): void {
    super.runScenario();
    this.OpenMiniGame();
  }
}

new SedieSmokeSpec().start();

const verifyopenminigame = async (game: any, index: number) => {
  await game.clickLocator("minigamesicon", 2000);
  await game.clickLocator(`game${index}`, 0);
  let filterA: string[] = [];
  const searchString = `LoadScene`;
  game.page.on("console", (msg) => {
    if (msg.text().includes(searchString)) {
      filterA.push(msg.text());
    }
  });

  while (filterA.length < 1) {
    await game.waitForTimeout(100);
  }
  await game.waitForTimeout(2000);
  expect(filterA.length).toEqual(1);
};

const getOfferedGameIds = async (game: any) => {
  let miniPanelGameIds: string[] = [];
  let gameIds: string[] = [];
  await game.page.reload();
  await game.page.route("**/*", async (route, request) => {
    if (request.url().includes("lobby/configs")) {
      const response = await route.fetch({ method: "POST" });
      const json = await response.json();
      await route.fulfill({ response, json });
      miniPanelGameIds = json.lobbyConfigs.miniPanelGameIds;
      return;
    }
    if (request.url().includes("auth/authorize")) {
      const response = await route.fetch({ method: "POST" });
      const json = await response.json();
      gameIds = json.user.offerGames.map((game) => game.gameId);
      await route.fulfill({ response, json });
      return;
    }
    route.continue();
  });
  await game.waitUntilGameUiLoad()
  await game.waitForTimeout(5000);
  const combinedGameIds = miniPanelGameIds.filter((id) => gameIds.includes(id));

  console.log("Offered Game IDs:", combinedGameIds);

  return combinedGameIds;
};
