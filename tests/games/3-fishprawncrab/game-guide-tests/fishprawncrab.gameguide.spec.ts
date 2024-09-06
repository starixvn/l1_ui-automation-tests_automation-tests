import { GameGuideBase } from "sc-automation-core/lib/game-components/guides/game-guide-base.spec";

const GameConfigsL1 = {"minBet": 1,
"maxBet": 2000,
"maxBetPerChoices": {
  "fish": 2000,
  "prawn": 2000,
  "crab": 2000,
  "stag": 2000,
  "gourd": 2000,
  "rooster": 2000
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
  "2000",
  "3000",
  "5000",
  "10000",
  "20000",
  "30000"
],
"stakeLevels": [],
"odds": {
  "single": 2,
  "double": 3.5,
  "triple": 6
},
"originalOdds": {
  "single": 2,
  "double": 3.5,
  "triple": 6
},
"enableFreeBet": false
};

const GameConfigsL2 = {
  "minBet": 10,
  "maxBet": 20000,
  "maxBetPerChoices": {
    "fish": 20000,
    "prawn": 20000,
    "crab": 20000,
    "stag": 20000,
    "gourd": 20000,
    "rooster": 20000
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
    "2000",
    "3000",
    "5000",
    "10000",
    "20000",
    "30000"
  ],
  "stakeLevels": [],
  "odds": {
    "single": 2,
    "double": 3.5,
    "triple": 6
  },
  "originalOdds": {
    "single": 2,
    "double": 3.5,
    "triple": 6
  },
  "enableFreeBet": false
};

const gameId = 3;

const gameName = {
  vi: "Fish Prawn Crab",
  en: "Fish Prawn Crab",
  zh_tw: "Fish Prawn Crab",
  id: "Fish Prawn Crab",
  th: "Fish Prawn Crab",
  zh_cn: "Fish Prawn Crab",
};

const gameguideBase =
  process.env.npm_config_project === "l2"
    ? new GameGuideBase(GameConfigsL2, gameId, gameName, __filename)
    : new GameGuideBase(GameConfigsL1, gameId, gameName, __filename);
gameguideBase.start();
