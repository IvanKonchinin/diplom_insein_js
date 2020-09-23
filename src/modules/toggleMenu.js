function goResize() {
  let getSize = document.documentElement.clientWidth;
  const popupDialogMenu = document.querySelector('.popup-dialog-menu');

  popupDialogMenu.style.transform = getSize < 576 ? 'translate3d(0px, -645px, 0)' : 'translate3d(645px, 0, 0)';

  return document.documentElement.clientWidth;
}
  
window.addEventListener('resize', goResize);

const toggleMenu = () => {
  const popupMenu = document.querySelector('.popup-menu');
  const popupDialogMenu = document.querySelector('.popup-dialog-menu');
  //const closeMenu = popupDialogMenu.querySelector('.close-menu');
  //const openMenu = document.querySelector('.header .menu');
  document.addEventListener('click', (e) => {
    let target = e.target;
    let getSize = goResize();
    
    if (target.matches('.menu__icon') && getSize > 576) {
      popupMenu.style.visibility = 'visible';
      popupDialogMenu.style.transform = 'translate3d(0px, 0, 0)';
    } else  {
      if (target.matches('.menu__icon') && getSize < 576){
        popupMenu.style.visibility = 'visible';
        popupDialogMenu.style.transform = 'translate3d(0px, 0, 0)';
      }
    }

    if (target.matches('.close-menu') && getSize > 576) {
      popupMenu.style.visibility = 'hidden';
      popupDialogMenu.style.transform = 'translate3d(645px, 0, 0)';
    } else {
      if (target.matches('.close-menu') && getSize < 576){
        popupMenu.style.visibility = 'hidden';
        popupDialogMenu.style.transform = 'translate3d(0px, -645px, 0)';
      }
      
    }
  });
};

export default toggleMenu;