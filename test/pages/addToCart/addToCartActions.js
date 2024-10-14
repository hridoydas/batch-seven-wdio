const addToCartLocators = require("./addToCartLocators");
const utility = require("../../utilities/utility");
class AddToCartActions {
  async clickOnProductfromList(productName) {
    await addToCartLocators.productFromList(productName).click();
  }

  async selectProductSize() {
    await addToCartLocators.productSize.click();
    await browser.pause(3000);
  }

  async selectColor() {
    await addToCartLocators.productColor.click();
    await browser.pause(3000);
  }

  async enterProductQty(qty) {
    await addToCartLocators.inputQtyField.setValue(qty);
  }

  async clickOnAddToCartButton() {
    await addToCartLocators.buttonAddToCart.click();
  }

  async clickOnViewCartButton() {
    await addToCartLocators.buttonViewCartFromModal.click();
  }

  async getSingleProductPrice() {
    const productPrice = await addToCartLocators.priceFromProductPage.getText();
    const productPriceIntoNumber = await utility.convertTextToNumber(
      productPrice
    );
    return productPriceIntoNumber;
  }
}

module.exports = new AddToCartActions();
