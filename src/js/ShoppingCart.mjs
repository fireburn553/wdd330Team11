import { getLocalStorage } from "./utils.mjs";

function cartItemTemplate(item) {
  const newItem = `<li class="cart-card divider">
  <a href="#" class="cart-card__image">
    <img
      src="${item.Image}"
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



export default class Shoppingcart {
  constructor(cartItems, listElement) {
    this.dataSource = cartItems;
    this.listElement = listElement;
  }

  async init() {
      const list = getLocalStorage(this.key);
      this.calculateListTotal(list);
      this.renderCartContents(list);
    }
    calculateListTotal(list) {
      const amounts = list.map((item) => item.FinalPrice);
      this.total = amounts.reduce((sum, item) => sum + item);
    }

  renderCartContents() {
    const cartItems = getLocalStorage(this.dataSource) || [];
    const htmlItems = cartItems.map((item) => cartItemTemplate(item));
    document.querySelector(this.listElement).innerHTML = htmlItems.join("");
    document.querySelector(".list-total").innerText += ` $${this.total}`;
    // updateCartBadge();
  }
}
