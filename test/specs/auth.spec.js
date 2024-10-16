const signupActions = require("../pages/signup/signupActions");
const loginActions = require("../pages/login/loginActions");
const utility = require("../utilities/utility");
var email = "";
var fullName = "";
var password = "";

describe("Demo evershop site product purchase journey", () => {
  it("Should able to successfully register", async () => {
    await loginActions.clickOnProfileIcon();
    await signupActions.clickOnCreateAccount();
    fullName = await utility.createRandomString(5);
    email = fullName + "@yopmail.com";
    password = fullName + "&*&*&0";
    await signupActions.enterFullName(fullName);
    await loginActions.enterEmail(email);
    await loginActions.enterPassword(password);
    await loginActions.clickOnSubmitButton();
    await browser.pause(5000);
  });

  it("Should able to successfully logout", async () => {
    await loginActions.clickOnProfileIcon();
    await loginActions.clickOnLogout();
    await browser.pause(5000);
  });

  it("Should able to successfully login", async () => {
    await loginActions.clickOnProfileIcon();
    await browser.pause(5000);
    await loginActions.enterEmail(email);
    await loginActions.enterPassword(password);
    await loginActions.clickOnSubmitButton();
  });
});
