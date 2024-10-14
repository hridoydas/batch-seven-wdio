const searchActions = require("../pages/search/searchActions");
const addToCartActions = require("../pages/addToCart/addToCartActions");
const checkoutActions = require("../pages/checkout/checkoutActions");
const utility = require("../utilities/utility");
const productName = "Nike react phantom run flyknit 2";

var productQty;
var singleProductPrice;
describe("Demo evershop site product purchase journey", () => {
  it("Should able to successfully search product", async () => {
    await searchActions.clickOnSearchIcon();
    await searchActions.enterSearchItemName(productName);
    await browser.keys("Enter");
  });

  it("Should able to successfully add product in the cart", async () => {
    await addToCartActions.clickOnProductfromList(productName);
    await addToCartActions.selectProductSize();
    await addToCartActions.selectColor();
    productQty = await utility.randomNumber(10, 1);
    await addToCartActions.enterProductQty(productQty);
    singleProductPrice = await addToCartActions.getSingleProductPrice();
    await addToCartActions.clickOnAddToCartButton();
    await addToCartActions.clickOnViewCartButton();
  });

  it("Should successfully verify total amount and grand total amount", async () => {
    const expectedTotalPrice = productQty * singleProductPrice;
    const actualSubTotal = await checkoutActions.getSubTotalAmount();
    const actualGrandTotal = await checkoutActions.getGrandTotalAmount();
    expect(expectedTotalPrice).toEqual(actualSubTotal);
    expect(expectedTotalPrice).toEqual(actualGrandTotal);
  });
});
