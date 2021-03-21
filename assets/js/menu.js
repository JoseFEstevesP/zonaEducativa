const btnIcon = document.getElementById("btn-icon");
const menu = document.getElementById("menu");

btnIcon.addEventListener("click", () => {
  menu.classList.toggle("menu--open_menu");
});
// menu submenu
const main_menu = document.getElementById("main_menu");
const subMenu = document.getElementById("sub-menu");
main_menu.addEventListener("click", (e) => {
  if (e.target.classList.contains("open-sub-menu")) {
    console.log();
    // subMenu.classList.toggle("menu__subMenu--subMenu-open");
  }
});
