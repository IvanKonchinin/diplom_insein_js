class PopupDesignSlider{
  constructor(main){
    
      this.wrap = document.querySelector('.popup-design-slider-wrap'), //wrap
      this.track = document.querySelector('.popup-design-slider'), //track
      this.main = document.querySelector(main), //main
      this.tabHeader = document.querySelector('#nav-list-popup-designs');
      this.slides = this.main.querySelectorAll('.popup-design-slider__style-slide'), //slides
      this.sliderCounterContentCurrent = document.querySelector('#popup-designs-counter .slider-counter-content__current');
      this.currentSlide = 0;
      this.count = 0;
  }

  init(){
    this.setDisplay();
    this.eventListener();
  }

  setDisplay(){
    [...this.slides].forEach((item, i) => {
      if (i !== 0) item.classList.add('hide');
    });
  }
  
  setCounter(elem){ //счетчик слайдов +
    [...elem].forEach((item) => {
      if (item.matches('.show-slide')) {
        let itemDataNum = item.dataset.num;
        this.sliderCounterContentCurrent.textContent = itemDataNum;
      }
    });
  };

  prevSlide(elem, index, strClass){
    elem[index].classList.add(strClass);
    elem[index].classList.remove('show-slide');
  }

  nextSlide(elem, index, strClass){
    elem[index].classList.remove(strClass);
    elem[index].classList.add('show-slide');
  }


  eventListener(){

      this.tabHeader.addEventListener('click', (e) => {
        this.sliderCounterContentCurrent.textContent = this.slides[0].dataset.num;
        this.currentSlide = 0;
      });

      this.wrap.addEventListener('click', (event) => {
        event.preventDefault();
        let target = event.target;
        const slides = document.querySelector('.popup-design-slider .show').children;
   
        this.prevSlide(slides, this.currentSlide, 'hide');

        if (target.closest('#popup_design_right')) {
          this.setCounter(slides);
          this.currentSlide++;
        } else if (target.closest('#popup_design_left')) {
          this.currentSlide--;
          this.setCounter(slides);
        }
        if (this.currentSlide >= slides.length) {
          this.currentSlide = 0;
        }
        if (this.currentSlide < 0) {
          this.currentSlide = slides.length - 1;
        }
        this.nextSlide(slides, this.currentSlide, 'hide');
      });
  }
};

export default PopupDesignSlider;