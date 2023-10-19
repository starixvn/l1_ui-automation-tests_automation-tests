import { GameGuideBase } from "sc-automation-core/lib/game-components/guides/game-guide-base.spec";

const GameConfigsL1 = {
  _id: "64df4f168d5af5a6ac8cf82e",
  groupId: "61765beed2b6510001f18bd6",
  minBet: 1,
  maxBet: 2000,
  maxBetPerChoices: {
    dragon: 2000,
    tiger: 2000,
    tie: 500,
    redDragon: 1000,
    blackDragon: 1000,
    redTiger: 1000,
    blackTiger: 1000,
  },
  chips: ["1", "5", "10", "50", "100", "200", "500", "1000", "2000"],
  stakeLevels: [],
  odds: {
    dragon: 1.95,
    tiger: 1.95,
    tie: 1.9,
    redDragon: 1.65,
    blackDragon: 1.65,
    redTiger: 1.65,
    blackTiger: 1.65,
  },
  originalOdds: {
    dragon: 1.95,
    tiger: 1.95,
    tie: 1.9,
    redDragon: 1.65,
    blackDragon: 1.65,
    redTiger: 1.65,
    blackTiger: 1.65,
  },
  enableFreeBet: false,
};

const GameConfigsL2 = {
  _id: "64df4f168d5af5a6ac8cf82e",
  groupId: "61765beed2b6510001f18bd6",
  minBet: 1,
  maxBet: 2000,
  maxBetPerChoices: {
    dragon: 2000,
    tiger: 2000,
    tie: 500,
    redDragon: 1000,
    blackDragon: 1000,
    redTiger: 1000,
    blackTiger: 1000,
  },
  chips: ["1", "5", "10", "50", "100", "200", "500", "1000", "2000"],
  stakeLevels: [],
  odds: {
    dragon: 1.95,
    tiger: 1.95,
    tie: 1.9,
    redDragon: 1.65,
    blackDragon: 1.65,
    redTiger: 1.65,
    blackTiger: 1.65,
  },
  originalOdds: {
    dragon: 1.95,
    tiger: 1.95,
    tie: 1.9,
    redDragon: 1.65,
    blackDragon: 1.65,
    redTiger: 1.65,
    blackTiger: 1.65,
  },
  enableFreeBet: false,
};

const gameId = 67;

const gameName = {
  vi: "Đại Chiến Rồng Hổ",
  en: "Dragon Tiger Fight",
  zh_tw: "Dragon Tiger Fight",
  id: "Dragon Tiger Fight",
  th: "Dragon Tiger Fight",
  zh_cn: "Dragon Tiger Fight",
};
const gameguideBase =
  process.env.npm_config_project === "l2"
    ? new GameGuideBase(GameConfigsL2, gameId, gameName, __filename)
    : new GameGuideBase(GameConfigsL1, gameId, gameName, __filename);
gameguideBase.start();
