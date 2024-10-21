class SignupLocators {
  get fullNameInputField() {
    return $("//input[@name='full']");
  }

  get createAccountLink() {
    return $("//a[contains(text(),'Create an account')]");
  }
}

module.exports = new SignupLocators();
