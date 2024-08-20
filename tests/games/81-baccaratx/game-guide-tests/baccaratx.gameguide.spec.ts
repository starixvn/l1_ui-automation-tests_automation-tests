import { GameGuideBase } from "sc-automation-core/lib/game-components/guides/game-guide-base.spec";

const GameConfigsL1 = {
  "gameName": "bac81",
  "enabled": true,
  "minBet": 1,
  "maxBet": 2000,
  "maxBetPerChoices": {
    "player": 2000,
    "banker": 2000,
    "playerPair": 2000,
    "bankerPair": 2000,
    "tie": 1000
  },
  "chips": [
    "1",
    "5",
    "10",
    "50",
    "100",
    "500",
    "1000",
    "2000",
    "3000",
    "10000",
    "20000",
    "200000"
  ],
  "stakeLevels": [],
  "coinValues": [],
  "maxWinPerRound": 25,
  "defaultCoinValue": 0,
  "odds": {
    "player": 2,
    "banker": 1.95,
    "playerPair": 12,
    "bankerPair": 12,
    "tie": 6
  },
  "originalOdds": {
    "player": 2,
    "banker": 1.95,
    "playerPair": 12,
    "bankerPair": 12,
    "tie": 6
  },
  "enableFreeBet": false,
  "extraFeeRatio": 0.2
};

const GameConfigsL2 =   {
  "gameId": 81,
  "gameName": "bac81",
  "enabled": true,
  "minBet": 10,
  "maxBet": 40000,
  "maxBetPerChoices": {
    "player": 40000,
    "banker": 40000,
    "playerPair": 40000,
    "bankerPair": 40000,
    "tie": 20000
  },
  "chips": [
    "1",
    "5",
    "10",
    "50",
    "100",
    "500",
    "1000",
    "2000",
    "3000",
    "10000",
    "20000",
    "200000"
  ],
  "stakeLevels": [],
  "coinValues": [],
  "maxWinPerRound": 25,
  "defaultCoinValue": 0,
  "odds": {
    "player": 2,
    "banker": 1.95,
    "playerPair": 12,
    "bankerPair": 12,
    "tie": 6
  },
  "originalOdds": {
    "player": 2,
    "banker": 1.95,
    "playerPair": 12,
    "bankerPair": 12,
    "tie": 6
  },
  "enableFreeBet": false,
  "extraFeeRatio": 0.2
};

const gameId = 81;

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
  const pfguideBase =
    process.env.npm_config_project === "l2"
      ? new GameGuideBase(GameConfigsL2, gameId, gameName, __filename, "pf")
      : new GameGuideBase(GameConfigsL1, gameId, gameName, __filename, "pf");
gameguideBase.start();
pfguideBase.start()

