const btnIcon = document.getElementById("btn-icon");
const menu = document.getElementById("menu");

btnIcon.addEventListener("click", () => {
  menu.classList.toggle("menu--open_menu");
});
