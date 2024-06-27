import { test, expect } from "@playwright/test";

const lstSlotGames = [
 "3810_VGaming_Baccarat",
"3819_VGaming_Roulette",
"3803_VGaming_SeDie",
'3809_VGaming_KenoProMax',
'3820_VGaming_Blackjack',
'3821_VGaming_SicBo',
'3824_VGaming_VIPSeDie',
'3826_VGaming_VIPFishPrawnCrab',
'3828_VGaming_SeDieWar',
'3830_VGaming_RNGLottery',
'3831_VGaming_ThreeCards',
'3835_VGaming_TheLegendofHeroes',
'3836_VGaming_CasinoHoldemPoker',
'3837_VGaming_TexasHoldemPoker',
'3845_VGaming_NightclubLady',
'3846_VGaming_TreasureIsland',
'3847_VGaming_BlockchainBaccarat',
'3848_VGaming_MegaKeno',
'3854_VGaming_WaytoGoal',
'3858_VGaming_FruitSlot',
'3859_VGaming_FanTan',
'3860_VGaming_WinThreeCards',
'3861_VGaming_FortuneCat',
'3862_VGaming_HappyFish',
'3863_VGaming_MagicForest',
'3864_VGaming_DJClub',
'3865_VGaming_MissionImpossible',
'3866_VGaming_BLACKPINK',
'3867_VGaming_CandyLand',
'3868_VGaming_DragonTigerFight',
'3871_VGaming_Pontoon',
'3872_VGaming_BandarQiuQiu',
"3827_VGaming_VIPBaccarat",
"3870_VGaming_Colorgame",
"3873_VGaming_Spaceflight",
];

const lobbyUrl = "https://www.sabaplay.game/vn/game";

test.describe.configure({ mode: "parallel" });

for (const gameName of lstSlotGames) {
  test(`Check game load: ${gameName}`, async ({ page }) => {
    // 1. Navigate to the URL
    await page.setViewportSize({
      width: 1280,
      height: 1990,
    });
    await page.goto(lobbyUrl);
    await page.waitForLoadState("domcontentloaded");
    // 2. Retrieve the page title
    await page.click(`//img[contains(@src,"${gameName}")]/parent::div`, {
      force: true,
    });
    let GameNameLog = gameName
    switch (gameName) {
      case "3830_VGaming_RNGLottery":
        GameNameLog = "3830_VGaming_Lottery";
        break;
      case "3835_VGaming_TheLegendofHeroes":
        GameNameLog = "3835_VGaming_HeroesSlot";
        break;
      case "3845_VGaming_NightclubLady":
        GameNameLog = "3845_VGaming_NightClub";
        break;
      default:
        GameNameLog = gameName;
    }
  
    await page.waitForLoadState("domcontentloaded");
    await submitTestCurrency(page);   
    await verifyGameUiLoad(page, GameNameLog);
  });
}

const submitTestCurrency = async (page: any) => {
  await page.setViewportSize({
    width: 1280,
    height: 720,
  });
  await page.getByRole("button", { name: "Submit" }).click();
  await page.waitForLoadState("domcontentloaded");
};

const verifyGameUiLoad = async (page: any, gameName: string) => {
  const waitRange = 1;
  let filterA: string[] = [];
  const searchString = "LoadScene";
  const gamename = gameName.split("_VGaming_")[1];
  page.on("console", (msg) => {      
    if (
      msg.text().includes(searchString) &&
      !msg.text().includes(searchString + " db")
      &&
      !msg.text().includes(searchString + " game")
    ) {
      filterA.push(msg.text());
      expect(
        msg.text().toLowerCase().includes(gamename.toLowerCase()),
        msg.text() + " " + gamename
      ).toBeTruthy();
    }
  });

  while (filterA.length < waitRange) {
    await page.waitForTimeout(500);
  }
  await page.waitForTimeout(1000);
};

// test('Check page title', async ({ page }) => {
//   await page.goto(lobbyUrl);
//   await page.waitForLoadState("networkidle");
//   await page.waitForTimeout(8000)
//   // 2. Retrieve the page title
//   const pageTitle = await page.title();
//   console.log(pageTitle);

//   const xpathSelector = "//img[contains(@src,'_VGaming')]";
//   const elements = await page.locator(xpathSelector).all();
//   console.log(elements.length);

//   let listGameIcons = []
//   for (const element of elements) {
//     const srcAttribute = await element.getAttribute('src');
//     console.log(srcAttribute);
//     listGameIcons.push(`//img[@src="${srcAttribute}"]`);
//   }

//   for (const iterator of lstSlotGames) {
//     console.log(iterator);
//     const gameIcon = page.locator(`//img[contains(@src,"${iterator}")]`)
//     await gameIcon.focus();
//     await gameIcon.click();
//     await page.waitForLoadState("networkidle");
//     await submitTestCurrency(page);
//     console.log(await page.url());
//     await page.waitForLoadState("networkidle");
//     await waitUntilGameUiLoad(page)
//     await gobacklobby(page);
//   }

// });


// "3810_VGaming_Baccarat",
// "3819_VGaming_Roulette",
// "3803_VGaming_SeDie",
// '3809_VGaming_KenoProMax',
// '3820_VGaming_Blackjack',
// '3821_VGaming_SicBo',
// '3824_VGaming_VIPSeDie',
// '3826_VGaming_VIPFishPrawnCrab',
// '3828_VGaming_SeDieWar',
// '3830_VGaming_RNGLottery',
// '3831_VGaming_ThreeCards',
// '3835_VGaming_TheLegendofHeroes',
// '3836_VGaming_CasinoHoldemPoker',
// '3837_VGaming_TexasHoldemPoker',
// '3845_VGaming_NightclubLady',
// '3846_VGaming_TreasureIsland',
// '3847_VGaming_BlockchainBaccarat',
// '3848_VGaming_MegaKeno',
// '3854_VGaming_WaytoGoal',
// '3858_VGaming_FruitSlot',
// '3859_VGaming_FanTan',
// '3860_VGaming_WinThreeCards',
// '3861_VGaming_FortuneCat',
// '3862_VGaming_HappyFish',
// '3863_VGaming_MagicForest',
// '3864_VGaming_DJClub',
// '3865_VGaming_MissionImpossible',
// '3866_VGaming_BLACKPINK',
// '3867_VGaming_CandyLand',
// '3868_VGaming_DragonTigerFight',
// '3871_VGaming_Pontoon',
// '3872_VGaming_BandarQiuQiu',
// "3827_VGaming_VIPBaccarat",
// "3870_VGaming_Colorgame",
// "3873_VGaming_Spaceflight",