const buttonBackToTop = document.querySelector(".btn-back-to-top")

window.addEventListener("scroll", () => {
    scrollY >= 650 ? buttonBackToTop.classList.add("show") : buttonBackToTop.classList.remove("show")
})