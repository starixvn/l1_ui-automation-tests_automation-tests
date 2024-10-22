import { Components } from "sc-automation-core";

export const KaraKrusConfigs: Components.GameConfiguration = {
  id: 96,
  name: "KaraKrus",
  durations: {
    wholeRound: 38 * 1000,
    placingBets: 20 * 1000,
    lockingBet: 3 * 1000,
    shakeThePlateDuration: 2 * 1000,
  },
  choices: ["kara", "krus", "head1", "head2", "head3", "tail3"],
  hedgeBetGroups: [["kara", "krus"]],
  maxTimeout: 150 * 1000, // miliseconds,
  odds: {
    kara: 1.96,
    krus: 1.96,
    head1: 2.5,
    head2: 2.5,
    head3: 7.5,
    tail3: 7.5,

  },
  accounts: {
    local: "222222",
    local1: "222222",
    local2: "222222",
    l2local2: "222222",
    local3: "222222",
    sit: "supertestsaba67",
    uat: "IT56Test789",
    prod: "supertestte120201003",
    l2uat: "TestSep2741",
    l2prod: "VNtest041",
  },
  productId: { l1: "1691", l2: "3883" },
}

export const AdminDataSet_local1 ={
  accountId: 222222,
  l1datasetRER:{
    "expect_running": {
      totalAmount: 0,
      totalWin: 0,
      validBetAmount: 0,
      errorCode: "SB1001",
      errorDescription: "The game round does not exist."
    },
    "expect_archive": {
      totalAmount: 0,
      totalWin: 0,
      validBetAmount: 0,
      errorCode: "SB1001",
      errorDescription: "The game round does not exist."
    },
    "expect_win": {
      totalAmount: 1,
      totalWin: 1.96,
      validBetAmount: 1,
      errorCode: "0",
      errorDescription: null
    },
    "settle_3red": {
      ".kara-krus_result__16iIR div:nth-child(1) img": ".modal-content div:nth-child(2) img",
      ".kara-krus_result__16iIR div:nth-child(2) img": ".modal-content div:nth-child(2) img",
      ".kara-krus_result__16iIR div:nth-child(3) img": ".modal-content div:nth-child(2) img",
    },
    "expect_lose": {
      totalAmount: 1,
      totalWin: 0,
      validBetAmount: 1,
      errorCode: "0",
      errorDescription: null
    },
    "expect_multiple_choices": {
      totalAmount: 5,
      totalWin: 7.5,
      validBetAmount: 5,
      errorCode: "0",
      errorDescription: null
    },
  },
  l1datasetTicket:{
   "settle_3red": {
      ".kara-krus_result__16iIR div:nth-child(1) img": ".modal-content div:nth-child(2) img",
      ".kara-krus_result__16iIR div:nth-child(2) img": ".modal-content div:nth-child(2) img",
      ".kara-krus_result__16iIR div:nth-child(3) img": ".modal-content div:nth-child(2) img",
    },
    "settle_3white": {
      ".kara-krus_result__16iIR div:nth-child(1) img": ".modal-content div:nth-child(1) img",
      ".kara-krus_result__16iIR div:nth-child(2) img": ".modal-content div:nth-child(1) img",
      ".kara-krus_result__16iIR div:nth-child(3) img": ".modal-content div:nth-child(1) img",
    },
    "expect_win": { "snapshot":{
      ".sedie3-result": "Result3Red.png",
      "//*[@id='game-ticket']/table[2]/tbody/tr[1]/td[2]": "Red.png",
      "//*[@id='game-ticket']/table[1]/thead/tr": "RoundResultHeader.png",
      "//*[@id='game-ticket']/table[2]/tbody/tr[2]":"Total.png",
      "//*[@id='game-ticket']/table[2]/tbody/tr[3]":"WinLossWin.png",

    }
    },
    "expect_lose": { "snapshot":{
      "//*[@id='game-ticket']/table[2]/tbody/tr[1]/td[2]": "White.png",
      "//*[@id='game-ticket']/table[1]/thead/tr": "RoundResultHeader.png",
      "//*[@id='game-ticket']/table[2]/tbody/tr[3]":"WinLossLose.png",

    }
    },
    "expect_multiple_choices": { "snapshot":{
      ".sedie3-result": "Result3White.png",
      "//*[@id='game-ticket']/table[1]/thead/tr": "RoundResultHeader.png",
      "//*[@id='game-ticket']/table[2]/tbody/tr[6]":"TotalMultiple.png",
      "//*[@id='game-ticket']/table[2]/tbody/tr[7]":"WinLossMultiple.png",
      "//*[@id='game-ticket']/table[2]/tbody/tr[1]/td[2]": "3White.png",
      "//*[@id='game-ticket']/table[2]/tbody/tr[2]/td[2]": "3Red.png",
      "//*[@id='game-ticket']/table[2]/tbody/tr[3]/td[2]": "2Red.png",
      "//*[@id='game-ticket']/table[2]/tbody/tr[4]/td[2]": "1Red.png",

    }
    },
  }
}

export const AdminDataSet_sit ={
  accountId: 222222,
  gameType: 95,
  datasetRER:{
    "expect_running": {
      totalAmount: 0,
      totalWin: 0,
      validBetAmount: 0,
      errorCode: "SB1001",
      errorDescription: "The game round does not exist."
    },
    "expect_archive": {
      totalAmount: 0,
      totalWin: 0,
      validBetAmount: 0,
      errorCode: "SB1001",
      errorDescription: "The game round does not exist."
    },
    "expect_win": {
      totalAmount: 1,
      totalWin: 1.96,
      validBetAmount: 1,
      errorCode: "0",
      errorDescription: null
    },
    "settle_win": {
      "//*/div[contains(@class,'shake-the-plate_result')]/div[1]": "//*/div[@class='modal-content']//div[2]/img",
      "//*/div[contains(@class,'shake-the-plate_result')]/div[2]": "//*/div[@class='modal-content']//div[2]/img",
      "//*/div[contains(@class,'shake-the-plate_result')]/div[3]": "//*/div[@class='modal-content']//div[2]/img",
      "//*/div[contains(@class,'shake-the-plate_result')]/div[4]": "//*/div[@class='modal-content']//div[2]/img"
    },
    "TC4_settle": {
      "//*/div[contains(@class,'shake-the-plate_result')]/div[1]": "//*/div[@class='modal-content']//div[2]/img",
      "//*/div[contains(@class,'shake-the-plate_result')]/div[2]": "//*/div[@class='modal-content']//div[2]/img",
      "//*/div[contains(@class,'shake-the-plate_result')]/div[3]": "//*/div[@class='modal-content']//div[2]/img",
      "//*/div[contains(@class,'shake-the-plate_result')]/div[4]": "//*/div[@class='modal-content']//div[2]/img"
    },
    "TC4_expect": {
      totalAmount: 0,
      totalWin: 0,
      validBetAmount: 0,
      errorCode: "SB1001",
      errorDescription: "The game round does not exist."
    },
    "TC5_settle": {
      "//*/div[contains(@class,'shake-the-plate_result')]/div[1]": "//*/div[@class='modal-content']//div[2]/img",
      "//*/div[contains(@class,'shake-the-plate_result')]/div[2]": "//*/div[@class='modal-content']//div[1]/img",
      "//*/div[contains(@class,'shake-the-plate_result')]/div[3]": "//*/div[@class='modal-content']//div[1]/img",
      "//*/div[contains(@class,'shake-the-plate_result')]/div[4]": "//*/div[@class='modal-content']//div[1]/img"
    },
    "TC5_expect": {
      totalAmount: 1,
      totalWin: 0,
      validBetAmount: 1,
      errorCode: "0",
      errorDescription: null
    },
    "TC6_settle": {
      "//*/div[contains(@class,'shake-the-plate_result')]/div[1]": "//*/div[@class='modal-content']//div[2]/img",
      "//*/div[contains(@class,'shake-the-plate_result')]/div[2]": "//*/div[@class='modal-content']//div[1]/img",
      "//*/div[contains(@class,'shake-the-plate_result')]/div[3]": "//*/div[@class='modal-content']//div[1]/img",
      "//*/div[contains(@class,'shake-the-plate_result')]/div[4]": "//*/div[@class='modal-content']//div[1]/img"
    },
    "TC6_expect": {
      totalAmount: 2,
      totalWin: 0,
      validBetAmount: 2,
      errorCode: "0",
      errorDescription: null
    },
  },
  datasetTicket:{
    "settle_win": {
      "//*/div[contains(@class,'shake-the-plate_result')]/div[1]": "//*/div[@class='modal-content']//div[2]/img",
      "//*/div[contains(@class,'shake-the-plate_result')]/div[2]": "//*/div[@class='modal-content']//div[2]/img",
      "//*/div[contains(@class,'shake-the-plate_result')]/div[3]": "//*/div[@class='modal-content']//div[2]/img",
      "//*/div[contains(@class,'shake-the-plate_result')]/div[4]": "//*/div[@class='modal-content']//div[2]/img"
    },
    "expect_win": {
    "snapshot":{
      "//*[@id='game-ticket']/table[1]/tbody//td[3]": "4red.png",
      "//*[@id='game-ticket']/table[1]/tbody//td[4]": "even4red.png",
      "//*[@id='game-ticket']/table[2]": "betdetail.png",
    }
    }
  }
}
