import { GameGuideBase } from "sc-automation-core/lib/game-components/guides/game-guide-base.spec";

const GameConfigsL1 = {
  "_id": "63be8db65676040001076c63",
  "groupId": "61765beed2b6510001f18bd6",
  "minBet": 1,
  "maxBet": 2000,
  "maxBetPerChoices": {
    "bar": 2000,
    "tripleSeven": 2000,
    "star": 2000,
    "watermelon": 2000,
    "bell": 2000,
    "lemon": 2000,
    "orange": 2000,
    "cherry": 2000,
    "big": 2000,
    "small": 2000
  },
  "chips": [
    "1",
    "10",
    "50",
    "100",
    "200",
    "1000",
    "2000"
  ],
  "stakeLevels": [],
  "odds": {
    "bar": 100,
    "bar50": 50,
    "bar25": 25,
    "tripleSeven": 40,
    "tripleSeven3": 3,
    "star": 30,
    "star3": 3,
    "watermelon": 20,
    "watermelon3": 3,
    "bell": 20,
    "bell3": 3,
    "lemon": 15,
    "lemon3": 3,
    "orange": 10,
    "orange3": 3,
    "cherry": 5,
    "cherry3": 3,
    "big": 1.96,
    "small": 1.96
  },
  "originalOdds": {
    "bar": 100,
    "bar50": 50,
    "bar25": 25,
    "tripleSeven": 40,
    "tripleSeven3": 3,
    "star": 30,
    "star3": 3,
    "watermelon": 20,
    "watermelon3": 3,
    "bell": 20,
    "bell3": 3,
    "lemon": 15,
    "lemon3": 3,
    "orange": 10,
    "orange3": 3,
    "cherry": 5,
    "cherry3": 3,
    "big": 1.96,
    "small": 1.96
  },
  "enableFreeBet": false
};

const GameConfigsL2 =  {
  "_id": "63be8db65676040001076c63",
  "groupId": "61765beed2b6510001f18bd6",
  "minBet": 10,
  "maxBet": 40000,
  "maxBetPerChoices": {
    "bar": 40000,
    "tripleSeven": 40000,
    "star": 40000,
    "watermelon": 40000,
    "bell": 40000,
    "lemon": 40000,
    "orange": 40000,
    "cherry": 40000,
    "big": 40000,
    "small": 40000
  },
  "chips": [
    "1",
    "10",
    "50",
    "100",
    "200",
    "1000",
    "2000"
  ],
  "stakeLevels": [],
  "odds": {
    "bar": 100,
    "bar50": 50,
    "bar25": 25,
    "tripleSeven": 40,
    "tripleSeven3": 3,
    "star": 30,
    "star3": 3,
    "watermelon": 20,
    "watermelon3": 3,
    "bell": 20,
    "bell3": 3,
    "lemon": 15,
    "lemon3": 3,
    "orange": 10,
    "orange3": 3,
    "cherry": 5,
    "cherry3": 3,
    "big": 1.96,
    "small": 1.96
  },
  "originalOdds": {
    "bar": 100,
    "bar50": 50,
    "bar25": 25,
    "tripleSeven": 40,
    "tripleSeven3": 3,
    "star": 30,
    "star3": 3,
    "watermelon": 20,
    "watermelon3": 3,
    "bell": 20,
    "bell3": 3,
    "lemon": 15,
    "lemon3": 3,
    "orange": 10,
    "orange3": 3,
    "cherry": 5,
    "cherry3": 3,
    "big": 1.96,
    "small": 1.96
  },
  "enableFreeBet": false
};

const gameId = 59;

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
