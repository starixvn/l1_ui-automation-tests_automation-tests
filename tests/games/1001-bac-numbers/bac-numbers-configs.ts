import { Components } from "sc-automation-core";

export const BacNumbersConfigs: Components.GameConfiguration = {
  id: 1001,
  name: "bacball1",
  durations: {
    wholeRound: 30,
    placingBets: 17,
    lockingBet: 3,
    shakeThePlateDuration: 10,
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
    local: "222276",
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
  gndatasetRER:{
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
  gndatasetTicket:{
    "operatorId": "ONEworksVGCash",
    "win_settle": {
      "//div[text()='Player']/following::div[1]/input": "9",
      "//div[text()='Banker']/following::div[1]/input": "6",
    },
    "win_expect": {
    "snapshot":{
      "//*[@id='game-ticket']/table[1]/tbody//td[3]": "win_ballresult.png",
      "//*[@id='game-ticket']/table[2]/tbody/tr[last()-1]": "win__totalbet.png",
      "//*[@id='game-ticket']/table[2]/tbody/tr[last()]": "win_winlost.png",
      "//table[2]/thead": "table2header.png",
      "//table[2]/tbody/tr[1]/td[2]": "win_betchoice.png",
      "//table[2]/tbody/tr[1]/td[4]": "win_stake.png",
      "//table[2]/tbody/tr[1]/td[5]": "win_total.png",
    }
  },
  "lose_settle": {
    "//div[text()='Player']/following::div[1]/input": "1",
    "//div[text()='Banker']/following::div[1]/input": "9",
  },
  "loose_expect": {
  "snapshot":{
    "//*[@id='game-ticket']/table[1]/tbody//td[3]": "loose_ballresult.png",
    "//*[@id='game-ticket']/table[2]/tbody/tr[last()-1]": "loose_totalbet.png",
    "//*[@id='game-ticket']/table[2]/tbody/tr[last()]": "loose_winlost.png",
    "//table[2]/thead": "table2header.png",
    "//table[2]/tbody/tr[1]/td[2]": "loose_betchoice.png",
    "//table[2]/tbody/tr[1]/td[4]": "loose_stake.png",
    "//table[2]/tbody/tr[1]/td[5]": "loose_total.png",
  }
},
"loose_multiple_choices_expect": {
  "snapshot":{
    "//*[@id='game-ticket']/table[1]/tbody//td[3]": "loose_mc_ballresult.png",
    "//*[@id='game-ticket']/table[2]/tbody/tr[last()-1]": "loose_mc_totalbet.png",
    "//*[@id='game-ticket']/table[2]/tbody/tr[last()]": "loose_mc_winlost.png",
    "//table[2]/thead": "table2header.png",
    "//table[2]/tbody/tr[1]/td[2]": "loose_mc1_betchoice.png",
    "//table[2]/tbody/tr[1]/td[4]": "loose_mc1_stake.png",
    "//table[2]/tbody/tr[1]/td[5]": "loose_mc1_total.png",
    "//table[2]/tbody/tr[2]/td[2]": "loose_mc2_betchoice.png",
    "//table[2]/tbody/tr[2]/td[4]": "loose_mc2_stake.png",
    "//table[2]/tbody/tr[2]/td[5]": "loose_mc2_total.png",
  }
},
}
}

