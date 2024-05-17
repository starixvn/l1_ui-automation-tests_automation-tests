import { GameGuideBase } from "sc-automation-core/lib/game-components/guides/game-guide-base.spec";

const GameConfigsL1 = {
  "minBet": 1,
  "maxBet": 2000,
  "maxBetPerChoices": {
    "cup": 100,
    "mascot": 250,
    "hostCountry": 300,
    "franceShirt": 500,
    "englandShirt": 500,
    "ball": 500,
    "tickets": 1000,
    "shoes": 2000,
    "big": 2000,
    "small": 2000
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
    "cup": 100,
    "cup50": 50,
    "cup25": 25,
    "mascot": 40,
    "mascot3": 3,
    "hostCountry": 30,
    "hostCountry3": 3,
    "franceShirt": 20,
    "franceShirt3": 3,
    "englandShirt": 20,
    "englandShirt3": 3,
    "ball": 15,
    "ball3": 3,
    "tickets": 10,
    "tickets3": 3,
    "shoes": 5,
    "shoes3": 3,
    "big": 1.96,
    "small": 1.96
  },
  "originalOdds": {
    "cup": 100,
    "cup50": 50,
    "cup25": 25,
    "mascot": 40,
    "mascot3": 3,
    "hostCountry": 30,
    "hostCountry3": 3,
    "franceShirt": 20,
    "franceShirt3": 3,
    "englandShirt": 20,
    "englandShirt3": 3,
    "ball": 15,
    "ball3": 3,
    "tickets": 10,
    "tickets3": 3,
    "shoes": 5,
    "shoes3": 3,
    "big": 1.96,
    "small": 1.96
  },
  "enableFreeBet": false
};

const GameConfigsL2 =   {
  "minBet": 10,
  "maxBet": 40000,
  "maxBetPerChoices": {
    "cup": 100,
    "mascot": 250,
    "hostCountry": 300,
    "franceShirt": 500,
    "englandShirt": 500,
    "ball": 500,
    "tickets": 1000,
    "shoes": 2000,
    "big": 2000,
    "small": 2000
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
    "cup": 100,
    "cup50": 50,
    "cup25": 25,
    "mascot": 40,
    "mascot3": 3,
    "hostCountry": 30,
    "hostCountry3": 3,
    "franceShirt": 20,
    "franceShirt3": 3,
    "englandShirt": 20,
    "englandShirt3": 3,
    "ball": 15,
    "ball3": 3,
    "tickets": 10,
    "tickets3": 3,
    "shoes": 5,
    "shoes3": 3,
    "big": 1.96,
    "small": 1.96
  },
  "originalOdds": {
    "cup": 100,
    "cup50": 50,
    "cup25": 25,
    "mascot": 40,
    "mascot3": 3,
    "hostCountry": 30,
    "hostCountry3": 3,
    "franceShirt": 20,
    "franceShirt3": 3,
    "englandShirt": 20,
    "englandShirt3": 3,
    "ball": 15,
    "ball3": 3,
    "tickets": 10,
    "tickets3": 3,
    "shoes": 5,
    "shoes3": 3,
    "big": 1.96,
    "small": 1.96
  },
  "enableFreeBet": false
};

const gameId = 79;

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
