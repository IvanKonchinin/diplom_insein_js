const transparencySlider = () => {
  const wrap = document.querySelector('.transparency-slider-wrap');//wrap
  const track = wrap.querySelector('.transparency-slider'); //track
  const slide = track.querySelectorAll('.transparency-item'); //slides
  let currentSlide = 0;

  const prevSlide = (elem, index, strClass) => {
    elem[index].classList.remove(strClass);
  }

  const nextSlide = (elem, index, strClass) => {
    elem[index].classList.add(strClass);
  }

     wrap.addEventListener('click', (event) => {
       event.preventDefault();
       let target = event.target;
      console.log(target.closest('.slider-arrow'));
       if (!target.closest('.slider-arrow')) {
         return;
       }

       prevSlide(slide, currentSlide, 'transparency-item-show');

       if (target.closest('#transparency-arrow_right')) {
         currentSlide++;
       } else if (target.closest('#transparency-arrow_left')) {
         currentSlide--;
       } 
       if (currentSlide >= slide.length) {
         currentSlide = 0;
       }
       if (currentSlide < 0) {
         currentSlide = slide.length - 1;
       }
       nextSlide(slide, currentSlide, 'transparency-item-show');

     });
};

export default transparencySlider;