const searchLocators = require("./searchLocatos");

class SearchActions {
  async clickOnSearchIcon() {
    await searchLocators.searchIcon.click();
  }

  async enterSearchItemName(productName) {
    await searchLocators.searchInputField.setValue(productName);
  }

  async search(productName) {
    await this.clickOnSearchIcon();
    await this.enterSearchItemName(productName);
  }
}

module.exports = new SearchActions();
