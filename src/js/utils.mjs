// wrapper for querySelector...returns matching element
export function qs(selector, parent = document) {
  return parent.querySelector(selector);
}
// or a more concise version if you are into that sort of thing:
// export const qs = (selector, parent = document) => parent.querySelector(selector);

// retrieve data from localstorage
export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}
// save data to local storage
export function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}
// set a listener for both touchend and click
export function setClick(selector, callback) {
  qs(selector).addEventListener("touchend", (event) => {
    event.preventDefault();
    callback();
  });
  qs(selector).addEventListener("click", callback);
}

export function getParam(param) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const product = urlParams.get(param);
  return product;
}

// function to take a list of objects and a template and insert the objects as HTML into the DOM
export function renderListWithTemplate(
  templateFn,
  parentElement,
  list,
  position = "afterbegin",
  clear = false
) {
  const htmlStrings = list.map(templateFn);
  // if clear is true we need to clear out the contents of the parent.
  if (clear) {
    parentElement.innerHTML = "";
  }
  parentElement.insertAdjacentHTML(position, htmlStrings.join(""));
}

export function renderWithTemplate(
  parentElement,
  template,
  data,
  position = "afterbegin",
  callback
) {
  console.log(template);
  parentElement.insertAdjacentHTML(position, template);
  //if there is a callback...call it and pass data
  if (callback) {
    callback(data);
  }
}

export function setCartCount(count) {
  localStorage.setItem("cartCount", count);
}

export function getCartCount() {
  return parseInt(localStorage.getItem("cartCount")) || 0;
}

// export async function updateCartBadge(data) {
//   if (data) {
//     document.querySelector(".cart-count").innerText = data.toString();
//   } else {
//     const cartCount = getCartCount(); // Assume you have a function to get the cart count
//     document.querySelector(".cart-count").innerText = cartCount.toString();
//   }
// }

// This version of the updateCartBadge fails mercifully
// since the function cant get the cartCountElement yet
// because the heade partials is not there yet when the function runs
export function updateCartBadge(data) {
  const cartCountElement = document.querySelector(".cart-count");

  if (cartCountElement) {
    if (data !== undefined) {
      cartCountElement.innerText = data.toString();
    } else {
      const cartCount = getCartCount(); // Assuming getCartCount is an asynchronous function
      cartCountElement.innerText = cartCount.toString();
    }
  } else {
    console.error("Element with class 'cart-count' not found.");
  }
}

async function loadTemplate(path) {
  const res = await fetch(path);
  const template = await res.text();
  return template;
}

export async function loadHeaderFooter() {
  try {
    // Load header and footer templates
    const headerTemplate = await loadTemplate("./partials/header.html"); // Replace 'headerTemplate' with the actual template name
    const footerTemplate = await loadTemplate("./partials/footer.html"); // Replace 'footerTemplate' with the actual template name

    // Grab header and footer elements from the DOM (assuming you're using a library like jsdom)
    const headerElement = document.querySelector("#main-header"); // Replace 'header' with the actual ID of your header element
    // console.log(headerElement);
    const footerElement = document.querySelector("#main-footer"); // Replace 'footer' with the actual ID of your footer element

    // Render header and footer with templates
    renderWithTemplate(headerElement, headerTemplate);
    renderWithTemplate(footerElement, footerTemplate);
  } catch (error) {
    console.error("Error loading header and footer:", error);
  }
}
