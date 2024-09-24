import { GameGuideBase } from "sc-automation-core/lib/game-components/guides/game-guide-base.spec";

const GameConfigsL1 = {
  "_id": "63dc8b3c25cae50001401c89",
  "groupId": "61765beed2b6510001f18bd6",
  "minBet": 1,
  "maxBet": 2000,
  "maxBetPerChoices": {
    "dragon": 2000,
    "phoenix": 2000,
    "pair8Plus": 1000,
    "straight": 500,
    "flush": 500,
    "straightFlush": 50,
    "threeOfAKind": 50
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
    "dragon": 1.96,
    "phoenix": 1.96,
    "pair8Plus": 3,
    "straight": 8,
    "flush": 9,
    "straightFlush": 101,
    "threeOfAKind": 121
  },
  "originalOdds": {
    "dragon": 1.96,
    "phoenix": 1.96,
    "pair8Plus": 3,
    "straight": 8,
    "flush": 9,
    "straightFlush": 101,
    "threeOfAKind": 121
  },
  "enableFreeBet": false
};

const GameConfigsL2 =  {
  "_id": "63dc8b3c25cae50001401c89",
  "groupId": "61765beed2b6510001f18bd6",
  "minBet": 10,
  "maxBet": 40000,
  "maxBetPerChoices": {
    "dragon": 40000,
    "phoenix": 40000,
    "pair8Plus": 20000,
    "straight": 5000,
    "flush": 5000,
    "straightFlush": 500,
    "threeOfAKind": 500
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
    "dragon": 1.96,
    "phoenix": 1.96,
    "pair8Plus": 3,
    "straight": 8,
    "flush": 9,
    "straightFlush": 101,
    "threeOfAKind": 121
  },
  "originalOdds": {
    "dragon": 1.96,
    "phoenix": 1.96,
    "pair8Plus": 3,
    "straight": 8,
    "flush": 9,
    "straightFlush": 101,
    "threeOfAKind": 121
  },
  "enableFreeBet": false
};;

const gameId = 61;

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
