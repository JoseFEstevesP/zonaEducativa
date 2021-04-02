const body = document.getElementById("body");
const modal = (a, b) => {
  a.classList.toggle("modal--open");
  b.classList.toggle("modal__content--open");
  body.classList.toggle("modalOpenBody");
};
const moadalClose = (a, b) => {
  a.addEventListener("click", (e) => {
    if (e.target.classList.contains("closeModal")) {
      modal(a, b);
    }
  });
};
