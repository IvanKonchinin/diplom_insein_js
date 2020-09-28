const testimonialsSlider = () => {
  const wrap = document.querySelector('.reviews-slider-wrap');
  const slide = document.querySelectorAll('.reviews-slider__slide');
  let currentSlide = 0;
  
  const prevSlide = (elem, index) => {
    elem[index].style.display = 'none';
  }

  const nextSlide = (elem, index) => {
    elem[index].style.display = '';
  }

  wrap.addEventListener('click', (event) => {
    event.preventDefault();
    let target = event.target;
    if (!target.closest('.reviews-slider-wrap .slider-arrow')) {
      return;
    }

    prevSlide(slide, currentSlide);

    if (target.closest('#reviews-arrow_right')) {
      currentSlide++;
    } else if (target.closest('#reviews-arrow_left')) {
      currentSlide--;
    }
    if (currentSlide >= slide.length) {
      currentSlide = 0;
    }
    if (currentSlide < 0) {
      currentSlide = slide.length - 1;
    }
    nextSlide(slide, currentSlide);

  });
};

export default testimonialsSlider;