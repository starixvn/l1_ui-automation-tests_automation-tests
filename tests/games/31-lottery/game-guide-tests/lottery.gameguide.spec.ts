import { GameGuideBase } from "sc-automation-core/lib/game-components/guides/game-guide-base.spec";

const GameConfigsL1 = {
  "minBet": 1,
  "maxBet": 2000,
  "maxBetPerChoices": {
    "4Sets": 200,
    "special": 100,
    "head": 500,
    "tail": 500,
    "27Sets": 2000,
    "others": 2000
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
    "5000",
    "10000",
    "20000"
  ],
  "stakeLevels": [],
  "odds": {
    "4Sets": 24,
    "special": 90,
    "head": 9,
    "tail": 9,
    "27Sets": 3.6,
    "parlay2": 13,
    "parlay3": 50,
    "parlay4": 120,
    "others": 1.96
  },
  "originalOdds": {
    "4Sets": 24,
    "special": 90,
    "head": 9,
    "tail": 9,
    "27Sets": 3.6,
    "parlay2": 13,
    "parlay3": 50,
    "parlay4": 120,
    "others": 1.96
  },
  "enableFreeBet": false
};

const GameConfigsL2 = {
  "minBet": 10,
  "maxBet": 40000,
  "maxBetPerChoices": {
    "4Sets": 2000,
    "special": 1000,
    "head": 5000,
    "tail": 5000,
    "27Sets": 20000,
    "others": 40000
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
    "5000",
    "10000",
    "20000"
  ],
  "stakeLevels": [],
  "odds": {
    "4Sets": 24,
    "special": 90,
    "head": 9,
    "tail": 9,
    "27Sets": 3.6,
    "parlay2": 13,
    "parlay3": 50,
    "parlay4": 120,
    "others": 1.96
  },
  "originalOdds": {
    "4Sets": 24,
    "special": 90,
    "head": 9,
    "tail": 9,
    "27Sets": 3.6,
    "parlay2": 13,
    "parlay3": 50,
    "parlay4": 120,
    "others": 1.96
  },
  "enableFreeBet": false
};

const gameId = 31;

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
