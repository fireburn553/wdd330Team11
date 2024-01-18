export default class ProductDetails {
  constructor(productId, dataSource) {
    this.productId = productId;
    this.product = {};
    this.dataSource = dataSource;
  }

  async init() {
    this.product = await this.dataSource.findProductById(this.productId);
    this.renderProductDetails();
    // document
    //   .getElementById("addToCart")
    //   .addEventListener("click", this.addToCartHandler.bind(this));
  }

  // addProductToCart(product) {
  //   const cartItems = getLocalStorage("so-cart") || [];
  //   cartItems.push(product);
  //   setLocalStorage("so-cart", cartItems);
  // }

  renderProductDetails() {
    let parentElement = document.querySelector(".divider");

    let childTemplateElement = `<section class="product-detail"> <h3>${this.product.Brand.Name}</h3>
    <h2 class="divider">${this.product.NameWithoutBrand}</h2>
    <img
    class="divider"
    src="${this.product.Image}"
    alt="${this.product.NameWithoutBrand}"
    />
    <p class="product-card__price">$${this.product.FinalPrice}</p>
    <p class="product__color">${this.product.Colors[0].ColorName}</p>
    <p class="product__description">
    ${this.product.DescriptionHtmlSimple}
    </p>
    <div class="product-detail__add">
    <button id="addToCart" data-id="${this.product.Id}">Add to Cart</button>
    </div></section>`;

    parentElement.insertAdjacentHTML("afterBegin", childTemplateElement);
  }
}
