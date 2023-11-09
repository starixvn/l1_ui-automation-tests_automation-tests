import { GameGuideBase } from "sc-automation-core/lib/game-components/guides/game-guide-base.spec";

const GameConfigsL1 = {
  "minBet": 10,
  "maxBet": 10000,
  "maxBetPerChoices": {
    "even": 10000,
    "odd": 10000,
    "red3": 10000,
    "white3": 10000,
    "red4": 5000,
    "white4": 4000,
    "red2": 10000
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
  "maxBet": 20000,
  "maxBetPerChoices": {
    "even": 20000,
    "odd": 20000,
    "red3": 20000,
    "white3": 20000,
    "red4": 4000,
    "white4": 4000,
    "red2": 20000
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

const gameId = 22;

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
