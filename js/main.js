const buttonBackToTop = document.querySelector(".btn-back-to-top")

window.addEventListener("scroll", () => {
    scrollY >= 450 ? buttonBackToTop.classList.add("show") : buttonBackToTop.classList.remove("show")
})