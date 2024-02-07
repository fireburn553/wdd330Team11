import { getParam } from "./utils.mjs";
import ExternalServices from "./ExternalServices.mjs";
import ProductDetails from "./ProductDetails.mjs";
// const dataSource = new ExternalServices("tents");

// // add to cart button event handler
// async function addToCartHandler(e) {
//   const product = await dataSource.findProductById(e.target.dataset.id);
//   addProductToCart(product);
// }

// // add listener to Add to Cart button
// document
//   .getElementById("addToCart")
//   .addEventListener("click", addToCartHandler);

// const productId = getParam("product");
// console.log(productId);

// console.log(dataSource.findProductById(productId));

const productId = getParam("product");
const dataSource = new ExternalServices("tents");

const product = new ProductDetails(productId, dataSource);
product.init();
