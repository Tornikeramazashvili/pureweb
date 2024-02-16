// Selectors
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const accordionHeaders = document.querySelectorAll(".accordion-header");
const slides = document.getElementsByClassName("mySlides");
const dots = document.getElementsByClassName("dot");

// Event listeners

// Event listener for clicking on the hamburger menu button
hamburger.addEventListener("click", toggleMenu);

// Event listener for clicking on navigation links
document
  .querySelectorAll(".nav-link")
  .forEach((link) => link.addEventListener("click", closeMenu));

// Event listener for clicking on accordion headers
accordionHeaders.forEach((header) =>
  header.addEventListener("click", toggleAccordion)
);

// Event listener for page load and scroll events
document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", toggleHeaderClass);
});

// Slider
let slideIndex = 1;
showSlides(slideIndex);

// Functions

// Function to toggle the hamburger menu
function toggleMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

// Function to close the navigation menu
function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

// Function to toggle the accordion
function toggleAccordion() {
  const accordionContent = this.nextElementSibling;
  this.classList.toggle("active");

  if (this.classList.contains("active")) {
    accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
  } else {
    accordionContent.style.maxHeight = 0;
  }

  // Close other accordion items when one is opened
  accordionHeaders.forEach((otherHeader) => {
    if (otherHeader !== this) {
      otherHeader.classList.remove("active");
      otherHeader.nextElementSibling.style.maxHeight = 0;
    }
  });
}

// Function to toggle header class on scroll
function toggleHeaderClass() {
  let header = document.getElementById("header");
  let scrollPosition = window.scrollY;

  if (scrollPosition > 0) {
    header.classList.add("header-transparent");
  } else {
    header.classList.remove("header-transparent");
  }
}

// Function to show slides
function showSlides(n) {
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// Automatic slideshow
setInterval(() => {
  plusSlides(1);
}, 4000);

// Function to move slides forward or backward
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Function to show a specific slide
function currentSlide(n) {
  showSlides((slideIndex = n));
}
