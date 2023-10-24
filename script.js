const darkMode = document.querySelector(".dark-mode");
const lightMode = document.querySelector(".light-mode");
let isDarkMode;

const handleMode = () => {
  darkMode.addEventListener("click", () => console.log("Darkmode Clicked"));
  lightMode.addEventListener("click", () => console.log("lightmode Clicked"));
};

handleMode();
console.log("In JS file");
