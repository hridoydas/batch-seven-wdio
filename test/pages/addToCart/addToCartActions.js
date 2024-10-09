const addToCartLocators = require("./addToCartLocators");
class AddToCartActions {
    async clickOnProductfromList(productName){
        await addToCartLocators.productFromList(productName).click();
    }

    async selectProductSize(){
        await addToCartLocators.productSize.click();
        await browser.pause(3000)
    }

    async selectColor(){
        await addToCartLocators.productColor.click();
        await browser.pause(3000);
    }

    async enterProductQty(){
        await addToCartLocators.inputQtyField.setValue(2);
    }

    async clickOnAddToCartButton(){
        await addToCartLocators.buttonAddToCart.click();
    }

    async clickOnViewCartButton(){
        await addToCartLocators.buttonViewCartFromModal.click();
    }

}

module.exports = new AddToCartActions();
