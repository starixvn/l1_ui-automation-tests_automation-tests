import { GameGuideBase } from "sc-automation-core/lib/game-components/guides/game-guide-base.spec";

const GameConfigsL1 = {
  "minBet": 10,
  "maxBet": 5000,
  "maxBetPerChoices": {
    "player": 5000,
    "banker": 5000,
    "big": 5000,
    "small": 5000,
    "tie": 500,
    "playerPair": 500,
    "bankerPair": 500
  },
  "chips": [
    "10",
    "50",
    "100",
    "200",
    "500",
    "1000",
    "2000",
    "5000"
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
  "originalOdds": {
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
  "minBet": 100,
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
    "10",
    "50",
    "100",
    "200",
    "500",
    "1000",
    "2000",
    "5000"
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
  "originalOdds": {
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

const gameId = 27;

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
