const portfolioSliderMobile = () => {
  let position = 0;
  let count = 1;
  const wrap = document.querySelector('.portfolio-slider-wrap'); //wrap
  const slides = document.querySelectorAll('.portfolio-slider-mobile .portfolio-slider__slide-frame'); //slides
  const prev = document.querySelector('.portfolio-slider-wrap #portfolio-arrow-mobile_left'); //prev
  const next = document.querySelector('.portfolio-slider-wrap #portfolio-arrow-mobile_right'); //next
  const slidesCount = slides.length; //slidesCount
  const sliderCounterContentCurrent = wrap.querySelector('.slider-counter-content__current'); //счетчик текущего слайда
  const slideWidth = slides[0].offsetWidth;//ширина слайда
  let slidesToShow = 1;
  const slidesToScroll = 1;
  const movePosition = slidesToScroll * slideWidth;//ширина передвижения слайдов
  wrap.querySelector('.slider-counter-content__total').textContent = slidesCount; //счетчик всех слайдов

  const setCounterPlus = () => {//счетчик слайдов +
    count++;
    sliderCounterContentCurrent.textContent = count;
  };

  const setCounterMinus = () => {//счетчик слайдов -
    count--;
    sliderCounterContentCurrent.textContent = count;
  };

  const moveSlides = (position) => {//движение слайдов
      [...slides].forEach((item) => {
        item.style.transform = `translateX(${position}px)`;
      });
  };

  const sliderNext = () => {//slider next
    next.addEventListener('click', () => {
         const itemsLeft = slidesCount - (Math.abs(position) + slidesToShow * slideWidth) / slideWidth;
         position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * slideWidth;
         moveSlides(position);
         checkBtn();
         setCounterPlus();
    });
  };
  sliderNext();

  const sliderPrev = () => {//slider prev
    prev.addEventListener('click', () => {
      const itemsLeft = Math.abs(position) / slideWidth;
      position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * slideWidth;
      moveSlides(position);
      checkBtn();
      setCounterMinus();
    });
  };
  sliderPrev();

  const checkBtn = () => {//вкл/выкл кнопок
    prev.style.display = position === 0 ? 'none' : 'flex';
    next.style.display = (position <= -(slidesCount - slidesToShow) * slideWidth) ? 'none' : 'flex';
  };
  checkBtn();
}

export default portfolioSliderMobile;