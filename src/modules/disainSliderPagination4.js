const disainSliderPagination4 = () => {
  const tabHeader = document.querySelector('#designs');
  const wrap = document.querySelector('.designs-slider__style4')
  const tabContent = wrap.querySelectorAll('.designs-slider__style-slide');



  [...tabContent].forEach((item, i) => {
    if (i !== 0) item.style.display = 'none';
  });

  const toggleTabContent = (index, tabs) => {


    for (let i = 0; i < tabContent.length; i++) {

      if (index === i) {

        tabs[i].classList.add('preview_active');
        tabContent[i].style.display = '';
      } else {


        tabs[i].classList.remove('preview_active');
        tabContent[i].style.display = 'none';
      }
    }
  }

  tabHeader.addEventListener('click', (e) => {

    const tab = document.querySelectorAll('.visible .preview-block__item-inner');
    let target = e.target;
    target = target.closest('.minimal');

    if (target && target.closest('.visible')) {
      tab.forEach((item, i) => {
        if (item === target) {
          toggleTabContent(i, tab);

        }
      })
    }
  });

}

export default disainSliderPagination4;