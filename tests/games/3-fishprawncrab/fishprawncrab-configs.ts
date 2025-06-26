import { Components } from "sc-automation-core";

export const FPCConfigs: Components.GameConfiguration = {
  id: 3,
  name: "fishprawncrab",
  durations: {
    wholeRound: 40 * 1000,
    placingBets: 30 * 1000,
    lockingBet: 7 * 1000,
    shakeThePlateDuration: 3 * 1000,
  },
  choices: ["stag", "gourd", "rooster", "fish", "crab", "prawn"],
  hedgeBetGroups: [["fish", "crab"]],
  maxTimeout: 200 * 1000, // miliseconds,
  odds: {
    single: 2,
    double: 3.5,
    triple: 6,
  },
  betBoard: false,
  accounts: {
    local: "222223",
    local1: "222223",
    local2: "222223",
    local3: "222223",
  },
  productId: { l1: "1614", l2: 3804 },
};


export const Isconfigs = {
  gameIndex: 5,
  clickCount: 5,
};


export const AdminDataSet_local ={
  accountId: 222223,
  l1operatorId: "ONEworks1",
  l2operatorId: "ONEworksVGCash",
  mornitorlocator: "//*[@data-game-name='baucua']",
  isSettleNextRound: true,
  l1datasetRER:{
    "Expect_NoData": {
      totalAmount: 0,
      totalWin: 0,
      validBetAmount: 0,
      errorCode: "SB1001",
      errorDescription: "The game round does not exist."
    },
    "Expect_Win": {
      totalAmount: 1,
      totalWin: 2,
      validBetAmount: 1,
      errorCode: "0",
      errorDescription: null
    },
    "Expect_Lose": {
      totalAmount: 1,
      totalWin: 0,
      validBetAmount: 1,
      errorCode: "0",
      errorDescription: null
    },
  },
  l1datasetTicket:{
    "Settle_Win": {
      "#dice-0": "//div[@class='modal-content']/div/div[1]",
      "#dice-1": "//div[@class='modal-content']/div/div[2]",
      "#dice-2": "//div[@class='modal-content']/div/div[3]",
    },
    "Expect_Win": {
      "//*[@id='game-ticket']/table[1]/tbody//td[3]": "resultWin.png",
      "//*[@id='game-ticket']/table[2]": "detailWin.png",
    },
    "Settle_Lose": {
      "#dice-0": "//div[@class='modal-content']/div/div[4]",
      "#dice-1": "//div[@class='modal-content']/div/div[5]",
      "#dice-2": "//div[@class='modal-content']/div/div[6]",
    },
    "Expect_Lose": { 
      "//*[@id='game-ticket']/table[1]/tbody//td[3]": "resultLoss.png",
      "//*[@id='game-ticket']/table[2]": "detailLoss.png",}
  }
}