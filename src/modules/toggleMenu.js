const toggleMenu = () => {
  const popupMenu = document.querySelector('.popup-menu');
  const popupDialogMenu = document.querySelector('.popup-dialog-menu');

  const handlerMenu = () => {
    popupDialogMenu.classList.toggle('showHide-menu');
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
  });
};

export default toggleMenu;