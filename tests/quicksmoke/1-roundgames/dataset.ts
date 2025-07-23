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
  bigsmall: {
    betChoice: "big",
  },
  sedie: {
    betChoice: "even",
  },
  vipsedie: {
    urlPath: "vsedie", // Different URL path
    betChoice: "even",
    betAmount: 10,
  },
  vipsediewar: {
    betChoice: "even",
    betAmount: 10,
  },
  minisedie: {
    betChoice: "even",
  },
  sedie3: {
    betChoice: "red",
    betAmount: 10,
  },
  specialsedie: {
    betChoice: "even",
  },
  sicbo: {
    betChoice: "big",
  },
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
  sevenupdown: {
    betChoice: "up",
  },
  threecards: {
    betChoice: "red",
  },
  baccarat: {
    betChoice: "player",
  },
  bandarqiuqiu: {
    betChoice: "spade",
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
  kenopromax: {
    betChoice: "big",
  },
  lottery: {
    betChoice: "{others: {even: 1}",
  },
  minikeno: {
    namespace: "/user/kenomini",
    betChoice: "big",
    responseName: "kenomini",
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
