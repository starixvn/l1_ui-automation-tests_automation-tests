import { GameGuideBase } from "sc-automation-core/lib/game-components/guides/game-guide-base.spec";

const GameConfigsL1 = {
  "_id": "63bbdda75676040001076c61",
  "groupId": "61765beed2b6510001f18bd6",
  "minBet": 1,
  "maxBet": 2000,
  "maxBetPerChoices": {
    "even": 2000,
    "odd": 2000,
    "fan1": 1000,
    "fan2": 1000,
    "fan3": 1000,
    "fan4": 1000,
    "kwok12": 2000,
    "kwok23": 2000,
    "kwok34": 2000,
    "kwok41": 2000,
    "chun123": 2000,
    "chun124": 2000,
    "chun134": 2000,
    "chun234": 2000
  },
  "chips": [
    "1",
    "10",
    "50",
    "100",
    "500",
    "1000",
    "2000"
  ],
  "stakeLevels": [],
  "odds": {
    "even": 1.96,
    "odd": 1.96,
    "fan1": 3.85,
    "fan2": 3.85,
    "fan3": 3.85,
    "fan4": 3.85,
    "kwok12": 1.96,
    "kwok23": 1.96,
    "kwok34": 1.96,
    "kwok41": 1.96,
    "chun123": 1.31,
    "chun124": 1.31,
    "chun134": 1.31,
    "chun234": 1.31
  },
  "originalOdds": {
    "even": 1.96,
    "odd": 1.96,
    "fan1": 3.85,
    "fan2": 3.85,
    "fan3": 3.85,
    "fan4": 3.85,
    "kwok12": 1.96,
    "kwok23": 1.96,
    "kwok34": 1.96,
    "kwok41": 1.96,
    "chun123": 1.31,
    "chun124": 1.31,
    "chun134": 1.31,
    "chun234": 1.31
  },
  "enableFreeBet": false
};

const GameConfigsL2 =  {
  "_id": "63bbdda75676040001076c61",
  "groupId": "61765beed2b6510001f18bd6",
  "minBet": 1,
  "maxBet": 40000,
  "maxBetPerChoices": {
    "even": 40000,
    "odd": 40000,
    "fan1": 20000,
    "fan2": 20000,
    "fan3": 20000,
    "fan4": 20000,
    "kwok12": 40000,
    "kwok23": 40000,
    "kwok34": 40000,
    "kwok41": 40000,
    "chun123": 40000,
    "chun124": 40000,
    "chun134": 40000,
    "chun234": 40000
  },
  "chips": [
    "1",
    "10",
    "50",
    "100",
    "500",
    "1000",
    "2000"
  ],
  "stakeLevels": [],
  "odds": {
    "even": 1.96,
    "odd": 1.96,
    "fan1": 3.85,
    "fan2": 3.85,
    "fan3": 3.85,
    "fan4": 3.85,
    "kwok12": 1.96,
    "kwok23": 1.96,
    "kwok34": 1.96,
    "kwok41": 1.96,
    "chun123": 1.31,
    "chun124": 1.31,
    "chun134": 1.31,
    "chun234": 1.31
  },
  "originalOdds": {
    "even": 1.96,
    "odd": 1.96,
    "fan1": 3.85,
    "fan2": 3.85,
    "fan3": 3.85,
    "fan4": 3.85,
    "kwok12": 1.96,
    "kwok23": 1.96,
    "kwok34": 1.96,
    "kwok41": 1.96,
    "chun123": 1.31,
    "chun124": 1.31,
    "chun134": 1.31,
    "chun234": 1.31
  },
  "enableFreeBet": false
};

const gameId = 60;

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
