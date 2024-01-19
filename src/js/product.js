<<<<<<< HEAD
import { setLocalStorage, getLocalStorage } from "./utils.mjs";
=======
import { setLocalStorage, getLocalStorage} from "./utils.mjs";
>>>>>>> 8005fa12dc743c6a57e98403f7dc7f329bef72dd
import ProductData from "./ProductData.mjs";

const dataSource = new ProductData("tents");

function addProductToCart(product) {
<<<<<<< HEAD
  const currentcart = getLocalStorage("so-cart") || [] ;
  currentcart.push(product);
  setLocalStorage("so-cart", currentcart);
=======
  const cartItems = getLocalStorage("so-cart") || [];
  cartItems.push(product);
  setLocalStorage("so-cart", cartItems);
>>>>>>> 8005fa12dc743c6a57e98403f7dc7f329bef72dd
}
// add to cart button event handler
async function addToCartHandler(e) {
  const product = await dataSource.findProductById(e.target.dataset.id);
  addProductToCart(product);
}

// add listener to Add to Cart button
document
  .getElementById("addToCart")
  .addEventListener("click", addToCartHandler);
