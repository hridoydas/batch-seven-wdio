const checkoutLocators = require("./checkoutLocators");
const utility = require("../../utilities/utility");

class CheckoutActions {
  async getSubTotalAmount() {
    const subTotal = await checkoutLocators.subTotal.getText();
    const subTotalInNumber = await utility.convertTextToNumber(subTotal);
    return subTotalInNumber;
  }

  async getGrandTotalAmount() {
    const grandTotal = await checkoutLocators.grandTotal.getText();
    const grandTotalInNumber = await utility.convertTextToNumber(grandTotal);
    return grandTotalInNumber;
  }

  async clickOnCheckoutButton() {
    await checkoutLocators.checkoutButton.click();
  }
}

module.exports = new CheckoutActions();
