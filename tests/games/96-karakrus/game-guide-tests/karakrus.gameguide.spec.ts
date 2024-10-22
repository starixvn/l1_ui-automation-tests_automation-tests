import { GameGuideBase } from "sc-automation-core/lib/game-components/guides/game-guide-base.spec";

const GameConfigsL1 = {
  "minBet": 1,
  "maxBet": 2000,
  "maxBetPerChoices": {
    "red": 2000,
    "white": 2000,
    "red3": 1000,
    "red2": 2000,
    "red1": 2000,
    "white3": 1000
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
    "white": 1.96,
    "red3": 7.5,
    "red2": 2.5,
    "red1": 2.5,
    "white3": 7.5
  },
  "originalOdds": {
    "red": 1.96,
    "white": 1.96,
    "red3": 7.5,
    "red2": 2.5,
    "red1": 2.5,
    "white3": 7.5
  },
  "enableFreeBet": false
};

const GameConfigsL2 = { 
};

const gameId = 95;

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
