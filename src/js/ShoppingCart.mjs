import { getLocalStorage, renderListWithTemplate } from "./utils.mjs";

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

export default class carttListing {
  constructor(cartItems, listElement) {
    this.dataSource = cartItems;
    this.listElement = listElement;
  }

  //   async init() {
  //     const list = await this.dataSource.getData();
  //     this.filterTents(list);
  //   }

  renderCartContents() {
    const cartItems = getLocalStorage(this.dataSource) || [];
    const htmlItems = cartItems.map((item) => cartItemTemplate(item));
    document.querySelector(this.listElement).innerHTML = htmlItems.join("");
    // updateCartBadge();
  }
}
