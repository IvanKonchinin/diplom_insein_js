const disainPopupTabs = () => {
  const tabHeader = document.querySelector('#nav-list-popup-designs');
  const tab = tabHeader.querySelectorAll('.designs-nav__item_popup');
  const popupPortfolioTextItems = document.querySelectorAll('.popup-design-text');
  const tabContent = document.querySelector('.popup-design-slider').children;
  const slides = document.querySelectorAll('.popup-design-slider__style-slide');

  [...tabContent].forEach((item, i) => {
    if (i !== 0) item.classList.add('hide');
  });

  const gettabContentItemChildren = () => {
  const sliderCounterContentTotal = document.querySelector('#popup-designs-counter .slider-counter-content__total');
  const sliderCounterContentCurrent = document.querySelector('#popup-designs-counter .slider-counter-content__current');
    
    [...tabContent].forEach((item, i) => {
        

      if (!item.classList.contains('hide')) {
        sliderCounterContentTotal.textContent = item.children.length;
        
      }
    });

 
  };
 


  const toggleTabContent = (index) => {
    for (let i = 0; i < tabContent.length; i++) {
      if (index === i) {
        tab[i].classList.add('active');
        popupPortfolioTextItems[i].classList.add('visible-content-block');
        tabContent[i].classList.remove('hide');
        tabContent[i].classList.add('show');
      } else {
        tab[i].classList.remove('active');
        popupPortfolioTextItems[i].classList.remove('visible-content-block');
        tabContent[i].classList.add('hide');
        tabContent[i].classList.remove('show');
      }
    }
   }

  tabHeader.addEventListener('click', (e) => {
     
    let target = e.target;
    target = target.closest('.designs-nav__item_popup');

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

export default disainPopupTabs;