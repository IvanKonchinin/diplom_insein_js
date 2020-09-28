const popupDesignSlider = () => {
  const wrap = document.querySelector('.popup-design-slider-wrap'), //wrap
    track = document.querySelector('.popup-design-slider'), //track
    main = document.querySelector('.popup-designs-slider__style1'), //track
    slides = main.querySelectorAll('.popup-design-slider__style-slide'), //slides
    sliderCounterContentCurrent = document.querySelector('#popup-designs-counter .slider-counter-content__current');
    let currentSlide = 0;

    sliderCounterContentCurrent.textContent = slides[0].dataset.num;

      [...slides].forEach((item, i) => {
        if (i !== 0) item.classList.add('hide');
      });

    const prevSlide = (elem, index, strClass) => {
      elem[index].classList.add(strClass);
      sliderCounterContentCurrent.textContent = elem[index].dataset.num;
    }

    const nextSlide = (elem, index, strClass) => {
      elem[index].classList.remove(strClass);
      sliderCounterContentCurrent.textContent = elem[index].dataset.num;
    }

      wrap.addEventListener('click', (event) => {
        event.preventDefault();
        let target = event.target;
        
        console.log(target.closest('#popup_design_right'));
        prevSlide(slides, currentSlide, 'hide');

        if (target.closest('#popup_design_right')) {
          currentSlide++;
        } else if (target.closest('#popup_design_left')) {
          currentSlide--;
        } 

        if (currentSlide >= slides.length) {
          currentSlide = 0;
        }
        if (currentSlide < 0) {
          currentSlide = slides.length - 1;
        }
        nextSlide(slides, currentSlide, 'hide');

      });
    
};

export default popupDesignSlider;