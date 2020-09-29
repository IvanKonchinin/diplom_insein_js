const popupPortfolioSlider = () => {
  const wrap = document.querySelector('.popup-portfolio-slider-wrap'), //wrap
        track = document.querySelector('.popup-portfolio-slider'), //track
        slides = track.querySelectorAll('.popup-portfolio-slider__slide'), //slides
        prev = wrap.querySelector('#popup_portfolio_left'), //prev
        next = wrap.querySelector('#popup_portfolio_right'), //next
        slidesCount = slides.length, //slidesCount
        popupPortfolioCounter = document.getElementById('popup-portfolio-counter'),
        sliderCounterContentCurrent = document.querySelector('#popup-portfolio-counter .slider-counter-content__current'),
        slideWidth = slides[0].offsetWidth,
        popupPortfolioTextItems = document.querySelectorAll('.popup-portfolio-text'),
        slidesToScroll = 1;
  let slidesToShow = 1,
      position = 0,
      count = 1,
      currentSlide = 0;
  const movePosition = slidesToScroll * slideWidth;

  popupPortfolioCounter.querySelector('.slider-counter-content__total').textContent = slidesCount;

   if (currentSlide < 0) currentSlide = slidesCount - 1;
   
  const prevSlideText = (elem, index, strClass) => {//переключатель
    elem[index].classList.remove(strClass);
  }

  const nextSlideText = (elem, index, strClass) => {//переключатель
    elem[index].classList.add(strClass);
  }

   const setCounterPlus = () => { //счетчик слайдов +
     count++;
     sliderCounterContentCurrent.textContent = count;
   };

   const setCounterMinus = () => { //счетчик слайдов -
     count--;
     sliderCounterContentCurrent.textContent = count;
   };

  const sliderNext = () => {
    next.addEventListener('click', () => {
      const itemsLeft = slidesCount - (Math.abs(position) + slidesToShow * slideWidth) / slideWidth;
      position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * slideWidth;
      track.style.transform = `translateX(${position}px)`;
      prevSlideText(popupPortfolioTextItems, currentSlide, 'popup-portfolio-show');
      currentSlide++;
      nextSlideText(popupPortfolioTextItems, currentSlide, 'popup-portfolio-show');
      setCounterPlus();
      checkBtn();
    });
  };
  sliderNext();

  const sliderPrev = () => {
    prev.addEventListener('click', () => {
      const itemsLeft = Math.abs(position) / slideWidth;
      position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * slideWidth;
      track.style.transform = `translateX(${position}px)`;
      prevSlideText(popupPortfolioTextItems, currentSlide, 'popup-portfolio-show');
      currentSlide--;
      nextSlideText(popupPortfolioTextItems, currentSlide, 'popup-portfolio-show');
      setCounterMinus();
      checkBtn();
    });
  };
  sliderPrev();

  const checkBtn = () => {
    prev.style.display = position === 0 ? 'none' : 'flex';
    next.style.display = (position <= -(slidesCount - slidesToShow) * slideWidth) ? 'none' : 'flex';
  };
  checkBtn();
};

export default popupPortfolioSlider;