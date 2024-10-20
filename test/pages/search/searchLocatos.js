class SearchLocators {
  get searchIcon() {
    return $("//a[contains(@class,'search-icon')]");
  }

  get searchInputField() {
    return $("//input[@placeholder='Search']");
  }

  productList(number) {
    return $(`(//div[contains(@class,'product-name')])[${number}]`);
  }
}
module.exports = new SearchLocators();
