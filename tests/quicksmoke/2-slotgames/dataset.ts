// Base configuration with common defaults
const BASE_CONFIG = {
  origin: "proxy.sabagame.com",
  betAmount: 0.01,
  betChoice:
    "[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]",
  freeSpin: "false",
  getUrl: (gameName: string) =>
    `wss://proxy.sabagame.com/${gameName}/socket.io/?EIO=4&transport=websocket`,
  getNamespace: (gameName: string) => `/user/${gameName}`,
  getResponseName: (gameName: string) => gameName,
};

const GAME_OVERRIDES = {
  fortunecat: {},
  waytogoal: {},
  magicforest: {},
  happyfish: {},
  nightclub: {},
  heroesslot: {},
  fourguardians: {},
  djclub: {},
  missionimpossible: {},
  blackpink: {},
  transformers: {},
  onepiece: {},
  dragonball: {},
  templeofcaishen: {},
  nezhasrebellion: {},
  ramseslosttomb: { coinValue: 0.01, betLevel: 1, totalBet: 0.2 },
  onedayinparadise: { coinValue: 0.01, betLevel: 1, totalBet: 0.2 },
  poseidonsrealm: { coinValue: 0.01, betLevel: 1, totalBet: 0.2 },
  aladdinswishes: { coinValue: 0.01, betLevel: 1, totalBet: 0.2 },
  godoffortune: { coinValue: 0.01, betLevel: 1, totalBet: 0.2 },
  candyland: { coinValue: 0.01, betLevel: 1, totalBet: 0.2 },
  treasureisland: { coinValue: 0.01, betLevel: 1, totalBet: 0.2 },
  olympub: { coinValue: 0.01, betLevel: 1, totalBet: 0.2 },
  bigbassfishing: { coinValue: 0.01, betLevel: 1, totalBet: 0.2 },
  aztecprincess: { coinValue: 0.01, betLevel: 1, totalBet: 0.2 },
  fruitsamurai: { coinValue: 0.01, betLevel: 1, totalBet: 0.2 },
  wildwestmostwanted: { coinValue: 0.01, betLevel: 1, totalBet: 0.2 },
  happyfarm: { coinValue: 0.01, betLevel: 1, totalBet: 0.2 },
  mahjongwins: { coinValue: 0.01, betLevel: 1, totalBet: 0.2 },
  summerheat: { coinValue: 0.01, betLevel: 1, totalBet: 0.2 },
  wukongsrevenge: { coinValue: 0.01, betLevel: 1, totalBet: 0.2 },
};

// Generate full configuration
export const gameConfigs = Object.fromEntries(
  Object.entries(GAME_OVERRIDES).map(([gameName, overrides]) => {
    const urlPath = (overrides as any).urlPath || gameName;
    const config: any = {
      url: BASE_CONFIG.getUrl(urlPath),
      namespace:
        (overrides as any).namespace || BASE_CONFIG.getNamespace(gameName),
      origin: BASE_CONFIG.origin,
      betChoice: (overrides as any).betChoice || BASE_CONFIG.betChoice,
      betAmount: (overrides as any).betAmount || BASE_CONFIG.betAmount,
      freeSpin: BASE_CONFIG.freeSpin,
      responseName:
        (overrides as any).responseName ||
        BASE_CONFIG.getResponseName(gameName),
      // Conditionally add optional properties
      ...((overrides as any).coinValue && {
        coinValue: (overrides as any).coinValue,
      }),
      ...((overrides as any).betLevel && {
        betLevel: (overrides as any).betLevel,
      }),
      ...((overrides as any).totalBet && {
        totalBet: (overrides as any).totalBet,
      }),
    };

    return [gameName, config];
  })
);
