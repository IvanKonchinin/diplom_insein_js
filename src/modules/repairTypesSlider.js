class RepairTypesSlider {
  constructor({main, wrap, next, prev, position = 0, slidesToShow = 1, slidesToScroll = 1, count = 1}) {

  this.main = document.querySelector(main); //container
  this.wrap = document.querySelector(wrap); //track
  this.slides = [...document.querySelector(wrap).children]; //item
  this.next = document.querySelector(next);
  this.prev = document.querySelector(prev);
  this.slidesToShow = slidesToShow;
  this.slidesToScroll = slidesToScroll;
  this.count = count;
  this.options = {
    position,
  }
 
  this.itemsCount = this.slides.length;
  this.itemWidth = this.main.clientWidth / this.slidesToShow;
  this.movePosition = this.slidesToScroll * this.itemWidth;
  }

  init(){
    this.setWidthSlides();
    this.nextSlider();
    this.prevSlider();
    this.setPosition();
    this.checkBtn();
    this.checkMenu();
  }

  checkMenu() {//проверка position
    const navListRepair = document.querySelector('.nav-list-repair');
    navListRepair.addEventListener('click', (e)=>{
      let target = e.target;
      if (target.closest('.repair-types-nav__item')) {
        this.options.position = 0;
        this.count = 1;
        this.checkBtn();
      }
    });
  };

  setWidthSlides(){
    this.slides.forEach((item) => { //установка ширины слайдов
      item.style.width = `${this.itemWidth}px`;
    });
  }

  setNumSlidePlus(){
    const sliderCounterContentCurrent = document.querySelector('.slider-counter-repair .slider-counter-content__current');
    this.count++;
    sliderCounterContentCurrent.textContent = this.count;
  }

  setNumSlideMinus() {
    const sliderCounterContentCurrent = document.querySelector('.slider-counter-repair .slider-counter-content__current');
    this.count--;
    sliderCounterContentCurrent.textContent = this.count;
  }
  
  nextSlider() {
     this.next.addEventListener('click', () => { //стрелка вправо
       const itemsLeft = this.itemsCount - (Math.abs(this.options.position) + this.slidesToShow * this.itemWidth) / this.itemWidth; //расчет ширины скроллинга
       this.options.position -= itemsLeft >= this.slidesToScroll ? this.movePosition : itemsLeft * this.itemWidth;
       this.setPosition();
       this.checkBtn();
       this.setNumSlidePlus();
       
     });
  }
 
  prevSlider() {
    
       this.prev.addEventListener('click', () => { //стрелка влево

         const itemsLeft = Math.abs(this.options.position) / this.itemWidth;
         this.options.position += itemsLeft >= this.slidesToScroll ? this.movePosition : itemsLeft * this.itemWidth;
         
         this.setPosition();
         this.checkBtn();
         this.setNumSlideMinus();
       });
  }
  

   setPosition() {//перемещение слайдов
    if (this.wrap.matches('.show')){
      this.wrap.style.transform = `translateX(${this.options.position}px)`;
    }
   }

  

   checkBtn() { //проверка кнопок

    const getCurrentCountSlides = ()=> {
      let curentCountSlides;
      [...document.querySelectorAll('.types-repair-content')].forEach((item) => {
        if (item.matches('.show')) curentCountSlides = item.children.length;
      });
      return curentCountSlides;
    }
    this.prev.disabled = this.options.position === 0;
    this.next.disabled = this.options.position <= -(getCurrentCountSlides() - this.slidesToShow) * this.itemWidth;
  }
};

const startSliders = () => {
  const options1 = {
    main: '.repair-types-slider-wrap',
    wrap: '.types-repair1',
    prev: '.repair-types-slider-wrap .slider-arrow_left',
    next: '.repair-types-slider-wrap .slider-arrow_right'
  }
  const options2 = {
    main: '.repair-types-slider-wrap',
    wrap: '.types-repair2',
    prev: '.repair-types-slider-wrap .slider-arrow_left',
    next: '.repair-types-slider-wrap .slider-arrow_right',
  }
  const options3 = {
    main: '.repair-types-slider-wrap',
    wrap: '.types-repair3',
    prev: '.repair-types-slider-wrap .slider-arrow_left',
    next: '.repair-types-slider-wrap .slider-arrow_right'
  }
  const options4 = {
    main: '.repair-types-slider-wrap',
    wrap: '.types-repair4',
    prev: '.repair-types-slider-wrap .slider-arrow_left',
    next: '.repair-types-slider-wrap .slider-arrow_right'
  }
  const options5 = {
    main: '.repair-types-slider-wrap',
    wrap: '.types-repair5',
    prev: '.repair-types-slider-wrap .slider-arrow_left',
    next: '.repair-types-slider-wrap .slider-arrow_right'
  }


  const slider1 = new RepairTypesSlider(options1);
  const slider2 = new RepairTypesSlider(options2);
  const slider3 = new RepairTypesSlider(options3);
  const slider4 = new RepairTypesSlider(options4);
  const slider5 = new RepairTypesSlider(options5);


  slider1.init();
  slider2.init();
  slider3.init();
  slider4.init();
  slider5.init();
  
};




export {RepairTypesSlider, startSliders};