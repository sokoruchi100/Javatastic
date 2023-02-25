// Function to highlight the current section in the navigation menu
function highlightCurrentSection() {
  const sections = document.querySelectorAll("main section");
  const navLinks = document.querySelectorAll("nav a");

  sections.forEach((section, index) => {
    const sectionTop = section.offsetTop - 50;
    const sectionBottom = sectionTop + section.offsetHeight;

    if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
      navLinks.forEach((navLink) => {
        navLink.classList.remove("active");
      });
      navLinks[index].classList.add("active");
    }
  });
}

// Event listener to call the highlightCurrentSection function on scroll
window.addEventListener("scroll", highlightCurrentSection);

// Function to toggle the mobile navigation menu
function toggleMobileMenu() {
  const navLinks = document.querySelector("nav ul");

  navLinks.classList.toggle("show");
}

// Event listener to call the toggleMobileMenu function on click of the mobile menu button
const menuButton = document.querySelector(".menu-button");
menuButton.addEventListener("click", toggleMobileMenu);
