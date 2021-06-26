// Sticky Navigation Function
const navbar = document.querySelector("#nav");


window.onscroll = () => {
  this.scrollY > 100 ? nav.classList.add("sticky") : nav.classList.remove("sticky")
}

// Mobile Menu
const burgerMenu = document.querySelector(".menu-container")
const navigationMenu = document.querySelector('.nav-links')
const navLinks = document.querySelectorAll('.nav-links li')

burgerMenu.addEventListener('click', () => {
  navigationMenu.classList.toggle('nav-active')

  navLinks.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      link.style.animation = `navLinkFade 0.3s ease forwards ${
        index / 5
      }s`;
    }
  });
})
