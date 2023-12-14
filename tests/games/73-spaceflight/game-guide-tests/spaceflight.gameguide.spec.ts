import { GameGuideBase } from "sc-automation-core/lib/game-components/guides/game-guide-base.spec";

const GameConfigsL1 = {
  "_id": "6524dc794618713ceab49b0b",
  "groupId": "61765beed2b6510001f18bd6",
  "minBet": 1,
  "maxBet": 2000,
  "maxBetPerChoices": {},
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
  "odds": {},
  "originalOdds": {},
  "enableFreeBet": false,
  "maxMultiplier": 2000,
  "maxWinPerRound": 25
};

const GameConfigsL2 = {
};

const gameId = 73;

const gameName = {
  vi: "Spaceflight",
  en: "Spaceflight",
  zh_tw: "Spaceflight",
  id: "Spaceflight",
  th: "Spaceflight",
  zh_cn: "Spaceflight",
};

const gameguideBase =
  process.env.npm_config_project === "l2"
    ? new GameGuideBase(GameConfigsL2, gameId, gameName, __filename)
    : new GameGuideBase(GameConfigsL1, gameId, gameName, __filename);
gameguideBase.start();
