import { GameGuideBase } from "sc-automation-core/lib/game-components/guides/game-guide-base.spec";

const GameConfigsL1 = {
  "_id": "6226fb62d61d9f0001fde913",
  "groupId": "61765beed2b6510001f18bd6",
  "minBet": 1,
  "maxBet": 2000,
  "maxBetPerChoices": {
    "anteBet": 400,
    "callBet": 800,
    "turnBet": 400,
    "riverBet": 400
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
    "call": 2,
    "turn": 2,
    "river": 2,
    "AnteBet_highCard": 1,
    "AnteBet_onePair": 1,
    "AnteBet_twoPairs": 1,
    "AnteBet_threeKind": 1,
    "AnteBet_straight": 2,
    "AnteBet_flush": 2,
    "AnteBet_fullHouse": 2,
    "AnteBet_fourKind": 2,
    "AnteBet_straightFlush": 2,
    "AnteBet_royalFlush": 2
  },
  "enableFreeBet": false
};

const GameConfigsL2 = {
  "_id": "6226fb62d61d9f0001fde913",
  "groupId": "61765beed2b6510001f18bd6",
  "minBet": 1,
  "maxBet": 40000,
  "maxBetPerChoices": {
    "anteBet": 8000,
    "callBet": 16000,
    "turnBet": 8000,
    "riverBet": 8000
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
    "call": 2,
    "turn": 2,
    "river": 2,
    "AnteBet_highCard": 1,
    "AnteBet_onePair": 1,
    "AnteBet_twoPairs": 1,
    "AnteBet_threeKind": 1,
    "AnteBet_straight": 2,
    "AnteBet_flush": 2,
    "AnteBet_fullHouse": 2,
    "AnteBet_fourKind": 2,
    "AnteBet_straightFlush": 2,
    "AnteBet_royalFlush": 2
  },
  "enableFreeBet": false
};

const gameId = 42;

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
