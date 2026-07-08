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

const secondSliderTrack = document.getElementById("secondSliderTrack");

let secondCurrentSlide = 0;
const secondTotalSlides = 3;

function moveSecondSlider() {
  secondSliderTrack.style.transform = `translateX(-${secondCurrentSlide * 100}%)`;
}

setInterval(function () {
  secondCurrentSlide++;

  if (secondCurrentSlide === secondTotalSlides) {
    secondCurrentSlide = 0;
  }

  moveSecondSlider();
}, 4000);