const toggleMenu = () => {
  const popupMenu = document.querySelector('.popup-menu'),
        popupDialogMenu = document.querySelector('.popup-dialog-menu');

  const handlerMenu = () => {
    popupDialogMenu.classList.toggle('showHide-menu');
  }

  const scrollMenuItems = (e) => {

    let target = e.target;
    target = (target.tagName !== 'A') ? target.closest('a') : target;
    e.preventDefault();
    let itemHrefAttr = target.getAttribute('href');
    let blockSearch = document.querySelector(`${itemHrefAttr}`);
    if (blockSearch) blockSearch.scrollIntoView({
      block: 'center',
      behavior: 'smooth'
    });
  }

  document.addEventListener('click', (e) => {
    let target = e.target;
    
    if (target.matches('.menu__icon')) {
      popupMenu.style.visibility = 'visible';
      handlerMenu();
    }
    if (target.matches('.close-menu')) {
      popupMenu.style.visibility = 'hidden';
      handlerMenu();
    }
    if ((target.tagName === 'A' && target.closest('popupDialogMenu')) || target.closest('a') && target.closest('.popup-menu')) {
      scrollMenuItems(e);
      popupMenu.style.visibility = 'hidden';
      handlerMenu();
    }
    if (target.closest('.button-footer')){
      scrollMenuItems(e);
    }
  });
};

export default toggleMenu;