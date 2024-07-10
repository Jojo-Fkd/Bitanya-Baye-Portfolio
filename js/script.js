/* LOADING */

const loading = document.querySelector(".loading");
const body = document.querySelector("body");
window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    loading.classList.add("loaded");
    body.style.overflow = "auto";
  }, 1000);
});
