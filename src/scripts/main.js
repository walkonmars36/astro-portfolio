// Global JS

// Nav Menu //

const nav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".nav-toggle");

navToggle.addEventListener("click", function () {
  navToggle.classList.toggle("close");

  const navIsOpen = nav.getAttribute("data-visible");

  if (navIsOpen === "true") {
    nav.setAttribute("data-visible", "false");
    navToggle.setAttribute("aria-label", "Open Menu");
    navToggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("no-scroll"); // Enable scrolling
  } else {
    nav.setAttribute("data-visible", "true");
    navToggle.setAttribute("aria-label", "Close Menu");
    navToggle.setAttribute("aria-expanded", "true");
    document.body.classList.add("no-scroll"); // Disable scrolling
  }
});

// Scroll to Top //

const backToTopButton = document.querySelector(".back-to-top");

if (backToTopButton !== null) {
  backToTopButton.addEventListener("click", scrollToTop);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
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

// Animations //

// const animations = document.querySelectorAll(".animation");

// const revealSection = function (entries, observer) {
//   const [entry] = entries;
//   console.log(entry);

//   if (!entry.isIntersecting) return;
//   entry.target.classList.remove("animation--hidden");
//   observer.unobserve(entry.target);
// };

// const sectionObserver = new IntersectionObserver(revealSection, {});

// animations.forEach(function (section) {
//   sectionObserver.observe(section);
//   section.classList.add("animation--hidden");
// });
