const repireSliderMobile = () => {
  let position = 0;
  const repairTypesNav = document.querySelector('.repair-types-nav');//wrap
  const navListRepair = document.querySelector('.nav-list-repair');//track
  const navArrowRepairLeftBase = document.querySelector('#nav-arrow-repair-left_base');//prev
  const navArrowRepairRightBase = document.querySelector('#nav-arrow-repair-right_base');//next
  const repairTypesNavItem = document.querySelectorAll('.nav-list-repair .repair-types-nav__item'); //slides
  const slidesToScroll = 1;
  const slidesToShow = 1;
  let count = 0;

  const slidesWidth = () => {
     let itemWidthArr = [];
     repairTypesNavItem.forEach((item) => {
       itemWidthArr.push(item.clientWidth);
     });
     return itemWidthArr;
  };

  const getItemWidth = () => {
    let itemWidthArr = [];
     repairTypesNavItem.forEach((item) => {
     itemWidthArr.push(item.clientWidth);
     });
     
     return itemWidthArr[count] + ((navListRepair.clientWidth - itemWidthArr.reduce(function(a,b){return(a+b)})) / (repairTypesNavItem.length - 1));
  };
 
   const getMovePosition = () => {
     let itemWidth = getItemWidth();
     const movePosition = (slidesToScroll * itemWidth);
     return movePosition;
   };

   navArrowRepairLeftBase.addEventListener('click', (e) => {
     count--;
     position += getMovePosition();
     navListRepair.style.transform = `translateX(${position}px)`;
     checkBtn();
   });

   navArrowRepairRightBase.addEventListener('click', (e) => {
     position -= getMovePosition();
     navListRepair.style.transform = `translateX(${position}px)`;
     count++;
     checkBtn();

   });

   const checkBtn = () => {
      let itemWidthArr = slidesWidth();
      navArrowRepairLeftBase.disabled = position === 0;
      navArrowRepairRightBase.disabled = position <= -(itemWidthArr.reduce(function (a, b) {return (a + b)}) - itemWidthArr[itemWidthArr.length - 1]);
   };
   checkBtn();
}

export default repireSliderMobile;