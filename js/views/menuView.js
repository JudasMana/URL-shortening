const menuToggle = document.querySelector(".menu");
const menu = document.querySelector("menu");

export const addMenuHandler = function () {
  menuToggle.addEventListener("click", function () {
    menu.classList.toggle("hidden");
  });
};
