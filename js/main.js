const iframeModal = document.querySelector("iframe")
const modalVideo = document.querySelector(".modal")
const btnClose = document.querySelector(".btn-close")

btnClose.addEventListener("click", disabledAudioVideo)
modalVideo.addEventListener("click", disabledAudioVideo)

function disabledAudioVideo() {
    const url = iframeModal.getAttribute("src")
    iframeModal.setAttribute("src", "")
    iframeModal.setAttribute("src", url)
}

const buttonBackToTop = document.querySelector(".btn-back-to-top")

window.addEventListener("scroll", () => {
    scrollY >= 650 ? buttonBackToTop.classList.add("show") : buttonBackToTop.classList.remove("show")
})