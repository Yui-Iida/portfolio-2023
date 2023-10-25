const darkModeIcon = document.querySelector(".dark-icon");
const lightModeIcon = document.querySelector(".light-icon");
const darkModeBtn = document.querySelector(".dark-mode");
const lightModeBtn = document.querySelector(".light-mode");

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

// lightModeIcon.addEventListener("click", () => {
//   document.documentElement.classList.remove("dark");
//   darkModeBtn.classList.remove("translate-x-10");
//   lightModeBtn.classList.add("-translate-x-10");
//   lightModeBtn.classList.add("bg-white");

//   setTimeout(() => {
//     lightModeIcon.classList.toggle("hidden");
//     darkModeIcon.classList.toggle("hidden");
//     darkModeIcon.classList.add("z-10");
//     // lightModeIcon.classList.remove("z-10");
//   }, 500);
// });
