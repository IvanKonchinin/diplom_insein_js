const popupDesign = () => {
  const popupDesignModal = document.querySelector('.popup-design');

    const gettabContentItemChildren = () => {
      const sliderCounterContentTotal = document.querySelector('#popup-designs-counter .slider-counter-content__total');
      const tabContent = document.querySelector('.popup-design-slider').children;
      [...tabContent].forEach((item, i) => {
        if (!item.classList.contains('hide')) {
          
          sliderCounterContentTotal.textContent = item.children.length;
        }
      });
    };

  document.addEventListener('click', (e) => {
    gettabContentItemChildren();
    let target = e.target;
    if ((target.matches('a') && target.closest('.link-list-designs'))) {
      popupDesignModal.classList.toggle('popup-repair-types-show');
    }
    else if (target.matches('.close') && target.closest('.popup-design')) {
      popupDesignModal.classList.toggle('popup-repair-types-show');
    }
    else if (target.matches('.popup')) {
      popupDesignModal.classList.remove('popup-repair-types-show');
    }
  });
};

export default popupDesign;