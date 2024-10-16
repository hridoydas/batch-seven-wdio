const loginLocators = require("./loginLocators");

class LoginActions {
  async clickOnProfileIcon() {
    await loginLocators.profileIcon.click();
  }

  async enterEmail(email) {
    await loginLocators.loginEmailInput.setValue(email);
  }

  async enterPassword(password) {
    await loginLocators.loginPasswordInput.setValue(password);
  }

  async clickOnSubmitButton() {
    await loginLocators.buttonSignup.click();
  }

  async clickOnLogout() {
    await loginLocators.logutLink.click();
  }
}

module.exports = new LoginActions();
