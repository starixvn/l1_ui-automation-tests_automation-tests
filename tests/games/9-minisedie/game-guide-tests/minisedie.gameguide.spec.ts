import { GameGuideBase } from "sc-automation-core/lib/game-components/guides/game-guide-base.spec";

const GameConfigsL1 = {
  "minBet": 1,
  "maxBet": 4000,
  "maxBetPerChoices": {
    "even": 4000,
    "odd": 4000,
    "red3": 4000,
    "white3": 4000,
    "red4": 1000,
    "white4": 1000
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
    "20000"
  ],
  "stakeLevels": [],
  "odds": {
    "even": 1.96,
    "odd": 1.96,
    "red3": 3.75,
    "white3": 3.75,
    "red4": 14.4,
    "white4": 14.4
  },
  "originalOdds": {
    "even": 1.96,
    "odd": 1.96,
    "red3": 3.75,
    "white3": 3.75,
    "red4": 14.4,
    "white4": 14.4
  },
  "enableFreeBet": false,
  "boostedChoices": []
}
;

const GameConfigsL2 = {
  "minBet": 10,
  "maxBet": 40000,
  "maxBetPerChoices": {
    "even": 40000,
    "odd": 40000,
    "red3": 40000,
    "white3": 40000,
    "red4": 10000,
    "white4": 10000
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
    "20000"
  ],
  "stakeLevels": [],
  "odds": {
    "even": 1.96,
    "odd": 1.96,
    "red3": 3.75,
    "white3": 3.75,
    "red4": 14.4,
    "white4": 14.4
  },
  "originalOdds": {
    "even": 1.96,
    "odd": 1.96,
    "red3": 3.75,
    "white3": 3.75,
    "red4": 14.4,
    "white4": 14.4
  },
  "enableFreeBet": false,
  "boostedChoices": []
};

const gameId = 9;

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
