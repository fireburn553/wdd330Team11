import ProductData from "./ProductData.mjs";
import ProductListing from "./ProductListing.mjs";
import { updateCartBadge, loadHeaderFooter } from "./utils.mjs";

const dataSource = new ProductData("tents");
const element = document.querySelector(".product-list");
const listing = new ProductListing("Tents", dataSource, element);

updateCartBadge();

listing.init();
loadHeaderFooter();

const joinbtn = document.querySelector("#join-news-btn");
const modal = document.querySelector("#modal");
let span = document.querySelector(".close");
const closesumbission = document.querySelector(".close-submission");
let thanks = document.querySelector(".thanks");
const submitbtn = document.querySelector(".submitBtn");
let closeSubmissionBtn = document.querySelector(".close-submission");

joinbtn.addEventListener("click", () => {
  modal.style.display = "block";
});

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

closesumbission.onclick = function () {
  thanks.style.display = "none";
};
closesumbission.onclick = function () {
  thanks.style.display = "none";
  modal.style.display = "none";
};
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  } else if (event.target == thanks) {
    thanks.style.display = "none";
  }
};

submitbtn.onclick = function (event) {
  event.preventDefault();
  let content = document.querySelector("#modal-content");
  content.remove();
  thanks.style.display = "block";
};
