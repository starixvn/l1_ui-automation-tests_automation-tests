import { Components } from "sc-automation-core";

export const BacNumbersConfigs: Components.GameConfiguration = {
  id: 1001,
  name: "bacball",
  durations: {
    wholeRound: 28,
    placingBets: 20,
    lockingBet: 3,
    shakeThePlateDuration: 0,
  },
  choices: ["player", "banker", "tie", "drawId"],
  hedgeBetGroups: ["player", "banker"],
  maxTimeout: 150 * 1000, // miliseconds,
  odds: {
    player: 1.64,
    banker: 1.64,
    tie: 60,
  },
  accounts: {
    local: "222275",
    local1: "222275",
    local2: "222275",
    local3: "222275"
  },
  productId: "1001",
};

export const AdminDataSet_local ={
  settleDomain: process.env.npm_config_project+'-proxy',
  settlePath: "SetSlotResult",
  accountId: 222275,
  l1datasetRER:{
    "expect_archived": {
      totalAmount: 0,
      totalWin: 0,
      validBetAmount: 0,
      errorCode: "SB1001",
      errorDescription: "The game round does not exist."
    },
    "settle_win": `GameName=dragonball&Nickname=Justice25688&Results=2%2C1%2C1%2C5%2C3%2C6%2C5%2C5%2C7%2C8%2C5%2C5%2C8%2C5%2C4&__RequestVerificationToken=CfDJ8N2yhruW4C1NlDzg4XGsl25_EgsG7-RGHmAe0doMKgxlShEDobcMnj4CymdMeBub9CcT_xrjaC_IrUh4zpSByeqad1j9Xto_0aQFgyiYMF4b3rMv4U2sZgleQinoCdqu66Bb79c0yj83MhPOg0PiJRQ&X-Requested-With=XMLHttpRequest`,
    "expect_win": {
      totalAmount: 1,
      totalWin: 16,
      validBetAmount: 1,
      errorCode: "0",
      errorDescription: null
    },
    "settle_loose": `GameName=dragonball&Nickname=Justice25688&Results=3%2C1%2C3%2C5%2C3%2C6%2C4%2C5%2C7%2C8%2C2%2C5%2C8%2C5%2C4&__RequestVerificationToken=CfDJ8N2yhruW4C1NlDzg4XGsl27LFQMNoi7twvokdO7jr07-DM_D0hr91se_CRAQQDDKHiI7DohMXz_L2YYx4LA4ZyxR4-2_Vxy_Ty3UuKQh1yEQKIPpMqjgPvUje9Ckoe74kWwW291wf19woK8-2KMaWPA&X-Requested-With=XMLHttpRequest`,
    "expect_loose": {
      totalAmount: 1,
      totalWin: 0,
      validBetAmount: 1,
      errorCode: "0",
      errorDescription: null
    },
    "settle_freespin": `GameName=dragonball&Nickname=Justice25688&Results=6%2C7%2C1%2C3%2C5%2C4%2C2%2C7%2C8%2C6%2C7%2C1%2C6%2C4%2C2&__RequestVerificationToken=CfDJ8N2yhruW4C1NlDzg4XGsl25_EgsG7-RGHmAe0doMKgxlShEDobcMnj4CymdMeBub9CcT_xrjaC_IrUh4zpSByeqad1j9Xto_0aQFgyiYMF4b3rMv4U2sZgleQinoCdqu66Bb79c0yj83MhPOg0PiJRQ&X-Requested-With=XMLHttpRequest`,
    "expect_freespin": {
      totalAmount: 1,
      totalWin: 0,
      validBetAmount: 1,
      errorCode: "0",
      errorDescription: null
    },
    "expect_freespinRound": {
      totalAmount: 0,
      totalWin: 0,
      validBetAmount: 0,
      errorCode: "0",
      errorDescription: null
    },
    "settle_bonus": `GameName=dragonball&Nickname=Justice25688&Results=1%2C8%2C6%2C3%2C5%2C4%2C2%2C8%2C8%2C6%2C8%2C1%2C6%2C4%2C2&__RequestVerificationToken=CfDJ8N2yhruW4C1NlDzg4XGsl25_EgsG7-RGHmAe0doMKgxlShEDobcMnj4CymdMeBub9CcT_xrjaC_IrUh4zpSByeqad1j9Xto_0aQFgyiYMF4b3rMv4U2sZgleQinoCdqu66Bb79c0yj83MhPOg0PiJRQ&X-Requested-With=XMLHttpRequest`,
    "expect_bonus": {
      totalAmount: 1,
      totalWin: 0,
      validBetAmount: 1,
      errorCode: "0",
      errorDescription: null
    },

  },
  l1datasetTicket:{
    "settle_win": `GameName=dragonball&Nickname=Justice25688&Results=2%2C1%2C1%2C5%2C3%2C6%2C5%2C5%2C7%2C8%2C5%2C5%2C8%2C5%2C4&__RequestVerificationToken=CfDJ8N2yhruW4C1NlDzg4XGsl25_EgsG7-RGHmAe0doMKgxlShEDobcMnj4CymdMeBub9CcT_xrjaC_IrUh4zpSByeqad1j9Xto_0aQFgyiYMF4b3rMv4U2sZgleQinoCdqu66Bb79c0yj83MhPOg0PiJRQ&X-Requested-With=XMLHttpRequest`,
    "expect_win": { "snapshot":{
      "//*/div[@id='game-ticket']/table[1]/tbody/tr/td[3]": "l1boardresult_win.png",
      "//*/div[@id='game-ticket']/table[2]": "l1betresult_win.png",
    }},
    "settle_loose": `GameName=dragonball&Nickname=Justice25688&Results=3%2C1%2C3%2C5%2C3%2C6%2C4%2C5%2C7%2C8%2C2%2C5%2C8%2C5%2C4&__RequestVerificationToken=CfDJ8N2yhruW4C1NlDzg4XGsl27LFQMNoi7twvokdO7jr07-DM_D0hr91se_CRAQQDDKHiI7DohMXz_L2YYx4LA4ZyxR4-2_Vxy_Ty3UuKQh1yEQKIPpMqjgPvUje9Ckoe74kWwW291wf19woK8-2KMaWPA&X-Requested-With=XMLHttpRequest`,
    "expect_loose": { "snapshot":{
      "//*/div[@id='game-ticket']/table[1]/tbody/tr/td[3]": "l1boardresult_loose.png",
      "//*/div[@id='game-ticket']/table[2]": "l1betresult_loose.png",
    }},
    "settle_freespin": `GameName=dragonball&Nickname=Justice25688&Results=6%2C7%2C1%2C3%2C5%2C4%2C2%2C7%2C8%2C6%2C7%2C1%2C6%2C4%2C2&__RequestVerificationToken=CfDJ8N2yhruW4C1NlDzg4XGsl25_EgsG7-RGHmAe0doMKgxlShEDobcMnj4CymdMeBub9CcT_xrjaC_IrUh4zpSByeqad1j9Xto_0aQFgyiYMF4b3rMv4U2sZgleQinoCdqu66Bb79c0yj83MhPOg0PiJRQ&X-Requested-With=XMLHttpRequest`,
    "expect_freespin": { "snapshot":{
      "//*/div[@id='game-ticket']/table[1]/tbody/tr/td[3]": "l1boardresult_freespin.png",
      "//*/div[@id='game-ticket']/table[2]": "l1betresult_freespin.png",}
  },
  "settle_bonus": `GameName=dragonball&Nickname=Justice25688&Results=1%2C8%2C6%2C3%2C5%2C4%2C2%2C8%2C8%2C6%2C8%2C1%2C6%2C4%2C2&__RequestVerificationToken=CfDJ8N2yhruW4C1NlDzg4XGsl25_EgsG7-RGHmAe0doMKgxlShEDobcMnj4CymdMeBub9CcT_xrjaC_IrUh4zpSByeqad1j9Xto_0aQFgyiYMF4b3rMv4U2sZgleQinoCdqu66Bb79c0yj83MhPOg0PiJRQ&X-Requested-With=XMLHttpRequest`,
  "expect_bonus": { "snapshot":{
    "//*/div[@id='game-ticket']/table[1]/tbody/tr/td[3]": "l1boardresult_bonus.png",
    "//*/div[@id='game-ticket']/table[2]/tbody/tr[1]/td[2]": "l1symbol_bonus.png",
    "//*/div[@id='game-ticket']/table[2]/tbody/tr[2]/td[1]": "lines_bonus.png",
  },
}
},
  l2datasetTicket:{
  "settle_win": `GameName=dragonball&Nickname=Earthworm42569&Results=2%2C1%2C1%2C5%2C3%2C6%2C5%2C5%2C7%2C8%2C5%2C5%2C8%2C5%2C4&__RequestVerificationToken=CfDJ8N2yhruW4C1NlDzg4XGsl25_EgsG7-RGHmAe0doMKgxlShEDobcMnj4CymdMeBub9CcT_xrjaC_IrUh4zpSByeqad1j9Xto_0aQFgyiYMF4b3rMv4U2sZgleQinoCdqu66Bb79c0yj83MhPOg0PiJRQ&X-Requested-With=XMLHttpRequest`,
  "expect_win": { "snapshot":{
    "//*/div[@id='game-ticket']/table[1]/tbody/tr/td[3]": "l2boardresult_win.png",
    "//*/div[@id='game-ticket']/table[2]": "betresult_win.png",
  }},
  "settle_loose": `GameName=dragonball&Nickname=Earthworm42569&Results=3%2C1%2C3%2C5%2C3%2C6%2C4%2C5%2C7%2C8%2C2%2C5%2C8%2C5%2C4&__RequestVerificationToken=CfDJ8N2yhruW4C1NlDzg4XGsl27LFQMNoi7twvokdO7jr07-DM_D0hr91se_CRAQQDDKHiI7DohMXz_L2YYx4LA4ZyxR4-2_Vxy_Ty3UuKQh1yEQKIPpMqjgPvUje9Ckoe74kWwW291wf19woK8-2KMaWPA&X-Requested-With=XMLHttpRequest`,
  "expect_loose": { "snapshot":{
    "//*/div[@id='game-ticket']/table[1]/tbody/tr/td[3]": "l2boardresult_loose.png",
    "//*/div[@id='game-ticket']/table[2]": "l2betresult_loose.png",
  }},
  "settle_freespin": `GameName=dragonball&Nickname=Earthworm42569&Results=6%2C7%2C1%2C3%2C5%2C4%2C2%2C7%2C8%2C6%2C7%2C1%2C6%2C4%2C2&__RequestVerificationToken=CfDJ8N2yhruW4C1NlDzg4XGsl25_EgsG7-RGHmAe0doMKgxlShEDobcMnj4CymdMeBub9CcT_xrjaC_IrUh4zpSByeqad1j9Xto_0aQFgyiYMF4b3rMv4U2sZgleQinoCdqu66Bb79c0yj83MhPOg0PiJRQ&X-Requested-With=XMLHttpRequest`,
  "expect_freespin": { "snapshot":{
    "//*/div[@id='game-ticket']/table[1]/tbody/tr/td[3]": "l2boardresult_freespin.png",
    "//*/div[@id='game-ticket']/table[2]": "l2betresult_freespin.png",}
},
"settle_bonus": `GameName=dragonball&Nickname=Earthworm42569&Results=1%2C8%2C6%2C3%2C5%2C4%2C2%2C8%2C8%2C6%2C8%2C1%2C6%2C4%2C2&__RequestVerificationToken=CfDJ8N2yhruW4C1NlDzg4XGsl25_EgsG7-RGHmAe0doMKgxlShEDobcMnj4CymdMeBub9CcT_xrjaC_IrUh4zpSByeqad1j9Xto_0aQFgyiYMF4b3rMv4U2sZgleQinoCdqu66Bb79c0yj83MhPOg0PiJRQ&X-Requested-With=XMLHttpRequest`,
"expect_bonus": { "snapshot":{
  "//*/div[@id='game-ticket']/table[1]/tbody/tr/td[3]": "l2boardresult_bonus.png",
  "//*/div[@id='game-ticket']/table[2]/tbody/tr[1]/td[2]": "l2symbol_bonus.png",
  "//*/div[@id='game-ticket']/table[2]/tbody/tr[2]/td[1]": "l2lines_bonus.png",
},
}
}

}
