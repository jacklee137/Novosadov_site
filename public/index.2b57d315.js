const header = document.querySelector(".header");
function myFunction() {
  document.body.scrollTop > 50 || document.documentElement.scrollTop > 50
    ? header.classList.add("header_active")
    : header.classList.remove("header_active");
}
window.onscroll = function () {
  myFunction();
};
const burger = document.querySelector(".header__wrapp-burger"),
  nav = document.querySelector(".header__nav");
function burgerMenu() {
  burger.classList.toggle("change"), nav.classList.toggle("header__nav-active");
}
burger.onclick = function () {
  burgerMenu();
};
//# sourceMappingURL=index.2b57d315.js.map
