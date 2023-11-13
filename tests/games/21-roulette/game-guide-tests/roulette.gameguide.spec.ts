import { GameGuideBase } from "sc-automation-core/lib/game-components/guides/game-guide-base.spec";

const GameConfigsL1 = {"minBet": 10,
"maxBet": 2000,
"maxBetPerChoices": {
  "straightUp": 50,
  "split": 200,
  "street": 300,
  "triangle": 300,
  "corner": 400,
  "fourNumbers": 400,
  "line": 1000,
  "column": 2000,
  "dozen": 2000,
  "redBlack": 1000,
  "oddEven": 2000,
  "bigSmall": 2000
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
  "5000",
  "10000",
  "20000",
  "30000"
],
"stakeLevels": [],
"odds": {
  "straightUp": 36,
  "split": 18,
  "street": 12,
  "triangle": 12,
  "corner": 9,
  "fourNumbers": 9,
  "line": 6,
  "column": 3,
  "dozen": 3,
  "redBlack": 2,
  "oddEven": 2,
  "bigSmall": 2
},
"originalOdds": {
  "straightUp": 36,
  "split": 18,
  "street": 12,
  "triangle": 12,
  "corner": 9,
  "fourNumbers": 9,
  "line": 6,
  "column": 3,
  "dozen": 3,
  "redBlack": 2,
  "oddEven": 2,
  "bigSmall": 2
},
"enableFreeBet": false
};

const GameConfigsL2 = {
  "minBet": 10,
  "maxBet": 40000,
  "maxBetPerChoices": {
    "straightUp": 50,
    "split": 200,
    "street": 300,
    "triangle": 300,
    "corner": 400,
    "fourNumbers": 400,
    "line": 10000,
    "column": 20000,
    "dozen": 20000,
    "redBlack": 10000,
    "oddEven": 40000,
    "bigSmall": 40000
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
    "5000",
    "10000",
    "20000",
    "30000"
  ],
  "stakeLevels": [],
  "odds": {
    "straightUp": 36,
    "split": 18,
    "street": 12,
    "triangle": 12,
    "corner": 9,
    "fourNumbers": 9,
    "line": 6,
    "column": 3,
    "dozen": 3,
    "redBlack": 2,
    "oddEven": 2,
    "bigSmall": 2
  },
  "originalOdds": {
    "straightUp": 36,
    "split": 18,
    "street": 12,
    "triangle": 12,
    "corner": 9,
    "fourNumbers": 9,
    "line": 6,
    "column": 3,
    "dozen": 3,
    "redBlack": 2,
    "oddEven": 2,
    "bigSmall": 2
  },
  "enableFreeBet": false
};

const gameId = 21;

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
