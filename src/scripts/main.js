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
