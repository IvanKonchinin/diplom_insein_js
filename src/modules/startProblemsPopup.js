const problemsPopupShow = (e) => {
 let target = e.target;
 if (target.closest('.problems-item') && target.closest('.problems-item__icon')) {
    let targetItem = target.closest('.problems-item');
    let targetPopup = targetItem.querySelector('.problems-item-popup');
    targetPopup.style.cssText = `visibility:visible;opacity:1`;
    targetItem.classList.toggle('active-item');
    if (targetPopup.getBoundingClientRect().top < 0) {
      let targetBlockHeight = targetPopup.clientHeight;
      let targetBlockDescHeight = targetItem.clientHeight - targetItem.querySelector('.problems-item__icon').clientHeight;
      targetPopup.style.bottom = '-' + (targetBlockHeight + targetBlockDescHeight + 10) + 'px';
      targetPopup.classList.toggle('active');
      
    }
 }
};

const problemsPopupHide = (e) => {
  let target = e.target;
  if (target.closest('.problems-item')) {
    let targetItem = target.closest('.problems-item');
    let targetPopup = target.closest('.problems-item').querySelector('.problems-item-popup');
    targetPopup.style.cssText = `visibility:hidden;opacity:0`;
    targetPopup.style.bottom = '';
    targetPopup.classList.remove('active');
    targetItem.classList.remove('active-item');
  }
};

const startProblemsPopup = () => {
  document.querySelector('.problems').addEventListener('mouseover', problemsPopupShow);
  document.querySelector('.problems').addEventListener('mouseout', problemsPopupHide);
};


export default startProblemsPopup;