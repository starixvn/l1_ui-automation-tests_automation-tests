import { GameGuideBase } from "sc-automation-core/lib/game-components/guides/game-guide-base.spec";

const GameConfigsL1 = {
        "minBet": 1,
        "maxBet": 2000,
        "maxBetPerChoices": {
          "yellow": 2000,
          "red": 2000,
          "pink": 2000,
          "white": 2000,
          "blue": 2000,
          "green": 2000,
          "hot": 2000,
          "cold": 2000
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
          "single": 2,
          "double": 3.5,
          "triple": 6,
          "hot": 1.96,
          "cold": 1.96
        },
        "originalOdds": {
          "single": 2,
          "double": 3.5,
          "triple": 6,
          "hot": 1.96,
          "cold": 1.96
        },
        "enableFreeBet": false
      
};

const GameConfigsL2 = {
    "minBet": 10,
    "maxBet": 20000,
    "maxBetPerChoices": {
      "yellow": 20000,
      "red": 20000,
      "pink": 20000,
      "white": 20000,
      "blue": 20000,
      "green": 20000,
      "hot": 20000,
      "cold": 20000
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
      "20000"
    ],
    "stakeLevels": [],
    "odds": {
      "single": 2,
      "double": 3.5,
      "triple": 6,
      "hot": 1.96,
      "cold": 1.96
    },
    "originalOdds": {
      "single": 2,
      "double": 3.5,
      "triple": 6,
      "hot": 1.96,
      "cold": 1.96
    },
    "enableFreeBet": false
};

const gameId = 71;

const gameName = {
  vi: "Color Game",
  en: "Color Game",
  zh_tw: "Color Game",
  id: "Color Game",
  th: "Color Game",
  zh_cn: "Color Game",
};

const gameguideBase =
  process.env.npm_config_project === "l2"
    ? new GameGuideBase(GameConfigsL2, gameId, gameName, __filename)
    : new GameGuideBase(GameConfigsL1, gameId, gameName, __filename);
gameguideBase.start();
