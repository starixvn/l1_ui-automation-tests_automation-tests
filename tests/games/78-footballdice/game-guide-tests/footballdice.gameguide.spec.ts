import { GameGuideBase } from "sc-automation-core/lib/game-components/guides/game-guide-base.spec";

const GameConfigsL1 = {
  "gameId": 78,
  "gameName": "footballdice",
  "enabled": true,
  "minBet": 1,
  "maxBet": 2000,
  "maxBetPerChoices": {
    "home": 2000,
    "away": 2000,
    "draw": 2000
  },
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
    "3000",
    "5000"
  ],
  "stakeLevels": [],
  "coinValues": [],
  "maxWinPerRound": 0,
  "odds": {
    "home": 1.96,
    "away": 1.96,
    "draw": 8,
    "draw12": 50
  },
  "originalOdds": {
    "home": 1.96,
    "away": 1.96,
    "draw": 8,
    "draw12": 50
  },
  "enableFreeBet": false
};

const GameConfigsL2 = { 
};

const gameId = 78;

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
