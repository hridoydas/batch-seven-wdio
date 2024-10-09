const searchActions = require("../pages/search/searchActions");
const addToCartActions = require("../pages/addToCart/addToCartActions");

const productName = "Nike react phantom run flyknit 2";
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
    await addToCartActions.enterProductQty();
    await addToCartActions.clickOnAddToCartButton();
    await addToCartActions.clickOnViewCartButton();
  });
});
