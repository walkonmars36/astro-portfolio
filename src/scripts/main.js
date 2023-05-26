// Global JS

// Nav Menu //

const nav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".nav-toggle");

navToggle.addEventListener("click", function () {
  navToggle.classList.toggle("close");

  const isVisible = nav.getAttribute("data-visible");

  if (isVisible === "true") {
    nav.setAttribute("data-visible", "false");
    navToggle.setAttribute("aria-label", "Open Menu");
    navToggle.setAttribute("aria-expanded", "false");
  } else {
    nav.setAttribute("data-visible", "true");
    navToggle.setAttribute("aria-label", "Close Menu");
    navToggle.setAttribute("aria-expanded", "true");
  }
});


// Intersection Observer //

const animate = document.querySelectorAll('.animate-up, .animate-left, .animate-right');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
    } else {
      entry.target.classList.remove('is-visible');
    }
  });
});

animate.forEach((element, index) => {
  // element.style.transitionDelay = `${index * .2}s`
  observer.observe(element);
});


// Scroll to Top //

const backToTopButton = document.querySelector(".back-to-top");


if (backToTopButton !== null) {
  backToTopButton.addEventListener("click", scrollToTop);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      backToTopButton.classList.add("show");
    } else {
      backToTopButton.classList.remove("show");
    }
  });
}
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}