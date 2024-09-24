import { GameGuideBase } from "sc-automation-core/lib/game-components/guides/game-guide-base.spec";

const GameConfigsL1 = {
  "_id": "62d0d6492872d000010453ad",
  "groupId": "61765beed2b6510001f18bd6",
  "minBet": 1,
  "maxBet": 2000,
  "maxBetPerChoices": {},
  "chips": [
    "1",
    "10",
    "50",
    "100",
    "200",
    "500",
    "1000",
    "2000",
    "20000"
  ],
  "stakeLevels": [],
  "odds": {
    "big": 1.96,
    "small": 1.96
  },
  "originalOdds": {
    "big": 1.96,
    "small": 1.96
  },
  "enableFreeBet": false
};

const GameConfigsL2 = {
  "_id": "62d0d6492872d000010453ad",
  "groupId": "61765beed2b6510001f18bd6",
  "minBet": 10,
  "maxBet": 40000,
  "maxBetPerChoices": {},
  "chips": [
    "1",
    "10",
    "50",
    "100",
    "200",
    "500",
    "1000",
    "2000",
    "20000"
  ],
  "stakeLevels": [],
  "odds": {
    "big": 1.96,
    "small": 1.96
  },
  "originalOdds": {
    "big": 1.96,
    "small": 1.96
  },
  "enableFreeBet": false
};

const gameId = 50;

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
