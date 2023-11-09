import { GameGuideBase } from "sc-automation-core/lib/game-components/guides/game-guide-base.spec";

const GameConfigsL1 = {
  "minBet": 10,
  "maxBet": 5000,
  "maxBetPerChoices": {
    "fish": 5000,
    "prawn": 5000,
    "crab": 5000,
    "stag": 5000,
    "gourd": 5000,
    "rooster": 5000,
    "anyTriple": 500,
    "mountain": 5000,
    "ocean": 5000
  },
  "chips": [
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
    "single": 2,
    "double": 3.5,
    "triple": 6,
    "anyTriple": 31,
    "mountain": 1.96,
    "ocean": 1.96
  },
  "originalOdds": {
    "single": 2,
    "double": 3.5,
    "triple": 6,
    "anyTriple": 31,
    "mountain": 1.96,
    "ocean": 1.96
  },
  "enableFreeBet": false
};

const GameConfigsL2 = {
  "minBet": 100,
  "maxBet": 40000,
  "maxBetPerChoices": {
    "fish": 40000,
    "prawn": 40000,
    "crab": 40000,
    "stag": 40000,
    "gourd": 40000,
    "rooster": 40000,
    "anyTriple": 2000,
    "mountain": 40000,
    "ocean": 40000
  },
  "chips": [
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
    "single": 2,
    "double": 3.5,
    "triple": 6,
    "anyTriple": 31,
    "mountain": 1.96,
    "ocean": 1.96
  },
  "originalOdds": {
    "single": 2,
    "double": 3.5,
    "triple": 6,
    "anyTriple": 31,
    "mountain": 1.96,
    "ocean": 1.96
  },
  "enableFreeBet": false
};;

const gameId = 26;

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
