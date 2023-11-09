import { GameGuideBase } from "sc-automation-core/lib/game-components/guides/game-guide-base.spec";

const GameConfigsL1 = {
  "minBet": 1,
  "maxBet": 2000,
  "maxBetPerChoices": {
    "big": 2000,
    "small": 2000,
    "even": 2000,
    "odd": 2000,
    "earth": 500,
    "fire": 1500,
    "gold": 500,
    "water": 2000,
    "wood": 1500
  },
  "chips": [
    "1",
    "5",
    "10",
    "50",
    "100",
    "200",
    "500",
    "1000",
    "2000",
    "3000",
    "5000"
  ],
  "stakeLevels": [],
  "odds": {
    "big": 1.96,
    "small": 1.96,
    "even": 1.96,
    "odd": 1.96,
    "earth": 9.2,
    "fire": 4.6,
    "gold": 9.2,
    "water": 2.4,
    "wood": 4.6
  },
  "originalOdds": {
    "big": 1.96,
    "small": 1.96,
    "even": 1.96,
    "odd": 1.96,
    "earth": 9.2,
    "fire": 4.6,
    "gold": 9.2,
    "water": 2.4,
    "wood": 4.6
  },
  "enableFreeBet": false
};

const GameConfigsL2 = {
  "minBet": 10,
  "maxBet": 20000,
  "maxBetPerChoices": {
    "big": 20000,
    "small": 20000,
    "even": 20000,
    "odd": 20000,
    "earth": 5000,
    "fire": 15000,
    "gold": 5000,
    "water": 20000,
    "wood": 15000
  },
  "chips": [
    "1",
    "5",
    "10",
    "50",
    "100",
    "200",
    "500",
    "1000",
    "2000",
    "3000",
    "5000"
  ],
  "stakeLevels": [],
  "odds": {
    "big": 1.96,
    "small": 1.96,
    "even": 1.96,
    "odd": 1.96,
    "earth": 9.2,
    "fire": 4.6,
    "gold": 9.2,
    "water": 2.4,
    "wood": 4.6
  },
  "originalOdds": {
    "big": 1.96,
    "small": 1.96,
    "even": 1.96,
    "odd": 1.96,
    "earth": 9.2,
    "fire": 4.6,
    "gold": 9.2,
    "water": 2.4,
    "wood": 4.6
  },
  "enableFreeBet": false
};

const gameId = 8;

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
