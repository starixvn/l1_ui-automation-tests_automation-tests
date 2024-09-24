import { GameGuideBase } from "sc-automation-core/lib/game-components/guides/game-guide-base.spec";

const GameConfigsL1 = {"coinValues": [
    0.01,
    0.05,
    0.1,
    0.5
  ],
  "maxWinPerRound": 2000,
  "betLevels": [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
  ],
  "betMultiplier": 20,
  "odds": {
    "symbols": {
      "0": [
        {
          "from": 8,
          "to": 9,
          "odds": 5
        },
        {
          "from": 10,
          "to": 11,
          "odds": 15
        },
        {
          "from": 12,
          "to": 30,
          "odds": 40
        }
      ],
      "1": [
        {
          "from": 8,
          "to": 9,
          "odds": 8
        },
        {
          "from": 10,
          "to": 11,
          "odds": 18
        },
        {
          "from": 12,
          "to": 30,
          "odds": 80
        }
      ],
      "2": [
        {
          "from": 8,
          "to": 9,
          "odds": 10
        },
        {
          "from": 10,
          "to": 11,
          "odds": 20
        },
        {
          "from": 12,
          "to": 30,
          "odds": 100
        }
      ],
      "3": [
        {
          "from": 8,
          "to": 9,
          "odds": 16
        },
        {
          "from": 10,
          "to": 11,
          "odds": 24
        },
        {
          "from": 12,
          "to": 30,
          "odds": 160
        }
      ],
      "4": [
        {
          "from": 8,
          "to": 9,
          "odds": 20
        },
        {
          "from": 10,
          "to": 11,
          "odds": 30
        },
        {
          "from": 12,
          "to": 30,
          "odds": 200
        }
      ],
      "5": [
        {
          "from": 8,
          "to": 9,
          "odds": 30
        },
        {
          "from": 10,
          "to": 11,
          "odds": 40
        },
        {
          "from": 12,
          "to": 30,
          "odds": 240
        }
      ],
      "6": [
        {
          "from": 8,
          "to": 9,
          "odds": 40
        },
        {
          "from": 10,
          "to": 11,
          "odds": 100
        },
        {
          "from": 12,
          "to": 30,
          "odds": 300
        }
      ],
      "7": [
        {
          "from": 8,
          "to": 9,
          "odds": 50
        },
        {
          "from": 10,
          "to": 11,
          "odds": 200
        },
        {
          "from": 12,
          "to": 30,
          "odds": 500
        }
      ],
      "8": [
        {
          "from": 8,
          "to": 9,
          "odds": 200
        },
        {
          "from": 10,
          "to": 11,
          "odds": 500
        },
        {
          "from": 12,
          "to": 30,
          "odds": 1000
        }
      ]
    },
    "freeSpins": {
      "initialOdds": [
        {
          "count": 4,
          "odds": 3
        },
        {
          "count": 5,
          "odds": 6
        },
        {
          "count": 6,
          "odds": 18
        }
      ],
      "additionalOdds": [
        {
          "count": 4,
          "odds": 5
        }
      ]
    }
  }
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

const gameId = 47;

const gameName = {
  vi: "Đảo Châu Báu&c=0",
  en: "Treasure Island&c=0",
  zh_tw: "Treasure Island&c=0",
  id: "Treasure Island&c=0",
  th: "Treasure Island&c=0",
  zh_cn: "Treasure Island&c=0",
};
const gameguideBase =
  process.env.npm_config_project === "l2"
    ? new GameGuideBase(GameConfigsL2, gameId, gameName, __filename)
    : new GameGuideBase(GameConfigsL1, gameId, gameName, __filename);
gameguideBase.start();
