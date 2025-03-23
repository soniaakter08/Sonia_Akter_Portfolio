// Mobile Navigation Toggle

const overlay = document.querySelector("#overlay");
const showMore = document.querySelector("#seeMoreButton");
const closeButton = document.querySelector("#closeButton");
const themeToggle = document.querySelector("#themeToggle");
const menuButton = document.querySelector(".menu-button");
const navMenu = document.querySelector("nav");

menuButton.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// Hide the menu when clicking outside
document.addEventListener("click", (e) => {
  if (!menuButton.contains(e.target) && !navMenu.contains(e.target)) {
    navMenu.classList.remove("active");
  }
});

const displayElement = () => {
  console.log("Button is clicked");
  overlay.classList.toggle("hidden");
};

// Back to Top Button
const backToTopButton = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
});

backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
// Dark Mode Toggle
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});

window.onload = () => {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
  }
};

window.onload = () => {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
  }
};

// Check saved theme on load
document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
  }
});
showMore.addEventListener("click", displayElement);
closeButton.addEventListener("click", displayElement);
