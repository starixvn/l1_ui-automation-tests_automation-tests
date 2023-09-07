import { GameGuideBase } from "sc-automation-core/lib/game-components/guides/game-guide-base.spec";

const GameConfigsL1 = {
      "baseStakeLevels": [
        0.1,
        0.2,
        1
      ],
      "stakeLevels": [
        0.1,
        0.2,
        1
      ],
      "odds": {
        "0": {
          "2": 0,
          "3": 2,
          "4": 5,
          "5": 19
        },
        "1": {
          "2": 0,
          "3": 5,
          "4": 10,
          "5": 25
        },
        "2": {
          "2": 0,
          "3": 5,
          "4": 25,
          "5": 50
        },
        "3": {
          "2": 0,
          "3": 10,
          "4": 30,
          "5": 150
        },
        "4": {
          "2": 0,
          "3": 12,
          "4": 45,
          "5": 275
        },
        "5": {
          "2": 0,
          "3": 16,
          "4": 60,
          "5": 375
        },
        "6": {
          "2": 0,
          "3": 20,
          "4": 75,
          "5": 500
        },
        "7": {
          "2": 0,
          "3": 3,
          "4": 6,
          "5": 18
        },
        "8": {
          "2": 0,
          "3": 3,
          "4": 4,
          "5": 5
        },
        "9": {
          "2": 8,
          "3": 50,
          "4": 1000,
          "5": 8000
        },
        "10": {
          "2": 4,
          "3": 25,
          "4": 100,
          "5": 5000
        }
      },
      "jackpot": {
        "winningRatio": 0
      }
    };

const GameConfigsL2 = {
  "baseStakeLevels": [
    1,
    5,
    10
  ],
  "stakeLevels": [
    1,
    5,
    10
  ],
  "odds": {
    "0": {
      "2": 0,
      "3": 2,
      "4": 5,
      "5": 10
    },
    "1": {
      "2": 0,
      "3": 5,
      "4": 10,
      "5": 25
    },
    "2": {
      "2": 0,
      "3": 5,
      "4": 25,
      "5": 50
    },
    "3": {
      "2": 0,
      "3": 10,
      "4": 30,
      "5": 150
    },
    "4": {
      "2": 0,
      "3": 12,
      "4": 45,
      "5": 275
    },
    "5": {
      "2": 0,
      "3": 16,
      "4": 60,
      "5": 375
    },
    "6": {
      "2": 0,
      "3": 20,
      "4": 75,
      "5": 500
    },
    "7": {
      "2": 0,
      "3": 3,
      "4": 6,
      "5": 18
    },
    "8": {
      "2": 0,
      "3": 3,
      "4": 4,
      "5": 5
    },
    "9": {
      "2": 8,
      "3": 50,
      "4": 1000,
      "5": 8000
    },
    "10": {
      "2": 4,
      "3": 25,
      "4": 100,
      "5": 5000
    }
  },
  "jackpot": {
    "winningRatio": 0
  }
};

const gameId = 68; 

const gameName = {
  vi: "Nhiệm Vụ Bất Khả Thi",
  en: "MISSION IMPOSSIBLE",
  zh_tw: "MISSION IMPOSSIBLE",
  id: "MISSION IMPOSSIBLE",
  th: "MISSION IMPOSSIBLE",
  zh_cn: "MISSION IMPOSSIBLE",
};
const gameguideBase = process.env.npm_config_project === "l2" ? new GameGuideBase(GameConfigsL2, gameId, gameName, __filename) : new GameGuideBase(GameConfigsL1, gameId, gameName, __filename);
gameguideBase.start();

