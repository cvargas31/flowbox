console.log('Hello World')
const navbar = document.querySelector("#nav");


window.onscroll = () => {
  this.scrollY > 100 ? nav.classList.add("sticky") : nav.classList.remove("sticky")
}
// function stickyNav() {
//   console.log('navTop = ' + navTop)
//   console.log('scrollY = ' + window.scrollY)
//   if (window.scrollY >= navTop) {
//     document.body.classList.add('fixed-nav');
//   } else {
//     document.body.classList.remove('fixed-nav');
//   }
// }

// window.addEventListener('scroll', stickyNav);