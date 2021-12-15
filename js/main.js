const closeModalPlayMovie = document.querySelector(".close-modal")
const videoYt = document.querySelector("#video-slide")

closeModalPlayMovie.addEventListener("click", () => {
    modalMovie.classList.toggle("active")
})

let iframeVideo = videoYt.contentWindow
console.log(iframeVideo)

const buttonBackToTop = document.querySelector(".btn-back-to-top")

window.addEventListener("scroll", () => {
    scrollY >= 380 ? buttonBackToTop.classList.add("show") : buttonBackToTop.classList.remove("show")
})