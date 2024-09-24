import { GameGuideBase } from "sc-automation-core/lib/game-components/guides/game-guide-base.spec";

const GameConfigsL1 = {
  "_id": "6184e495496aa00001eb80d1",
  "groupId": "61765beed2b6510001f18bd6",
  "minBet": 1,
  "maxBet": 2000,
  "maxBetPerChoices": {
    "red": 2000,
    "black": 2000,
    "diamonds": 2000,
    "hearts": 2000,
    "spades": 2000,
    "clubs": 2000
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
    "2000"
  ],
  "stakeLevels": [],
  "odds": {
    "red": 1.96,
    "black": 1.96,
    "diamonds": 1.68,
    "hearts": 1.68,
    "spades": 1.68,
    "clubs": 1.68
  },
  "originalOdds": {
    "red": 1.96,
    "black": 1.96,
    "diamonds": 1.68,
    "hearts": 1.68,
    "spades": 1.68,
    "clubs": 1.68
  },
  "enableFreeBet": false
};

const GameConfigsL2 = {
  "_id": "6184e495496aa00001eb80d1",
  "groupId": "61765beed2b6510001f18bd6",
  "minBet": 10,
  "maxBet": 40000,
  "maxBetPerChoices": {
    "red": 40000,
    "black": 40000,
    "diamonds": 40000,
    "hearts": 40000,
    "spades": 40000,
    "clubs": 40000
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
    "2000"
  ],
  "stakeLevels": [],
  "odds": {
    "red": 1.96,
    "black": 1.96,
    "diamonds": 1.68,
    "hearts": 1.68,
    "spades": 1.68,
    "clubs": 1.68
  },
  "originalOdds": {
    "red": 1.96,
    "black": 1.96,
    "diamonds": 1.68,
    "hearts": 1.68,
    "spades": 1.68,
    "clubs": 1.68
  },
  "enableFreeBet": false
};

const gameId = 35;

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
