import { GameGuideBase } from "sc-automation-core/lib/game-components/guides/game-guide-base.spec";

const GameConfigsL1 = {
  "minBet": 1,
  "maxBet": 2000,
  "maxBetPerChoices": {
    "player": 2000,
    "banker": 2000,
    "tie": 2000,
    "even": 2000,
    "odd": 2000,
    "playerEven": 2000,
    "playerOdd": 2000,
    "playerRed3": 2000,
    "playerWhite3": 2000,
    "playerRed4": 500,
    "playerWhite4": 500,
    "bankerEven": 2000,
    "bankerOdd": 2000,
    "bankerRed3": 2000,
    "bankerWhite3": 2000,
    "bankerRed4": 500,
    "bankerWhite4": 500
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
    "5000"
  ],
  "stakeLevels": [],
  "odds": {
    "player": 2.6,
    "banker": 2.6,
    "tie": 3.5,
    "even": 1.96,
    "odd": 1.96,
    "playerEven": 1.96,
    "playerOdd": 1.96,
    "playerRed3": 3.75,
    "playerWhite3": 3.75,
    "playerRed4": 14.4,
    "playerWhite4": 14.4,
    "bankerEven": 1.96,
    "bankerOdd": 1.96,
    "bankerRed3": 3.75,
    "bankerWhite3": 3.75,
    "bankerRed4": 14.4,
    "bankerWhite4": 14.4
  },
  "originalOdds": {
    "player": 2.6,
    "banker": 2.6,
    "tie": 3.5,
    "even": 1.96,
    "odd": 1.96,
    "playerEven": 1.96,
    "playerOdd": 1.96,
    "playerRed3": 3.75,
    "playerWhite3": 3.75,
    "playerRed4": 14.4,
    "playerWhite4": 14.4,
    "bankerEven": 1.96,
    "bankerOdd": 1.96,
    "bankerRed3": 3.75,
    "bankerWhite3": 3.75,
    "bankerRed4": 14.4,
    "bankerWhite4": 14.4
  },
  "enableFreeBet": false
};

const GameConfigsL2 = {
  "minBet": 10,
  "maxBet": 40000,
  "maxBetPerChoices": {
    "player": 40000,
    "banker": 40000,
    "tie": 40000,
    "even": 40000,
    "odd": 40000,
    "playerEven": 40000,
    "playerOdd": 40000,
    "playerRed3": 20000,
    "playerWhite3": 20000,
    "playerRed4": 4000,
    "playerWhite4": 4000,
    "bankerEven": 40000,
    "bankerOdd": 40000,
    "bankerRed3": 20000,
    "bankerWhite3": 20000,
    "bankerRed4": 4000,
    "bankerWhite4": 4000
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
    "5000"
  ],
  "stakeLevels": [],
  "odds": {
    "player": 2.6,
    "banker": 2.6,
    "tie": 3.5,
    "even": 1.96,
    "odd": 1.96,
    "playerEven": 1.96,
    "playerOdd": 1.96,
    "playerRed3": 3.75,
    "playerWhite3": 3.75,
    "playerRed4": 14.4,
    "playerWhite4": 14.4,
    "bankerEven": 1.96,
    "bankerOdd": 1.96,
    "bankerRed3": 3.75,
    "bankerWhite3": 3.75,
    "bankerRed4": 14.4,
    "bankerWhite4": 14.4
  },
  "originalOdds": {
    "player": 2.6,
    "banker": 2.6,
    "tie": 3.5,
    "even": 1.96,
    "odd": 1.96,
    "playerEven": 1.96,
    "playerOdd": 1.96,
    "playerRed3": 3.75,
    "playerWhite3": 3.75,
    "playerRed4": 14.4,
    "playerWhite4": 14.4,
    "bankerEven": 1.96,
    "bankerOdd": 1.96,
    "bankerRed3": 3.75,
    "bankerWhite3": 3.75,
    "bankerRed4": 14.4,
    "bankerWhite4": 14.4
  },
  "enableFreeBet": false
};

const gameId = 28;

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
