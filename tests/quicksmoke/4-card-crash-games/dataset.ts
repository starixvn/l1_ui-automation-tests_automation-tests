// Base configuration with common defaults
const BASE_CONFIG = {
  origin: "proxy.sabagame.com",
  betAmount: 10,
  betChoice: "player",
  getUrl: (gameName: string) =>
    `wss://proxy.sabagame.com/${gameName}/socket.io/?EIO=4&transport=websocket`,
  getNamespace: (gameName: string) => `/user/${gameName}`,
  getResponseName: (gameName: string) => gameName,
};

const GAME_OVERRIDES = {
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
  vipbaccarat: {},
  spaceflight: {},
  rocketx: {},
  christmascrash: {},
  coinmining: { betAmount: 1 },
  blackjack: { betAmount: 10 },
  chineseblackjack: {},
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
