import { GameGuideBase } from "sc-automation-core/lib/game-components/guides/game-guide-base.spec";

const GameConfigsL1 = {
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
    "2000",
    "5000",
    "10000",
    "20000"
  ],
  "stakeLevels": [],
  "odds": {
    "even": 1.96,
    "odd": 1.96
  },
  "originalOdds": {
    "even": 1.96,
    "odd": 1.96
  },
  "enableFreeBet": false
};

const GameConfigsL2 = {
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
    "2000",
    "5000",
    "10000",
    "20000"
  ],
  "stakeLevels": [],
  "odds": {
    "even": 1.96,
    "odd": 1.96
  },
  "originalOdds": {
    "even": 1.96,
    "odd": 1.96
  },
  "enableFreeBet": false
};

const gameId = 24;

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
