const btnIcon = document.getElementById("btn-icon");
const menu = document.getElementById("menu");

btnIcon.addEventListener("click", () => {
  menu.classList.toggle("menu--open_menu");
});
// menu submenu
const enlaseSubmenu = document.getElementById("open-sub-menu");
const submenu = document.getElementById("sub-menu");
enlaseSubmenu.addEventListener("click", () => {
  submenu.classList.toggle("menu__subMenu--subMenu-open");
});
