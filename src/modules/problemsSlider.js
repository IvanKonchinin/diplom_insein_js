class problemsSliderCarousel {
  constructor({
    main,
    wrap,
    next,
    prev,
    position = 0,
    slidesToShow = 3,
    infinity = true,
    responsive = []
  }) {
    if (!main || !wrap) {
      console.warn('slider-carousel: Необходимо 2 селектора, "main" и "wrap"');
    }
    this.main = document.querySelector(main);
    this.wrap = document.querySelector(wrap);
    this.slides = document.querySelector(wrap).children;
    this.next = document.querySelector(next);
    this.prev = document.querySelector(prev);
    this.slidesToShow = slidesToShow;
    this.options = {
      position,
      infinity,
      widthSlide: 100 / Math.floor(this.slidesToShow)
    };
    this.responsive = responsive;
  }

  init() {

    this.addGloClass();
    this.addStyle();
    if (this.prev && this.next) {
      this.controlSlider();
    } else {
      this.addArrow();
      this.controlSlider();
    }
    if (this.responsive) {

      this.responsInit();
    }
  }

  addGloClass() {
    this.main.classList.add('glo-slider');
    this.wrap.classList.add('glo-slider__wrap');
    for (const item of this.slides) {
      item.classList.add('glo-slider__item');
    }
  }

  addStyle() {
    let style = document.getElementById('sliderCarousel-style');
    if (!style) {
      style = document.createElement('style');
      style.id = 'sliderCarousel-style';
    }

    style.textContent = `
      .glo-slider{
        overflow:hidden;
      }
      .glo-slider__wrap{
        display: flex;
        transition: transform 0.5s;
        will-change: transform;
      }
      .glo-slider__item{
        margin: 0 auto;
        display:flex;
        justify-content:center;
        align-items: center;
        flex: 0 0 ${this.options.widthSlide}%;
        align-self: baseline;
      }
      .glo-slider__prev, .glo-slider__next{
        margin: 0 10px;
        border: 20px solid transparent;
        background: transparent;
        outline: none;
      }
      .glo-slider__next{
        border-left-color: #19b5fe;
      }
      .glo-slider__prev {
        border-right-color: #19b5fe;
      }
    `;
    document.head.appendChild(style);
  }



  controlSlider() {
    this.prev.addEventListener('click', this.prevSlider.bind(this));
    this.next.addEventListener('click', this.nextSlider.bind(this));
  }

  prevSlider() {
    if (this.options.infinity || this.options.position > 0) {
      --this.options.position;
      if (this.options.position < 0) {
        this.options.position = this.slides.length - this.slidesToShow;
      }
      this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`
    }
  }
  nextSlider() {
    if (this.options.infinity || this.options.position < this.slides.length - this.slidesToShow) {
      ++this.options.position;
      if (this.options.position > this.slides.length - this.slidesToShow) {
        this.options.position = 0;
      }
      this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`
    }
  }
  addArrow() {
    this.prev = document.createElement('button');
    this.next = document.createElement('button');

    this.prev.className = 'glo-slider__prev';
    this.next.className = 'glo-slider__next';

    this.main.appendChild(this.prev);
    this.main.appendChild(this.next);


  }

  responsInit() {
    const slidesToShowDefault = this.slidesToShow;
    const allRespone = this.responsive.map(item => item.breakpoint);
    const maxResponse = Math.max(...allRespone);

    const checkResponse = () => {

      const widthWindow = document.documentElement.clientWidth;
      if (widthWindow < maxResponse) {
        for (let i = 0; i < allRespone.length; i++) {
          if (widthWindow < allRespone[i]) {
            this.slidesToShow = this.responsive[i].slidesToShow;
            this.options.widthSlide = Math.floor(100 / this.slidesToShow);
            this.addStyle();

          }
        }
      } else {
        this.slidesToShow = slidesToShowDefault;
        this.options.widthSlide = Math.floor(100 / this.slidesToShow);
        this.addStyle();
      }
    };
    checkResponse();
    window.addEventListener('resize', checkResponse);
  }
}

const startProblemsCarousel = () => {
  const options = {
    main: '.problems-slider-wrap',
    wrap: '.problems-slider',
    prev: '#problems-arrow_left',
    next: '#problems-arrow_right',
    slidesToShow: 3,
    infinity: true,
    responsive: [{
        breakpoint: 1024,
        slidesToShow: 3
      },
      {
        breakpoint: 768,
        slidesToShow: 2
      },
      {
        breakpoint: 576,
        slidesToShow: 1
      }
    ]
  }

  const carousel = new problemsSliderCarousel(options);

  carousel.init();
};

export default startProblemsCarousel;