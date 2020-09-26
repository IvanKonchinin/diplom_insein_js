const popupRepairTypesModal = () => {
  const popupRepairModal = document.querySelector('.popup-repair-types'),
        popupDialogMenu = document.querySelector('.popup-dialog-menu'),
        popup = document.querySelector('.popup');

  document.addEventListener('click', (e)=>{
    let target = e.target;
    if((target.matches('.menu-link') && target.closest('.link-list-menu')) || target.closest('.link-list-repair')){
      popupRepairModal.classList.toggle('popup-repair-types-show');
      popupDialogMenu.classList.remove('showHide-menu');
      popup.style.visibility = 'hidden';
    }
    if (target.matches('.close') && target.closest('.popup-repair-types')) {
      popupRepairModal.classList.toggle('popup-repair-types-show');
    }
  });
};

export default popupRepairTypesModal;
