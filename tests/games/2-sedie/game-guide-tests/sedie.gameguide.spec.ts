import { GameGuideBase } from "sc-automation-core/lib/game-components/guides/game-guide-base.spec";

const GameConfigsL1 = {
  "minBet": 1,
  "maxBet": 2000,
  "maxBetPerChoices": {
    "even": 2000,
    "odd": 2000,
    "red3": 2000,
    "white3": 2000,
    "red4": 500,
    "white4": 500,
    "red2": 2000
  },
  "chips": [
    "10",
    "20",
    "50",
    "100",
    "200",
    "500",
    "1000",
    "5000",
    "10000",
    "20000",
    "40000"
  ],
  "stakeLevels": [],
  "odds": {
    "even": 1.96,
    "odd": 1.96,
    "red3": 3.75,
    "white3": 3.75,
    "red4": 14.4,
    "white4": 14.4,
    "red2": 2.4
  },
  "originalOdds": {
    "even": 1.96,
    "odd": 1.96,
    "red3": 3.75,
    "white3": 3.75,
    "red4": 14.4,
    "white4": 14.4,
    "red2": 2.4
  },
  "enableFreeBet": true,
  "boostedChoices": []
};

const GameConfigsL2 = {
  "minBet": 10,
  "maxBet": 40000,
  "maxBetPerChoices": {
    "even": 40000,
    "odd": 40000,
    "red3": 20000,
    "white3": 20000,
    "red4": 4000,
    "white4": 4000,
    "red2": 40000
  },
  "chips": [
    "10",
    "20",
    "50",
    "100",
    "200",
    "500",
    "1000",
    "5000",
    "10000",
    "20000",
    "40000"
  ],
  "stakeLevels": [],
  "odds": {
    "even": 1.96,
    "odd": 1.96,
    "red3": 3.75,
    "white3": 3.75,
    "red4": 14.4,
    "white4": 14.4,
    "red2": 2.4
  },
  "originalOdds": {
    "even": 1.96,
    "odd": 1.96,
    "red3": 3.75,
    "white3": 3.75,
    "red4": 14.4,
    "white4": 14.4,
    "red2": 2.4
  },
  "enableFreeBet": true,
  "boostedChoices": []
};

const gameId = 2;

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
