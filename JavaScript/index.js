// Function to toggle the mobile navigation menu
function toggleMobileMenu() {
  const navLinks = document.querySelector("li a");

  navLinks.classList.toggle("show");
}

// Event listener to call the toggleMobileMenu function on click of the mobile menu button
const menuButton = document.getElementsByClassName("menu");
menuButton.addEventListener("click", toggleMobileMenu());