import { GameGuideBase } from "sc-automation-core/lib/game-components/guides/game-guide-base.spec";

const GameConfigsL1 = {
  
  "minBet": 1,
  "maxBet": 2000,
  "maxBetPerChoices": {
    "dragon": 2000,
    "tiger": 2000,
    "tie": 500
  },
  "chips": [
    "1",
    "3",
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
    "dragon": 2,
    "tiger": 2,
    "tie": 11
  },
  "originalOdds": {
    "dragon": 2,
    "tiger": 2,
    "tie": 11
  },
  "enableFreeBet": false
};

const GameConfigsL2 = {
  "minBet": 10,
  "maxBet": 40000,
  "maxBetPerChoices": {
    "dragon": 40000,
    "tiger": 40000,
    "tie": 4000
  },
  "chips": [
    "1",
    "3",
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
    "dragon": 2,
    "tiger": 2,
    "tie": 11
  },
  "originalOdds": {
    "dragon": 2,
    "tiger": 2,
    "tie": 11
  },
  "enableFreeBet": false
};

const gameId = 7;

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
