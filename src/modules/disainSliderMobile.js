const disainSliderMobile = () => {
    const wrap = document.querySelector('.designs-slider__style1');
    const slide = wrap.querySelectorAll('.designs-slider__style-slide');
    const dot = document.querySelectorAll('.visible .preview-block__item-inner');
    const slider = document.querySelector('.designs-slider-wrap');

    let currentSlide = 0;
    
    const prevSlide = (elem, index) => {
      elem[index].classList.add('hide');
      elem[index].classList.remove('show');
    }
    const nextSlide = (elem, index) => {
      elem[index].classList.add('show');
      elem[index].classList.remove('hide');
    }
     const prevTab = (elem, index) => {
       elem[index].classList.remove('preview_active');
     }
     const nextTab = (elem, index) => {
       elem[index].classList.add('preview_active');
     }

    slider.addEventListener('click', (event) => {
      event.preventDefault();
      let target = event.target;
      
      // if (!target.matches('.portfolio-btn, .dot')) {
      //   return;
      // }

      prevSlide(slide, currentSlide);
      prevTab(dot, currentSlide);
      
      if (target.closest('#design_right')) {
        currentSlide++;
      } else if (target.closest('#design_left')) {
        currentSlide--;
      } 
      if (currentSlide >= slide.length) {
        currentSlide = 0;
      }
      if (currentSlide < 0) {
        currentSlide = slide.length - 1;
      }
      nextSlide(slide, currentSlide);
      nextTab(dot, currentSlide);

    });
};


export default disainSliderMobile;