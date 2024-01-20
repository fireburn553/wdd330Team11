import ProductData from "./ProductData.mjs";
import ProductListing from "./ProductListing.mjs";
import {getCartCount} from "./utils.mjs";

const dataSource = new ProductData("tents");
const element = document.querySelector(".product-list");
const listing = new ProductListing("Tents", dataSource, element);
document.querySelector(".cart-count").innerText = getCartCount().toString();

listing.init();
