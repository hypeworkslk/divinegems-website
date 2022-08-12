const mobileNavbar = document.getElementById("mobile-navbar")
const navBurger = document.getElementById("nav-burger")
const navOpen = document.getElementById("mobile-nav-open")
const navClose = document.getElementById("mobile-nav-close")

navBurger.addEventListener('click', () => {
    mobileNavbar.classList.toggle('active')
    navOpen.classList.toggle("inactive")
    navClose.classList.toggle("inactive")
})