import { getLocalStorage, loadHeaderFooter } from "./utils.mjs";
import ShoppingCart from "./ShoppingCart.mjs";

loadHeaderFooter();

// function renderCartContents() {
//   const cartItems = getLocalStorage("so-cart") || [];
//   const htmlItems = cartItems.map((item) => cartItemTemplate(item));
//   document.querySelector(".product-list").innerHTML = htmlItems.join("");

//   const cartFooter = document.querySelector(".cart-footer");
//   if (cartItems.length > 0){
//     cartFooter.classList.remove("hide");
//     const totalPrice = computeTotal(cartItems)
//     const totalHTML = `<p class="cart-total">Total: $${totalPrice}</p>`;
//     cartFooter.innerHTML = totalHTML;
//   }
//   updateCartBadge();
// }

const cart = new ShoppingCart("so-cart", ".product-list");
cart.init();

if (cart.total > 0) {
  document.querySelector(".list-footer").classList.remove("hide");
}
