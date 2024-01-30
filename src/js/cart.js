//import { getLocalStorage, setCartCount, getCartCount } from "./utils.mjs";

//function renderCartContents() {
//  const cartItems = getLocalStorage("so-cart") || [];
//  setCartCount(cartItems.length);
//  const htmlItems = cartItems.map((item) => cartItemTemplate(item));
//  document.querySelector(".product-list").innerHTML = htmlItems.join("");
//  document.querySelector(".cart-count").innerText = getCartCount().toString();
//}
//function cartItemTemplate(item) {
//  const newItem = `<li class="cart-card divider">
//    <a href="#" class="cart-card__image">
//     <img
//       src="${item.Image}"
//       alt="${item.Name}"
//      />
//    </a>
//   <a href="#">
//    <h2 class="card__name">${item.Name}</h2>
//    </a>
//    <p class="cart-card__color">${item.Colors[0].ColorName}</p>
//    <p class="cart-card__quantity">qty: 1</p>
//    <p class="cart-card__price">$${item.FinalPrice}</p>
//  </li>`;
  
//  return newItem;
//}
//renderCartContents();

import { loadHeaderFooter } from "./utils.mjs";
import ShoppingCart from "./ShoppingCart.mjs";

loadHeaderFooter();

const cart = new ShoppingCart("so-cart", ".product-list");
cart.renderCartContents();
cart.init();
if (cart.total > 0) {
  // show our checkout button and total if there are items in the cart.
  document.querySelector(".list-footer").classList.remove("hide");
}

