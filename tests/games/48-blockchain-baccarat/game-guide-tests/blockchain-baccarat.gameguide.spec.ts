import { GameGuideBase } from "sc-automation-core/lib/game-components/guides/game-guide-base.spec";

const GameConfigsL1 = {
  "_id": "62eb5119e6681a0001b31366",
  "groupId": "61765beed2b6510001f18bd6",
  "minBet": 1,
  "maxBet": 2000,
  "maxBetPerChoices": {
    "player": 2000,
    "banker": 2000,
    "big": 2000,
    "small": 2000,
    "tie": 500,
    "playerPair": 500,
    "bankerPair": 500
  },
  "chips": [
    "1",
    "2",
    "3",
    "5",
    "10",
    "50",
    "100",
    "200",
    "500",
    "1000",
    "2000",
    "3000",
    "5000",
    "10000",
    "20000"
  ],
  "stakeLevels": [],
  "odds": {
    "player": 2,
    "banker": 1.95,
    "big": 1.54,
    "small": 2.5,
    "tie": 9,
    "playerPair": 12,
    "bankerPair": 12
  },
  "enableFreeBet": false
};

const GameConfigsL2 = {
  "_id": "62eb5119e6681a0001b31366",
  "groupId": "61765beed2b6510001f18bd6",
  "minBet": 10,
  "maxBet": 40000,
  "maxBetPerChoices": {
    "player": 40000,
    "banker": 40000,
    "big": 40000,
    "small": 40000,
    "tie": 4000,
    "playerPair": 4000,
    "bankerPair": 4000
  },
  "chips": [
    "1",
    "2",
    "3",
    "5",
    "10",
    "50",
    "100",
    "200",
    "500",
    "1000",
    "2000",
    "3000",
    "5000",
    "10000",
    "20000"
  ],
  "stakeLevels": [],
  "odds": {
    "player": 2,
    "banker": 1.95,
    "big": 1.54,
    "small": 2.5,
    "tie": 9,
    "playerPair": 12,
    "bankerPair": 12
  },
  "enableFreeBet": false
};

const gameId = 48;

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
