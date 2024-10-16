class SignupLocators {
  get fullNameInputField() {
    return $("//input[@name='full_name']");
  }

  get createAccountLink() {
    return $("//a[contains(text(),'Create an account')]");
  }
}

module.exports = new SignupLocators();
