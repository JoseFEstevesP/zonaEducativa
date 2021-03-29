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
