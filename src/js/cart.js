import { getLocalStorage, updateCartBadge } from "./utils.mjs";

function renderCartContents() {
  const cartItems = getLocalStorage("so-cart") || [];
  const htmlItems = cartItems.map((item) => cartItemTemplate(item));
  document.querySelector(".product-list").innerHTML = htmlItems.join("");

  const cartFooter = document.querySelector(".cart-footer");
  if (cartItems.length > 0){
    cartFooter.classList.remove("hide");
    const totalPrice = computeTotal(cartItems)
    const totalHTML = `<p class="cart-total">Total: $${totalPrice}</p>`;
    cartFooter.innerHTML = totalHTML;
  }
  updateCartBadge();
}

function cartItemTemplate(item) {
  const newItem = `<li class="cart-card divider">
  <a href="#" class="cart-card__image">
    <img
      src="${item.Images.PrimarySmall}"
      alt="${item.Name}"
    />
  </a>
  <a href="#">
    <h2 class="card__name">${item.Name}</h2>
  </a>
  <p class="cart-card__color">${item.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">qty: 1</p>
  <p class="cart-card__price">$${item.FinalPrice}</p>
</li>`;

  return newItem;
}

function computeTotal(item){
  let totalPrice = 0
  item.forEach((price) => {totalPrice += price.FinalPrice})
  return totalPrice
}

renderCartContents();
