const slider = document.getElementById("slider");
let sliderSection = document.querySelectorAll(".slider__section");
let sliderSectionLast = sliderSection[sliderSection.length - 1];
const btnleft = document.getElementById("btn-left");
const btnRight = document.getElementById("btn-right");
const sliderImg = document.querySelectorAll(".slider__img");
slider.insertAdjacentElement("afterbegin", sliderSectionLast);
let nex = () => {
  let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];
  slider.style.marginLeft = "-200%";
  slider.style.transition = "margin-left 0.5s";
  setTimeout(() => {
    slider.style.transition = "none";
    slider.insertAdjacentElement("beforeend", sliderSectionFirst);
    slider.style.marginLeft = "-100%";
  }, 500);
};
let pre = () => {
  let sliderSection = document.querySelectorAll(".slider__section");
  let sliderSectionLast = sliderSection[sliderSection.length - 1];
  slider.style.marginLeft = "0";
  slider.style.transition = "margin-left 0.5s";
  setTimeout(() => {
    slider.style.transition = "none";
    slider.insertAdjacentElement("afterbegin", sliderSectionLast);
    slider.style.marginLeft = "-100%";
  }, 500);
};
btnRight.addEventListener("click", () => {
  nex();
});
btnleft.addEventListener("click", () => {
  pre();
});
setInterval(() => {
  nex();
}, 5000);
