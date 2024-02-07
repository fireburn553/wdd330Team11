import { getLocalStorage } from "./utils.mjs";

export default class CheckoutProcess {
  constructor(key, outputSelector) {
    this.key = key;
    this.outputSelector = outputSelector;
    this.list = [];
    this.itemTotal = 0;
    this.shipping = 0;
    this.tax = 0;
    this.orderTotal = 0;
  }

  init() {
    this.list = getLocalStorage(this.key);
    this.calculateItemSummary();
  }

  calculateItemSummary() {
    // calculate and display the total amount of the items in the cart, and the number of items.
     const summaryElement = document.querySelector(this.outputSelector + " #subTotal");
    const itemNumElement = document.querySelector(this.outputSelector + " #num-items");
    itemNumElement.innerText = this.list.length;
    // calculate the total of all the items in the cart
    const amounts = this.list.map((item) => item.FinalPrice);
      this.itemTotal = amounts.reduce((sum, item) => sum + item); 
      summaryElement.innerText = "$" + this.itemTotal;  


  }

  calculateOrdertotal() {
    // calculate the shipping and tax amounts. Then use them to along with the cart total to figure out the order total
    this.shipping = 10 + (this.list.length - 1) * 2;
    this.tax = (this.itemTotal * 0.06).toFixed(2);
    this.orderTotal = (
      parseFloat(this.itemTotal) +
      parseFloat(this.shipping) +
      parseFloat(this.tax)
    ).toFixed(2);
    this.displayOrderTotals();
  }

  displayOrderTotals() {
    // once the totals are all calculated display them in the order summary page
    const shipping = document.querySelector(this.outputSelector + " #shipping");
    const tax = document.querySelector(this.outputSelector + " #tax");
    const orderTotal = document.querySelector(
      this.outputSelector + " #orderTotal");
    shipping.innerText = "$" + this.shipping;
    tax.innerText = "$" + this.tax;
    orderTotal.innerText = "$" + this.orderTotal;

  }
}
