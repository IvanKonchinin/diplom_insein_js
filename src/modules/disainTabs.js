const tabs = () => {
  const tabHeader = document.querySelector('.nav-list-designs');
  const tab = tabHeader.querySelectorAll('.designs-nav__item');
  const preview = document.querySelectorAll('.preview-block');
  const tabContent = document.querySelector('.designs-slider').children;

  [...tabContent].forEach((item,i)=>{
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
        }
      })
    }
  });

}

export default tabs;