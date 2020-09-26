const repairTypesMenu = () => {
  
  const navListRepair = document.querySelector('.nav-list-repair');
  const repairTypesNavItem = document.querySelectorAll('.repair-types-nav__item');
  const typesRepairContent = document.querySelectorAll('.types-repair-content');
  const sliderArrow = document.querySelectorAll('.repair-types-slider-wrap .slider-arrow');
  const sliderCounterContentCurrent = document.querySelector('.slider-counter-repair .slider-counter-content__current');
  const sliderCounterContentTotal = document.querySelector('.slider-counter-repair .slider-counter-content__total');

  const setCountSlides = () => {
    sliderCounterContentTotal.textContent = typesRepairContent[0].children.length;
  };

  setCountSlides();

  const getSlidesCount = () => {
     [...typesRepairContent].forEach((item) => { //кол-во слайдов
       if(item.matches('.show')){
         const itemSlides = item.children.length;
         sliderCounterContentTotal.textContent = itemSlides;
         sliderCounterContentCurrent.textContent = 1;
       }
     });
  };
   
  const hideTabContent = (elem) => {
    for (let i = elem; i < typesRepairContent.length; i++) {
      typesRepairContent[i].classList.remove('show');
      typesRepairContent[i].classList.add('hide');
    }
  }
  hideTabContent(1);

  const showTabContent = (y)=> {
    if (typesRepairContent[y].classList.contains('hide')) {
      typesRepairContent[y].classList.remove('hide');
      typesRepairContent[y].classList.add('show');
    }
  }
  
  navListRepair.addEventListener('click', (e)=>{
    let target = e.target;
    
    

    repairTypesNavItem.forEach((item)=>{
      item.classList.remove('active');
      target.classList.add('active');
    });

     [...typesRepairContent].forEach((item) => { //обнуление смещения
       item.style.transform = 'translateX(0px)';
     });

     [...sliderArrow].forEach((item, i)=>{ //обнуление стрелок
          item.disabled = i === 0  ? true : false;
     });

    if (target && target.classList.contains('repair-types-nav__item')) {
      for (let i = 0; i < repairTypesNavItem.length; i++) {
        if (target === repairTypesNavItem[i]) {
          hideTabContent(0);
          showTabContent(i);
          break;
        }
      }
    }
    getSlidesCount();
});
};

export default repairTypesMenu;