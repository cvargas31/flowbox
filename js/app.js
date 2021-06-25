// Sticky Navigation Function
const navbar = document.querySelector("#nav");


window.onscroll = () => {
  this.scrollY > 100 ? nav.classList.add("sticky") : nav.classList.remove("sticky")
}
