import ProductData from "./ProductData.mjs";
import ProductListing from "./ProductListing.mjs";
import { updateCartBadge, loadHeaderFooter, getParam } from "./utils.mjs";
import {
  sortByName,
  sortByNameDescending,
  sortByPrice,
  sortByPriceDescending,
} from "./utils.mjs";

loadHeaderFooter();
const category = getParam("category");
// first create an instance of our ProductData class.
const dataSource = new ProductData();
// then get the element we want the product list to render in
const listElement = document.querySelector(".product-list");
// then create an instance of our ProductList class and send it the correct information.
const myList = new ProductListing(category, dataSource, listElement);
// finally call the init method to show our products
myList.init();

updateCartBadge();

const dropdown = document.getElementById("productSortByDropdown");

dropdown.addEventListener("change", async function () {
  const selectedOption = dropdown.value;
  let sortedList;

  // Determine the selected sorting option and call the appropriate sorting function
  switch (selectedOption) {
    case "Name: A to Z":
      sortedList = await sortByName(myList.getList());
      break;
    case "Name: Z to A":
      sortedList = await sortByNameDescending(myList.getList());
      break;
    case "Price: Low to High":
      sortedList = await sortByPrice(myList.getList());
      break;
    case "Price: High to Low":
      sortedList = await sortByPriceDescending(myList.getList());
      break;
    default:
      sortedList = myList.getList();
  }

  // Render the sorted list
  myList.renderList(sortedList, true);
});
