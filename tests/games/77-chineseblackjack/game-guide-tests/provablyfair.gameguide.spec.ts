import { GameGuideBase } from "sc-automation-core/lib/game-components/guides/game-guide-base.spec";

const GameConfigsL1 = {
  "minBet": 1,
  "maxBet": 2000,
  "maxBetPerChoices": {},
  "chips": [
    "1",
    "5",
    "10",
    "20",
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
    "regular": 2,
    "banBan": 3,
    "banLuck": 2,
    "fiveCardTrick": 3
  },
  "enableFreeBet": false
};

const GameConfigsL2 = {
  "minBet": 10,
  "maxBet": 40000,
  "maxBetPerChoices": {},
  "chips": [
    "1",
    "5",
    "10",
    "20",
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
    "regular": 2,
    "banBan": 3,
    "banLuck": 2,
    "fiveCardTrick": 3
  },
  "enableFreeBet": false
};

const gameId = 77;

const gameName = {
  vi: "",
  en: "",
  zh_tw: "",
  id: "",
  th: "",
  zh_cn: ""
};

const gameguideBase =
  process.env.npm_config_project === "l2"
    ? new GameGuideBase(GameConfigsL2, gameId, gameName, __filename, "pf")
    : new GameGuideBase(GameConfigsL1, gameId, gameName, __filename, "pf");
gameguideBase.start();
