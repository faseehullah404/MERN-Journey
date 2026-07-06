const sliderTrack = document.getElementById("sliderTrack");

let currentSlide = 0;
const totalSlides = 3;

function moveSlider() {
  sliderTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
}

setInterval(function () {
  currentSlide++;

  if (currentSlide === totalSlides) {
    currentSlide = 0;
  }

  moveSlider();
}, 4000);