// Banner Slider Script
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

document.querySelector('.prev').addEventListener('click', () => {
  currentSlide = (currentSlide === 0) ? totalSlides - 1 : currentSlide - 1;
  updateSlider();
});

document.querySelector('.next').addEventListener('click', () => {
  currentSlide = (currentSlide === totalSlides - 1) ? 0 : currentSlide + 1;
  updateSlider();
});

function updateSlider() {
  const slider = document.querySelector('.slider');
  slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}
