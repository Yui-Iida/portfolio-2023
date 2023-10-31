// Switch Mode
const darkModeIcon = document.querySelector(".dark-icon");
const lightModeIcon = document.querySelector(".light-icon");
const darkModeBtn = document.querySelector(".dark-mode");
const lightModeBtn = document.querySelector(".light-mode");

// When dark mode button clicked
darkModeIcon.addEventListener("click", () => {
  document.documentElement.classList.add("dark");
  darkModeBtn.classList.add("translate-x-10");
  lightModeBtn.classList.remove("-translate-x-10");

  setTimeout(() => {
    lightModeIcon.classList.toggle("hidden");
    darkModeIcon.classList.toggle("hidden");
    lightModeIcon.classList.add("z-10");
  }, 500);
});

// When light mode button clicked
lightModeIcon.addEventListener("click", () => {
  document.documentElement.classList.remove("dark");
  lightModeBtn.classList.add("-translate-x-10");
  darkModeBtn.classList.remove("translate-x-10");

  lightModeBtn.classList.add("bg-white");
  lightModeIcon.classList.toggle("hidden");
  setTimeout(() => {
    darkModeIcon.classList.toggle("hidden");
    darkModeIcon.classList.add("z-10");
  }, 500);
});

// Display current year
const year = document.querySelector(".year");
year.textContent = new Date().getFullYear();
