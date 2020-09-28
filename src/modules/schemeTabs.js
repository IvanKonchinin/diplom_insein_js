const schemeTabs = () => {
  const wrap = document.querySelector('.scheme-slider-wrap');
  const tabHeader = document.querySelector('#scheme-list');
  const tab = tabHeader.querySelectorAll('.scheme-nav__item');
  const preview = document.querySelectorAll('.scheme-description-block');
  const tabContent = document.querySelector('.scheme-slider').children;

  [...tabContent].forEach((item, i) => {
    if (i !== 0) item.style.display = 'none';
  });

  const toggleTabContent = (index) => {
    for (let i = 0; i < tabContent.length; i++) {
      if (index === i) {
        tab[i].classList.add('active');
        tabContent[i].style.display = '';
      } else {
        tab[i].classList.remove('active');
        tabContent[i].style.display = 'none';
      }
    }
    for (let i = 0; i < preview.length; i++) {
      if (index === i) {
        preview[i].classList.add('visible-content-block');
      } else {
        preview[i].classList.remove('visible-content-block');
      }
    }
  }

  tabHeader.addEventListener('click', (e) => {
    let target = e.target;
    target = target.closest('.scheme-nav__item');

    if (target) {
      tab.forEach((item, i) => {
        if (item === target) {
          toggleTabContent(i);
        }
      })
    }
  });

}

export default schemeTabs;