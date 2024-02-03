import { loadHeaderFooter, loadSignUpModel } from "./utils.mjs";

const joinbtn = document.querySelector("#join-news-btn");
const modal = document.querySelector("#modal");
let span = document.querySelector(".close");
const closesumbission = document.querySelector(".close-submission");
let thanks = document.querySelector(".thanks");
const submitbtn = document.querySelector(".submitBtn");

loadHeaderFooter();
loadSignUpModel();

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
