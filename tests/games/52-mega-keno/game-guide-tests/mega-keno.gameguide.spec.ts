import { GameGuideBase } from "sc-automation-core/lib/game-components/guides/game-guide-base.spec";

const GameConfigsL1 = {
  "_id": "6194746bfe79bb000191f39a",
  "groupId": "61765beed2b6510001f18bd6",
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
    "500",
    "1000",
    "2000"
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

const GameConfigsL2 =  {
  "_id": "6194746bfe79bb000191f39a",
  "groupId": "61765beed2b6510001f18bd6",
  "minBet": 10,
  "maxBet": 40000,
  "maxBetPerChoices": {
    "big": 40000,
    "small": 40000,
    "even": 40000,
    "odd": 40000,
    "earth": 4000,
    "fire": 8000,
    "gold": 4000,
    "water": 40000,
    "wood": 8000
  },
  "chips": [
    "1",
    "5",
    "10",
    "50",
    "100",
    "500",
    "1000",
    "2000"
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

const gameId = 52;

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
