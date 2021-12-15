const iframeModal = document.querySelector("iframe")
const btnClose = document.querySelector(".btn-close")

btnClose.addEventListener("click", () => {
    const url = iframeModal.getAttribute("src")
    iframeModal.setAttribute("src", "")
    iframeModal.setAttribute("src", url)
})

const buttonBackToTop = document.querySelector(".btn-back-to-top")

window.addEventListener("scroll", () => {
    scrollY >= 650 ? buttonBackToTop.classList.add("show") : buttonBackToTop.classList.remove("show")
})