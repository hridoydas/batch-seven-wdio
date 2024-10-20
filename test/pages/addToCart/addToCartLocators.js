class AddToCartLocators {
  productFromList(productName) {
    return $(`//a[contains(@href,'')]/span[contains(text(),'${productName}')]`);
  }

  productSize(num) {
    return $(`(//ul[contains(@class,'variant-option-list')]/li)[${num}]`);
  }

  get productColor() {
    return $("//a[@href='#' and contains(text(),'Black')]");
  }

  get inputQtyField() {
    return $("//input[@name='qty']");
  }

  get buttonAddToCart() {
    return $("//button[contains(.,'ADD TO CART')]");
  }

  get buttonViewCartFromModal() {
    return $("//a[@class='add-cart-popup-button']");
  }

  get priceFromProductPage() {
    return $("//span[@class='sale-price']");
  }
}

module.exports = new AddToCartLocators();
