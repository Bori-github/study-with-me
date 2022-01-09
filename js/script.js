const mobileToggleBtn = document.querySelector(".btn-m-menu");
const mobileMenu = document.querySelector(".cont-m-menu");

const slider = document.querySelector(".list-projects");

let isDown = false;
let startX;
let scrollLeft;

const end = () => {
  isDown = false;
  slider.classList.remove("active");
};

const start = (e) => {
  isDown = true;
  slider.classList.add("active");
  startX = e.pageX || e.touches[0].pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
};

const move = (e) => {
  if (!isDown) return;

  e.preventDefault();
  const x = e.pageX || e.touches[0].pageX - slider.offsetLeft;
  const dist = x - startX;
  slider.scrollLeft = scrollLeft - dist;
};

// Event listeners
slider.addEventListener("mousedown", start);
slider.addEventListener("touchstart", start);

slider.addEventListener("mousemove", move);
slider.addEventListener("touchmove", move);

slider.addEventListener("mouseleave", end);
slider.addEventListener("mouseup", end);
slider.addEventListener("touchend", end);

mobileToggleBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});
