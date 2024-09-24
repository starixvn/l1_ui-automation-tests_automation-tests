import { GameGuideBase } from "sc-automation-core/lib/game-components/guides/game-guide-base.spec";

const GameConfigsL1 = {
  "_id": "6233f6afa18f420001f90ef4",
  "groupId": "61765beed2b6510001f18bd6",
  "minBet": 1,
  "maxBet": 2000,
  "maxBetPerChoices": {},
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
    "high3": 0.05,
    "high4": 0.16,
    "high5": 0.28,
    "high6": 0.44,
    "high7": 0.63,
    "high8": 0.9,
    "high9": 1.27,
    "high10": 1.83,
    "high11": 2.76,
    "high12": 4.62,
    "high13": 10.2,
    "low3": 10.2,
    "low4": 4.62,
    "low5": 2.76,
    "low6": 1.83,
    "low7": 1.27,
    "low8": 0.9,
    "low9": 0.63,
    "low10": 0.44,
    "low11": 0.28,
    "low12": 0.16,
    "low13": 0.05
  }
};

const GameConfigsL2 = {
  "_id": "6233f6afa18f420001f90ef4",
  "groupId": "61765beed2b6510001f18bd6",
  "minBet": 10,
  "maxBet": 40000,
  "maxBetPerChoices": {},
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
    "high3": 0.05,
    "high4": 0.16,
    "high5": 0.28,
    "high6": 0.44,
    "high7": 0.63,
    "high8": 0.9,
    "high9": 1.27,
    "high10": 1.83,
    "high11": 2.76,
    "high12": 4.62,
    "high13": 10.2,
    "low3": 10.2,
    "low4": 4.62,
    "low5": 2.76,
    "low6": 1.83,
    "low7": 1.27,
    "low8": 0.9,
    "low9": 0.63,
    "low10": 0.44,
    "low11": 0.28,
    "low12": 0.16,
    "low13": 0.05
  }
};

const gameId = 45;

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
