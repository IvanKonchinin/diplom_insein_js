const tabs = () => {
  const tabHeader = document.querySelector('.nav-list-designs');
  const tab = tabHeader.querySelectorAll('.designs-nav__item');
  const preview = document.querySelectorAll('.preview-block');
  const tabContent = document.querySelector('.designs-slider').children;

   window.addEventListener('resize', () => {
     if (window.innerWidth > 1024) tabHeader.style.transform = 'translateX(0)';
   });

  [...tabContent].forEach((item,i)=>{
    if (i !== 0) {
      item.classList.add('hide');
    } else {
      item.classList.add('show');
    }
  });

     const gettabContentItemChildren = () => {//счетчик
       const sliderCounterContentTotal = document.querySelector('.designs-slider-wrap .slider-counter-content__total');
       const sliderCounterContentCurrent = document.querySelector('.designs-slider-wrap .slider-counter-content__current');
       [...tabContent].forEach((item, i) => {
         if (!item.classList.contains('hide')) {
           sliderCounterContentTotal.textContent = item.children.length;
           
         }
       });
     };
     gettabContentItemChildren();

  const toggleTabContent = (index) => {
    for (let i = 0; i < tabContent.length; i++) {
      if (index === i) {
        tab[i].classList.add('active');
        tabContent[i].classList.remove('hide');
        tabContent[i].classList.add('show');
      } else {
        tab[i].classList.remove('active');
        tabContent[i].classList.add('hide');
        tabContent[i].classList.remove('show');
      }
    }
    for (let i = 0; i < preview.length; i++) {
      if (index === i) {
        preview[i].classList.add('visible');
      } else {
        preview[i].classList.remove('visible');
      }
    }
  }

  tabHeader.addEventListener('click', (e) => {
    
    let target = e.target;
    target = target.closest('.designs-nav__item');

    if (target) {
      tab.forEach((item, i) => {
        if (item === target) {
          toggleTabContent(i);
          gettabContentItemChildren();
        }
      })
    }
  });

}

export default tabs;