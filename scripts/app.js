// Header scroll

document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");

  window.addEventListener("scroll", () => {
    const isScrolled = window.scrollY || document.documentElement.scrollTop > 0;
    header.classList.toggle("header-transparent", isScrolled);
  });
});

// Hamburger menu

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);
