const calTw = document.getElementById("cal-tw");
const modalcal = document.getElementById("modalcal");
const contentModalCal = document.getElementById("contentModalCal");
const imgContentModal = document.getElementById("imgContentModal");
const addImg = (srcImg) => {
  imgContentModal.src = srcImg;
  modal(modalcal, contentModalCal);
};
calTw.addEventListener("click", (e) => {
  if (e.target.classList.contains("calendario__img")) {
    addImg(e.target.getAttribute("src"));
  }
});
moadalClose(modalcal, contentModalCal);

// const calImg = document.getElementById("calImg");
// const contenCalendario = document.getElementById("calendationConten");
// const close = document.getElementById("closeModel");
// const imgeModal = document.querySelector(".conten_calModal__img");
// calImg.addEventListener("click", () => {
//   addImg(calImg.getAttribute("src"));
// });
// const addImg = (srcImg) => {
//   contenCalendario.classList.add("conten_calModal--openImg");
//   imgeModal.src = srcImg;
// };
// contenCalendario.addEventListener("click", () => {
//   contenCalendario.classList.remove("conten_calModal--openImg");
// });
// close.addEventListener("click", () => {
//   contenCalendario.classList.remove("conten_calModal--openImg");
// });
