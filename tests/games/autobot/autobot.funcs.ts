const https = require("https");
const fs = require("fs");
import { expect, request } from "@playwright/test";
const env = process.env.npm_config_env ?? "l1";
const project = process.env.npm_config_project ?? "l1";
const domain = {
  l1: {
    l0: "http://admin.lumigame.com/",
    l1: "http://l1-admin1.lumigame.com/Authentication/UserLogin",
  },
  l2: {
    l0: "http://l2-admin.lumigame.com",
    l1: "https://l2-admin1.lumigame.com/Authentication/UserLogin",
  },
};

export const loginAdmin = async (page: any) => {
  await page.goto(domain[project][env]);
  await page.fill("id=UserName", "admauto");
  await page.fill("id=Password", "admauto");
  await page.click("text=Login");
  await page.waitForLoadState();
  const url = await page.url();
  await page.goto(url + "BetDetails");
};

export const filterBetDetails = async (
  context: any,
  page: any,
  gameType: any,
  roundId: any,
  playerId: any
) => {
  await page.locator("id=GameType").selectOption(gameType.toString());
  await page.fill("id=RoundId", roundId.toString());
  await page.fill("id=PlayerId", playerId.toString());
  const [newtab] = await Promise.all([
    context.waitForEvent("page"),
    await page.click("input[value='Get Bet Details']"),
  ]);
  return newtab;
};

function sendPostRequest(options, postData) {
  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      let responseData = "";

      res.on("data", (chunk) => {
        responseData += chunk;
      });

      res.on("end", () => {
        resolve(responseData);
      });
    });

    req.on("error", (error) => {
      reject(error);
    });

    req.write(postData);
    req.end();
  });
}

export const setupBetData = async (data: object, gameName: string) => {
  const hostname =
    project == "l1" ? "l1-proxy1.lumigame.com" : "l2-proxy.lumigame.com";
  const postData = JSON.stringify(data);
  const options = {
    hostname: hostname,
    path: `/autobot/bet-by-batch?game=${gameName}`,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Content-Length": Buffer.byteLength(postData),
    },
  };

  let returnData = await sendPostRequest(options, postData);
  return JSON.parse(returnData as string).result;
};

export const getRetrieveEndRound = async (
  page: any,
  gameType: any,
  roundId: any,
  playerId: any
) => {
  let purl = await page.url();
  purl = purl.replace("BetDetails", "RetrieveEndRound/Index");
  const inItRequest = {
    url: purl,
    body: `OperatorId=ONEworksVGCash&GameType=${gameType}&RoundId=${roundId}&PlayerId=${playerId}&Language=en-US&SiteId=4100300`,
  };
  let response = await page.evaluate(async (inItRequest) => {
    const requestOptions = {
      method: "POST",
      body: inItRequest.body,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      },
    };
    const response = await fetch(inItRequest.url, requestOptions);
    const responseData = await response.text();
    return responseData;
  }, inItRequest);
  let content = await JSON.parse(response);
  return JSON.parse(content).result;
};

export const verifyRetrieveEndRound = async (
  page: any,
  gameType: string,
  input: object,
  expectdata: object
) => {
  const tcs = Object.keys(expectdata);
 
  let getData = {};
  for (const iterator of tcs) {
    let RetrieveEndRound = await getRetrieveEndRound(
      page,
      gameType,
      input[iterator].roundId,
      input[iterator].playerId
    );
    getData[iterator] = RetrieveEndRound;
  }

  let data = JSON.stringify(getData);
  fs.writeFileSync("RER2.json", data);
  for (const i of tcs) {      
    await expect.soft(getData[i].totalAmount,`verify total amount ${i}, ${getData[i].totalAmount}`).toBe(expectdata[i].totalAmount);
    await expect.soft(getData[i].totalWin,`verify totalWin ${i}`).toBe(expectdata[i].totalWin);
    await expect.soft(getData[i].validBetAmount,`verify validBetAmount ${i}, ${getData[i].validBetAmount}`).toBe(expectdata[i].validBetAmount);
    await expect.soft(getData[i].errorCode).toBe(expectdata[i].errorCode);
    await expect.soft(getData[i].errorDescription).toBe(
      expectdata[i].errorDescription
    );
  }
};
