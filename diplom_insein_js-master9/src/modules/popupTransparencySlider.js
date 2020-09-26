const popupTransparencySlider = () => {
  const wrap = document.querySelector('.popup-transparency-slider-wrap');
  const slide = document.querySelectorAll('.popup-transparency-slider__slide');
  const transparencyPopupCounterWrap = document.querySelector('#transparency-popup-counter');
  const sliderCounterContentCurrent = transparencyPopupCounterWrap.querySelector('.slider-counter-content__current');
  transparencyPopupCounterWrap.querySelector('.slider-counter-content__total').textContent = slide.length;
  let currentSlide = 0;
  let count = 1;

  sliderCounterContentCurrent.textContent = count;

  const setCounter = () => { //счетчик слайдов +
    [...slide].forEach((item)=>{
       console.log(item.matches('.popup-transparency-slider__slide-show'));
      if (item.matches('.popup-transparency-slider__slide-show')) {
        let itemDataNum = item.dataset.num;
        sliderCounterContentCurrent.textContent = itemDataNum;
      }
    });
  };

  const prevSlide = (elem, index, strClass) => {
    elem[index].classList.remove(strClass);
     setCounter();
  }

  const nextSlide = (elem, index, strClass) => {
    elem[index].classList.add(strClass);
     setCounter();
  }

  wrap.addEventListener('click', (event) => {
    event.preventDefault();
    let target = event.target;
    if (!target.closest('.popup-arrow_transparency')) {
      return;
    }

    prevSlide(slide, currentSlide, 'popup-transparency-slider__slide-show');

    if (target.closest('#transparency_right')) {
      currentSlide++;
    } else if (target.closest('#transparency_left')) {
      currentSlide--;
    }
    if (currentSlide >= slide.length) {
      currentSlide = 0;
    }
    if (currentSlide < 0) {
      currentSlide = slide.length - 1;
    }
    nextSlide(slide, currentSlide, 'popup-transparency-slider__slide-show');

  });
};

export default popupTransparencySlider;