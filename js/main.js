const btnPlayMovie = document.querySelector(".button-play-movie")
const modalMovie = document.querySelector(".background-modal")
const closeModalPlayMovie = document.querySelector(".close-modal")

closeModalPlayMovie.addEventListener("click", () => {
    modalMovie.classList.toggle("active")
})

btnPlayMovie.addEventListener("click", () => {
    modalMovie.classList.toggle("active")
})