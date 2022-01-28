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

// dark mode
const colorScheme = localStorage.getItem("color-scheme") || "light-mode";

let darkModeState = false;

const btnMode = document.querySelectorAll(".btn-mode");

// MediaQueryList object
const useDark = window.matchMedia("(prefers-color-scheme: dark)");

// Toggles the "dark-mode" class
function toggleDarkMode(state) {
  document.documentElement.classList.toggle("dark-mode", state);
  darkModeState = state;
}

// Sets localStorage state
function setDarkModeLocalStorage(state) {
  localStorage.setItem("dark-mode", state);
}

// Initial setting
toggleDarkMode(localStorage.getItem("dark-mode") == "true");

// Listen for changes in the OS settings.
// Note: the arrow function shorthand works only in modern browsers,
// for older browsers define the function using the function keyword.
useDark.addListener((evt) => toggleDarkMode(evt.matches));

// Toggles the "dark-mode" class on click and sets localStorage state
btnMode.forEach((btn) => {
  btn.addEventListener("click", () => {
    darkModeState = !darkModeState;

    toggleDarkMode(darkModeState);
    setDarkModeLocalStorage(darkModeState);
  });
});
