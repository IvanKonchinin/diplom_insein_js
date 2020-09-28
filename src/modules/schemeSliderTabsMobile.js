const schemeSliderTabsMobile = () => {
  let position = 0;
  const navListRepair = document.querySelector('#scheme-list'); //track
  const navArrowRepairLeftBase = document.querySelector('#nav-arrow-scheme_left'); //prev
  const navArrowRepairRightBase = document.querySelector('#nav-arrow-scheme_right'); //next
  const repairTypesNavItem = document.querySelectorAll('#scheme-list .scheme-nav__item'); //slides
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
    return itemWidthArr[count] + ((navListRepair.clientWidth - itemWidthArr.reduce(function (a, b) {
      return (a + b)
    })) / (repairTypesNavItem.length - 1));
  };

  const getMovePosition = () => {
    let itemWidth = getItemWidth();
    const movePosition = (slidesToScroll * itemWidth);
    return Math.round(movePosition);
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
    let itemWidth = getItemWidth();
    navArrowRepairLeftBase.disabled = position === 0;
    navArrowRepairRightBase.disabled = position <= -(itemWidthArr.reduce(function (a, b) {
      return (a + b)
    }) - itemWidth * slidesToShow);
  };
  checkBtn();
}

export default schemeSliderTabsMobile;