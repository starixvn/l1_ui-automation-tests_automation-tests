import { test } from "@playwright/test"
import { error } from "console"
import { writeFile } from "fs" // Import the writeFile function from fs
import { createWorker } from "tesseract.js";

const lobbyDomain = "VendorGame/OpenSabaClub?GameID="

const PRODLocator = {
  openLoginFormbtn : "//div[@class='header-option']//a[2]",
  usernameInput : "id=username",
  passwordInput : "id=password",
  submitLoginbtn : "//div[@class='login-form__item']//span[text()='Đăng nhập']",
}

const L2UATLocator = {
  usernameInput : "id=username",
  passwordInput : "id=password",
  submitLoginbtn : "//*[@title='Login']]",
  username : "TestSep2743",
  password : "1234aa"
}

const AUTH_FILE = ".auth/user.json"
test.skip("authenticate_prod", async ({ page }) => {
  await page.goto("https://www.viva88.net/login888.aspx")
  const alertDialogSelector = "//div[@class='modal modal--alert']//div[1]/a"
  const alertDialogExists = await page.$(alertDialogSelector)
  if (alertDialogExists) {
    await page.click(alertDialogSelector)
  } else {
    console.log("Alert dialog not found within the timeout period.")
  }
  await page.click(PRODLocator.openLoginFormbtn)
  await page.fill(PRODLocator.usernameInput, "supertestte120201001")
  await page.fill(PRODLocator.passwordInput, "1234aa")
  await page.click(PRODLocator.submitLoginbtn)
  await page.waitForLoadState("domcontentloaded")
  await page.waitForTimeout(5000)
  let url =page.url()
  const domain = url.split("/");
  writeFile(".auth/membersiteurl.txt", JSON.stringify(`https://${domain[2]}`).replaceAll('"', ""),error)
  // await page.goto(`https://${domain[2]}/${lobbyDomain}1612`);
  // await page.waitForTimeout(10000)
  // await page.waitForLoadState();
  // console.log(page.url())
  // const ssoUrl = page.url().replace("gameId=1", `gameId=${gameId}`);
  // await page.goto(ssoUrl);
  // await page.waitForLoadState();
  // await page.waitForTimeout(60000)
  // writeFile(".auth/url.txt", JSON.stringify(ssoUrl).replaceAll('"', ""),error)
  await page.context().storageState({ path: AUTH_FILE })
  // await page.waitForTimeout(10000)


})

test("authenticate_uat", async ({ page }) => {
  await page.goto("http://qeo014.athena000.com/")
  await page.locator("//i[@class='icon-refresh']").click();
  await page.waitForTimeout(5000);
  const isSuccess = await loginWithCaptcha(page,  L2UATLocator.username, L2UATLocator.password);
  if (!isSuccess) {
      console.log("Retry Login");
      await page.locator("//i[@class='icon-refresh']").click();
      await page.waitForTimeout(5000);
      await loginWithCaptcha(page,  L2UATLocator.username, L2UATLocator.password);
  }
  console.log("Login Success");
  await page.waitForTimeout(15000);

  let url =page.url()
  const domain = url.split("/");
  writeFile(".auth/membersiteurl.txt", JSON.stringify(`https://${domain[2]}`).replaceAll('"', ""),error)
  await page.context().storageState({ path: AUTH_FILE })
})
 

const loginWithCaptcha = async (page: any, accountId: string, pwd: string) => {
  await page.locator(PRODLocator.usernameInput).waitFor({ state: "visible" });
  await page.fill(PRODLocator.usernameInput, accountId);
  await page.fill(PRODLocator.passwordInput, pwd);
  let capcha = await getCaptcha(page);
  console.log("capcha", capcha);
  await page.fill("#validation", capcha);
  await page.click(`//*[@data-tag="tabBtn"]`);
  await page.waitForTimeout(2000);
  const isFailedCaptcha = await page.isVisible('//*[@class="hint-absolute"]');
  if (isFailedCaptcha) {
      return false; // Login Failed
  } else {
      return true; // Login Success
  }
};

const getCaptcha = async (page: any) => {
  await page.screenshot({ path: "imgcapcha.png", clip: { x: 1114, y: 18, width: 35, height: 12 } });
  let capcha = await getTextLocator("imgcapcha.png");
  let retryCount = 0;
  while (capcha.length !== 4 && retryCount < 2) {
      await page.reload({ waitUntil: "domcontentloaded" });
      await page.waitForTimeout(5000);
      await page.screenshot({ path: "imgcapcha.png", clip: { x: 1114, y: 18, width: 35, height: 12 } });
      capcha = await getTextLocator("imgcapcha.png");
      retryCount++;
  }
  return capcha;
};

const getTextLocator = async (img: any, whitelist: string = "0123456789", lang: string = "eng") => {
  const worker = await createWorker();
  await worker.loadLanguage(lang);
  await worker.initialize(lang);
  await worker.setParameters({
      tessedit_char_whitelist: whitelist,
  });

  const {
      data: { text },
  } = await worker.recognize(img);
  await worker.terminate();
  return text.trim();
};