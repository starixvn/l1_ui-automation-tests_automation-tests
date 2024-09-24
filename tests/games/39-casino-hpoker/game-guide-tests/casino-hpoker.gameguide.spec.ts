import { GameGuideBase } from "sc-automation-core/lib/game-components/guides/game-guide-base.spec";

const GameConfigsL1 = {
  "_id": "620b1aec99025e0001ac5266",
  "groupId": "61765beed2b6510001f18bd6",
  "minBet": 1,
  "maxBet": 2000,
  "maxBetPerChoices": {
    "anteBet": 600,
    "aaBet": 200,
    "callBet": 1200
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
    "CallBet_callBet": 2,
    "AnteBet_highCards": 2,
    "AnteBet_onePair": 2,
    "AnteBet_twoPairs": 2,
    "AnteBet_threeKind": 2,
    "AnteBet_straight": 2,
    "AnteBet_flush": 3,
    "AnteBet_fullHouse": 4,
    "AnteBet_fourKind": 11,
    "AnteBet_straightFlush": 21,
    "AnteBet_royalFlush": 101,
    "AABet_pairAces": 8,
    "AABet_twoPairs": 8,
    "AABet_threeKind": 8,
    "AABet_straight": 8,
    "AABet_flush": 21,
    "AABet_fullHouse": 31,
    "AABet_fourKind": 41,
    "AABet_straightFlush": 51,
    "AABet_royalFlush": 101
  },
  "enableFreeBet": false
};

const GameConfigsL2 = {
  "_id": "620b1aec99025e0001ac5266",
  "groupId": "61765beed2b6510001f18bd6",
  "minBet": 10,
  "maxBet": 40000,
  "maxBetPerChoices": {
    "anteBet": 12000,
    "aaBet": 4000,
    "callBet": 24000
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
    "CallBet_callBet": 2,
    "AnteBet_highCards": 2,
    "AnteBet_onePair": 2,
    "AnteBet_twoPairs": 2,
    "AnteBet_threeKind": 2,
    "AnteBet_straight": 2,
    "AnteBet_flush": 3,
    "AnteBet_fullHouse": 4,
    "AnteBet_fourKind": 11,
    "AnteBet_straightFlush": 21,
    "AnteBet_royalFlush": 101,
    "AABet_pairAces": 8,
    "AABet_twoPairs": 8,
    "AABet_threeKind": 8,
    "AABet_straight": 8,
    "AABet_flush": 21,
    "AABet_fullHouse": 31,
    "AABet_fourKind": 41,
    "AABet_straightFlush": 51,
    "AABet_royalFlush": 101
  },
  "enableFreeBet": false
};

const gameId = 39;

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
