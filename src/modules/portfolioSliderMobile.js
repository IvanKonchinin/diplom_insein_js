const portfolioSliderMobile = () => {
  let position = 0;
  let count = 1;
  const wrap = document.querySelector('.portfolio-slider-wrap'); //wrap
  const portfolioSliderMobile = document.querySelector('.portfolio-slider-mobile'); 
  const slides = portfolioSliderMobile.querySelectorAll('.portfolio-slider__slide-frame'); //slides
  const prev = document.querySelector('.slider-arrow-tablet-mobile_left'); //prev
  const next = document.querySelector('.slider-arrow-tablet-mobile_right'); //next
  const slidesCount = slides.length; //slidesCount
  const sliderCounterContentCurrent = wrap.querySelector('.slider-counter-content__current'); //счетчик текущего слайда
  let slideWidth = (slides[0].offsetWidth) ? slides[0].offsetWidth : 352; //ширина слайда
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
    (position === 0) ? prev.classList.add('hide') : prev.classList.remove('hide');
    (position <= -(slidesCount - slidesToShow) * slideWidth) ? next.classList.add('hide') : next.classList.remove('hide');
  };

  window.addEventListener('resize', ()=>{
    checkBtn();
  });

  checkBtn();
}

export default portfolioSliderMobile;