// Base configuration with common defaults
const BASE_CONFIG = {
  origin: "proxy.sabagame.com",
  betAmount: 1,
  getUrl: (gameName: string) =>
    `wss://proxy.sabagame.com/${gameName}/socket.io/?EIO=4&transport=websocket`,
  getNamespace: (gameName: string) => `/user/${gameName}`,
  getResponseName: (gameName: string) => gameName,
};

const GAME_OVERRIDES = {
  dragontiger: {
    betChoice: "dragon",
  },
  dragontigerfight: {
    betChoice: "dragon",
  },
  threecards: {
    betChoice: "red",
  },
  bandarqiuqiu: {
    betChoice: "spade",
  },
  baccarat: {
    betChoice: "player",
  },
  fishprawncrab: {
    betChoice: "fish",
  },
  vipfishprawncrab: {
    betChoice: "fish",
    betAmount: 10,
  },
  fantan: {
    betChoice: "even",
  },
  cointoss: {
    betChoice: "head",
    clientSeed: "2462",
  },
  footballcointoss: {
    betChoice: "home",
    clientSeed: "2462",
  },
  bitcoinmaster: {
    betChoice: "up",
  },
  fruitslot: {
    betChoice: "big",
  },
  footballslot: {
    betChoice: "big",
  },
  roulette: {
    betChoice: "even",
  },
  footballdice: {
    betChoice: "home",
  },
  colorgame: {
    betChoice: "yellow",
  },
  karakrus: {
    betChoice: "kara",
  },
  marblefootball: {
    betChoice: "home",
  },
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
      betChoice: (overrides as any).betChoice,
      betAmount: (overrides as any).betAmount || BASE_CONFIG.betAmount,
      responseName:
        (overrides as any).responseName ||
        BASE_CONFIG.getResponseName(gameName),
    };

    // Add clientSeed if present in overrides
    if ((overrides as any).clientSeed) {
      config.clientSeed = (overrides as any).clientSeed;
    }
    return [gameName, config];
  })
);
