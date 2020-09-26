const portfolioSliderDesctop = () => {
  const wrap = document.querySelector('.portfolio-slider');//wrap
  const slides = document.querySelectorAll('.portfolio-slider__slide');//slides
  const prev = document.getElementById('portfolio-arrow_left'); //prev
  const next = document.getElementById('portfolio-arrow_right'); //next
  const slidesCount = slides.length; //slidesCount
  const slideWidth = slides[0].offsetWidth;
  let slidesToShow = 1;
  const slidesToScroll = 1;
  const movePosition = slidesToScroll * slideWidth;
  let position = 0;

  const getWindowWidth = () => {
    if (window.innerWidth < 1024 && window.innerWidth > 768) {
      slidesToShow = 2;
    } else if (window.innerWidth < 768 && window.innerWidth > 0) {
      slidesToShow = 1;
    } else {
      slidesToShow = 3;
    }
  };
  getWindowWidth();

  const resizeWindow = () => {
    window.addEventListener('resize', ()=>{
      getWindowWidth();
    });
  };
  resizeWindow();
  

  const sliderNext = () => {
    next.addEventListener('click', ()=>{
      const itemsLeft = slidesCount - (Math.abs(position) + slidesToShow * slideWidth) / slideWidth;
      position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * slideWidth;
      [...slides].forEach((item)=>{
        item.style.transform = `translateX(${position}px)`;
      });
      
      checkBtn();
    });
  };
  sliderNext();

    const sliderPrev = () => {
      prev.addEventListener('click', () => {
        const itemsLeft = Math.abs(position) / slideWidth;
        position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * slideWidth;

        [...slides].forEach((item) => {
          item.style.transform = `translateX(${position}px)`;
        });
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

export default portfolioSliderDesctop;