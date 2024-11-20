import { GameGuideBase } from "sc-automation-core/lib/game-components/guides/game-guide-base.spec";

const GameConfigsL1 = {
  "gameId": 103,
  "gameName": "sevenupdown",
  "groupId": "620c8ff4d9692400014e36a6",
  "betLevels": [],
  "coinValues": [],
  "defaultBetLevel": 0,
  "defaultCoinValue": 0,
  "enabled": true,
  "maxBet": 2000,
  "maxBetPerChoices": {
    "up": 2000,
    "down": 2000,
    "seven": 1000
  },
  "maxWinPerRound": 3,
  "minBet": 1,
  "odds": {
    "up": 2,
    "down": 2,
    "seven": 7
  },
  "originalOdds": {
    "up": 2,
    "down": 2,
    "seven": 7
  },
  "enableFreeBet": false,
  "multipliers": [
    2,
    3,
    4,
    5,
    6,
    7,
    8
  ]
};

const GameConfigsL2 = {
  "gameId": 103,
  "gameName": "sevenupdown",
  "groupId": "620c8ff4d9692400014e36a6",
  "betLevels": [],
  "coinValues": [],
  "defaultBetLevel": 0,
  "defaultCoinValue": 0,
  "enabled": true,
  "maxBet": 40000,
  "maxBetPerChoices": {
    "up": 40000,
    "down": 40000,
    "seven": 4000
  },
  "maxWinPerRound": 3,
  "minBet": 1,
  "odds": {
    "up": 2,
    "down": 2,
    "seven": 7
  },
  "originalOdds": {
    "up": 2,
    "down": 2,
    "seven": 7
  },
  "enableFreeBet": false,
  "multipliers": [
    2,
    3,
    4,
    5,
    6,
    7,
    8
  ]
}

const gameId = 103;

const gameName = {
  vi: "",
  en: "",
  zh_tw: "",
  id: "",
  th: "",
  zh_cn: "",
};

const gameguideBase =
  process.env.npm_config_project === "l2"
    ? new GameGuideBase(GameConfigsL2, gameId, gameName, __filename)
    : new GameGuideBase(GameConfigsL1, gameId, gameName, __filename);
gameguideBase.start();