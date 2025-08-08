import { getCurrentProjectConfig } from "./project-configs";

// Get project-specific overrides
const projectConfig = getCurrentProjectConfig();

// Shared base configuration for all quicksmoke tests
export const BASE_CONFIG = {
  origin: projectConfig.baseConfig?.origin || "proxy.sabagame.com",
  betAmount: 1, // Default bet amount, can be overridden per game type
  getUrl:
    projectConfig.baseConfig?.getUrl ||
    ((gameName: string) =>
      `wss://proxy.sabagame.com/${gameName}/socket.io/?EIO=4&transport=websocket`),
  getNamespace: (gameName: string) => `/user/${gameName}`,
  getResponseName: (gameName: string) => gameName,
};

// Game type specific defaults with project multiplier
const betMultiplier = projectConfig.betAmountMultiplier || 1;

export const GAME_TYPE_DEFAULTS = {
  round: {
    betAmount: 1 * betMultiplier,
  },
  slot: {
    betAmount: 0.01 * betMultiplier,
    betChoice:
      "[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]",
    freeSpin: "false",
  },
  other: {
    betAmount: 1 * betMultiplier,
  },
  cardCrash: {
    betAmount: 10 * betMultiplier,
    betChoice: "player",
  },
};
