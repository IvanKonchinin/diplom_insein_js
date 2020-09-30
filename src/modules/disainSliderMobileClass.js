class DisainSliderMobileClass{
  constructor(wrap){
       
       this.slide = document.querySelector(wrap).children;
       this.slider = document.querySelector('.designs-slider-wrap');
       this.currentSlide = 0;
       this.sliderCounterContentCurrent = document.querySelector('.designs-slider-wrap .slider-counter-content__current');
       this.tabHeader = document.querySelector('#nav-list-popup-designs');
  }

  init(){
      this.eventListener();
  }

    setCounter(elem) { //счетчик слайдов +
      
      [...elem].forEach((item) => {
         console.log(elem, item);
        if (item.matches('.show')) {
          let itemDataNum = item.dataset.num;
          this.sliderCounterContentCurrent.textContent = itemDataNum;
        }
      });
    };


  prevSlide(elem, index){
    elem[index].classList.add('hide');
    elem[index].classList.remove('show');
  }
  nextSlide(elem, index){
    elem[index].classList.add('show');
    elem[index].classList.remove('hide');
  }


  eventListener(){
    this.tabHeader.addEventListener('click', (e) => {
      this.sliderCounterContentCurrent.textContent = this.slide[0].dataset.num;
      this.currentSlide = 0;
    });

    this.slider.addEventListener('click', (event) => {
      event.preventDefault();
      let target = event.target;
        const slides = document.querySelector('.designs-slider .show').children;
      if (!target.closest('#design_right, #design_left')) {
        return;
      }

      this.prevSlide(this.slide, this.currentSlide);
      
      if (target.closest('#design_right')) {
        this.setCounter(slides);
        this.currentSlide++;
      } else if (target.closest('#design_left')) {
        this.setCounter(slides);
        this.currentSlide--;
      }
      if (this.currentSlide >= this.slide.length) {
        this.currentSlide = 0;
      }
      if (this.currentSlide < 0) {
        this.currentSlide = this.slide.length - 1;
      }
      this.nextSlide(this.slide, this.currentSlide);

    });
  }

  
};

const startDisainSliderMobileClass = () => {
  const newDisainSliderMobileClass1 = new DisainSliderMobileClass('.designs-slider__style1');
  const newDisainSliderMobileClass2 = new DisainSliderMobileClass('.designs-slider__style2');
  const newDisainSliderMobileClass3 = new DisainSliderMobileClass('.designs-slider__style3');
  const newDisainSliderMobileClass4 = new DisainSliderMobileClass('.designs-slider__style4');
  const newDisainSliderMobileClass5 = new DisainSliderMobileClass('.designs-slider__style5');

  newDisainSliderMobileClass1.init();
  newDisainSliderMobileClass2.init();
  newDisainSliderMobileClass3.init();
  newDisainSliderMobileClass4.init();
  newDisainSliderMobileClass5.init();

};
export default startDisainSliderMobileClass;