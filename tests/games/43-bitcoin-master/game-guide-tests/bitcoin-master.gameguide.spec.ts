import { GameGuideBase } from "sc-automation-core/lib/game-components/guides/game-guide-base.spec";

const GameConfigsL1 = {
  "_id": "61a6e8a958410d00017d5007",
  "groupId": "61765beed2b6510001f18bd6",
  "minBet": 1,
  "maxBet": 2000,
  "maxBetPerChoices": {
    "up": 2000,
    "down": 2000,
    "odd": 2000,
    "even": 2000
  },
  "chips": [
    "1",
    "5",
    "10",
    "50",
    "100",
    "500",
    "1000",
    "2000",
    "3000",
    "5000"
  ],
  "stakeLevels": [],
  "odds": {
    "up": 1.96,
    "down": 1.96,
    "odd": 1.96,
    "even": 1.96
  },
  "enableFreeBet": false
};

const GameConfigsL2 = {
  "_id": "61a6e8a958410d00017d5007",
  "groupId": "61765beed2b6510001f18bd6",
  "minBet": 10,
  "maxBet": 40000,
  "maxBetPerChoices": {
    "up": 40000,
    "down": 40000,
    "odd": 40000,
    "even": 40000
  },
  "chips": [
    "1",
    "5",
    "10",
    "50",
    "100",
    "500",
    "1000",
    "2000",
    "3000",
    "5000"
  ],
  "stakeLevels": [],
  "odds": {
    "up": 1.96,
    "down": 1.96,
    "odd": 1.96,
    "even": 1.96
  },
  "enableFreeBet": false
};

const gameId = 43;

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
