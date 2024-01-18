export default class ProductDetails {
  constructor(productId, dataSource) {
    this.productId = productId;
    this.product = {};
    this.dataSource = dataSource;
  }

  init() {
    // add to cart button event handler
    async function addToCartHandler(e) {
      const product = await dataSource.findProductById(e.target.dataset.id);
      addProductToCart(product);
    }

    // add listener to Add to Cart button
    document
      .getElementById("addToCart")
      .addEventListener("click", addToCartHandler);
  }

  addProductToCart(product) {
    const cartItems = getLocalStorage("so-cart") || [];
    cartItems.push(product);
    setLocalStorage("so-cart", cartItems);
  }

  renderProductDetails() {}
}
