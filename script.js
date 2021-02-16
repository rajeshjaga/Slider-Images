const slideContainer = document.querySelector(".slide-container");
const slides = document.querySelectorAll(".slide");
let draggin = false,
  startpos = 0,
  currentTrans = 0,
  PrevTrans = 0,
  anitionId = 0,
  currentIndex = 0;

const touchStart = (i) => {};
const touchend = () => {};

slides.forEach((slide, index) => {
  //prettier-ignore
  slide.addEventListener("dragstart", e => e.preventDefault());

  slide.addEventListener("touchstart", touchStart(index));
  slide.addEventListener("touchend", touchEnd);

  slide.addEventListener("mousedown", touchStart(index));
  slide.addEventListener("mouseup", touchend);

  slide.addEventListener("mouseleave", touchEnd);
  slide.addEventListener("mousemove", touchMove);
});
