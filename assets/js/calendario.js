const calImg = document.getElementById("calImg");
const contenCalendario = document.getElementById("calendationConten");
const close = document.getElementById("closeModel");
const imgeModal = document.querySelector(".conten_calModal__img");
calImg.addEventListener("click", () => {
  addImg(calImg.getAttribute("src"));
});
const addImg = (srcImg) => {
  contenCalendario.classList.add("conten_calModal--openImg");
  imgeModal.src = srcImg;
};
contenCalendario.addEventListener("click", () => {
  contenCalendario.classList.remove("conten_calModal--openImg");
});
close.addEventListener("click", () => {
  contenCalendario.classList.remove("conten_calModal--openImg");
});
