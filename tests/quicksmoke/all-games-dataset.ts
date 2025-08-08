import { BASE_CONFIG, GAME_TYPE_DEFAULTS } from "./base-config";

// Round games configuration
const ROUND_GAMES_OVERRIDES = {
  dragontiger: { betChoice: "dragon" },
  dragontigerfight: { betChoice: "dragon" },
  bigsmall: { betChoice: "big" },
  sedie: { betChoice: "even" },
  vipsedie: { urlPath: "vsedie", betChoice: "even", betAmount: 10 },
  vipsediewar: { betChoice: "even", betAmount: 10 },
  minisedie: { betChoice: "even" },
  sedie3: { betChoice: "red", betAmount: 10 },
  specialsedie: { betChoice: "even" },
  sicbo: { betChoice: "big" },
  turbobigsmall: {
    namespace: "/user/txturbo",
    betChoice: "big",
    responseName: "txturbo",
  },
  turbooddeven: {
    namespace: "/user/oeturbo",
    betChoice: "even",
    responseName: "oeturbo",
  },
  unbalancedbigsmall: {
    namespace: "/user/unbalancedbigsmall1",
    betChoice: "big",
    responseName: "unbalancedbigsmall1",
  },
  sevenupdown: { betChoice: "up" },
  threecards: { betChoice: "red" },
  baccarat: { betChoice: "player" },
  bandarqiuqiu: { betChoice: "spade" },
  fishprawncrab: { betChoice: "fish" },
  vipfishprawncrab: { betChoice: "fish", betAmount: 10 },
  fantan: { betChoice: "even" },
  cointoss: { betChoice: "head", clientSeed: "2462" },
  footballcointoss: { betChoice: "home", clientSeed: "2462" },
  kenopromax: { betChoice: "big" },
  lottery: { betChoice: "{others: {even: 1}" },
  minikeno: {
    namespace: "/user/kenomini",
    betChoice: "big",
    responseName: "kenomini",
  },
  fruitslot: { betChoice: "big" },
  footballslot: { betChoice: "big" },
  colorgame: { betChoice: "yellow" },
  karakrus: { betChoice: "kara" },
  marblefootball: { betChoice: "home" },
  bitcoinmaster: { betChoice: "up" },
};

// Slot games configuration
const SLOT_GAMES_OVERRIDES = {
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

// Card/Crash games configuration
const CARD_CRASH_GAMES_OVERRIDES = {
  vipbaccarat: {},
  bac81: { urlPath: "baccaratx" },
  bac82: { urlPath: "baccaratx" },
  bac83: { urlPath: "baccaratx" },
  bac84: { urlPath: "baccaratx" },
  bac85: { urlPath: "baccaratx" },
  bac86: { urlPath: "baccaratx" },
  bac87: { urlPath: "baccaratx" },
  bac88: { urlPath: "baccaratx" },
  bac89: { urlPath: "baccaratx" },
  bac90: { urlPath: "baccaratx" },
  bac91: { urlPath: "baccaratx" },
  bac92: { urlPath: "baccaratx" },
  bac97: { urlPath: "baccaratx" },
  bac98: { urlPath: "baccaratx" },
  bac100: { urlPath: "baccaratx" },
  bac101: { urlPath: "baccaratx" },
  spaceflight: { autoCashOut: 2.0 },
  christmascrash: { autoCashOut: 2.0 },
  rocketx: { autoCashOut: 2.0 },
  blackjack: {},
  chineseblackjack: {},
};

// Helper function to generate config for a game type
function generateGameConfigs(overrides: any, gameTypeDefaults: any) {
  return Object.fromEntries(
    Object.entries(overrides).map(([gameName, gameOverrides]) => {
      const urlPath = (gameOverrides as any).urlPath || gameName;
      const config: any = {
        url: BASE_CONFIG.getUrl(urlPath),
        namespace:
          (gameOverrides as any).namespace ||
          BASE_CONFIG.getNamespace(gameName),
        origin: BASE_CONFIG.origin,
        betChoice:
          (gameOverrides as any).betChoice || gameTypeDefaults.betChoice,
        betAmount:
          (gameOverrides as any).betAmount || gameTypeDefaults.betAmount,
        responseName:
          (gameOverrides as any).responseName ||
          BASE_CONFIG.getResponseName(gameName),
      };

      // Add game type specific properties
      if (gameTypeDefaults.freeSpin !== undefined) {
        config.freeSpin = gameTypeDefaults.freeSpin;
      }

      // Add optional properties if present
      if ((gameOverrides as any).clientSeed) {
        config.clientSeed = (gameOverrides as any).clientSeed;
      }
      if ((gameOverrides as any).autoCashOut) {
        config.autoCashOut = (gameOverrides as any).autoCashOut;
      }
      if ((gameOverrides as any).coinValue) {
        config.coinValue = (gameOverrides as any).coinValue;
      }
      if ((gameOverrides as any).betLevel) {
        config.betLevel = (gameOverrides as any).betLevel;
      }
      if ((gameOverrides as any).totalBet) {
        config.totalBet = (gameOverrides as any).totalBet;
      }

      return [gameName, config];
    })
  );
}

// Generate all game configurations
export const roundGameConfigs = generateGameConfigs(
  ROUND_GAMES_OVERRIDES,
  GAME_TYPE_DEFAULTS.round
);
export const slotGameConfigs = generateGameConfigs(
  SLOT_GAMES_OVERRIDES,
  GAME_TYPE_DEFAULTS.slot
);
export const cardCrashGameConfigs = generateGameConfigs(
  CARD_CRASH_GAMES_OVERRIDES,
  GAME_TYPE_DEFAULTS.cardCrash
);

// Combined configuration for easy access
export const allGameConfigs = {
  ...roundGameConfigs,
  ...slotGameConfigs,
  ...cardCrashGameConfigs,
};

// Game lists for each type
export const roundGames = [
  "sedie",
  "vipsedie",
  "vipsediewar",
  "minisedie",
  "sedie3",
  "specialsedie",
  "bigsmall",
  "sicbo",
  "turbobigsmall",
  "turbooddeven",
  "unbalancedbigsmall",
  "sevenupdown",
  "kenopromax",
  "minikeno",
];

export const slotGames = [
  "fortunecat",
  "waytogoal",
  "magicforest",
  "happyfish",
  "nightclub",
  "heroesslot",
  "fourguardians",
  "djclub",
  "missionimpossible",
  "blackpink",
  "transformers",
  "onepiece",
  "dragonball",
  "nezhasrebellion",
  "ramseslosttomb",
  "onedayinparadise",
  "poseidonsrealm",
  "aladdinswishes",
  "godoffortune",
  "candyland",
  "olympub",
  "bigbassfishing",
  "aztecprincess",
  "fruitsamurai",
  "wildwestmostwanted",
  "happyfarm",
  "mahjongwins",
  "summerheat",
  "wukongsrevenge",
];

export const otherGames = [
  "dragontiger",
  "dragontigerfight",
  "baccarat",
  "threecards",
  "bandarqiuqiu",
  "fishprawncrab",
  "vipfishprawncrab",
  "fantan",
  "cointoss",
  "footballcointoss",
  "fruitslot",
  "footballslot",
  "colorgame",
  "karakrus",
  "marblefootball",
  "bitcoinmaster",
];

export const cardCrashGames = [
  "vipbaccarat",
  "bac81",
  "bac82",
  "bac84",
  "bac85",
  "bac86",
  "bac87",
  "bac88",
  "bac89",
  "bac90",
  "bac91",
  "bac92",
  "bac97",
  "bac98",
  "bac100",
  "bac101",
  "spaceflight",
  "christmascrash",
  "rocketx",
];
