const toggleMenu = () => {
  const popupMenu = document.querySelector('.popup-menu'),
        popupDialogMenu = document.querySelector('.popup-dialog-menu');

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
      popupDialogMenu.classList.add('showHide-menu');
    }
    if (target.matches('.close-menu') || target.matches('.popup')) {
      popupMenu.style.visibility = 'hidden';
      popupDialogMenu.classList.remove('showHide-menu');
    }
    if ((target.tagName === 'A' && target.closest('popup-menu-nav__item')) || target.closest('a') && target.closest('.popup-menu-nav__item')) {
      scrollMenuItems(e);
      popupMenu.style.visibility = 'hidden';
      popupDialogMenu.classList.remove('showHide-menu');
    }
    if (target.closest('.button-footer')){
      scrollMenuItems(e);
    }
  });
};

export default toggleMenu;