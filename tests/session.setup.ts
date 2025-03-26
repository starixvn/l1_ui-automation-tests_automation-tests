import { test } from "@playwright/test"
import { error } from "console"
import { writeFile } from "fs" // Import the writeFile function from fs
const lobbyDomain = "VendorGame/OpenSabaClub?GameID="

const PRODLocator = {
  openLoginFormbtn : "//div[@class='header-option']//a[2]",
  usernameInput : "id=username",
  passwordInput : "id=password",
  submitLoginbtn : "//div[@class='login-form__item']//span[text()='Đăng nhập']",
}

const AUTH_FILE = ".auth/user.json"
test("authenticate", async ({ page }) => {
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
 
