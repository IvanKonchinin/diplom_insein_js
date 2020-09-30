const visible = function (target) {
  target = target.querySelector('.formula-item-popup');
  if(target.closest('.row') === null) return;
     let targetBlockHeight = target.clientHeight;
     let targetBlockDescHeight = target.closest('.formula-item').querySelector('.formula-item__descr').clientHeight;
    
  if (target.getBoundingClientRect().top < 0) {
    target.classList.add('active');
    target.style.bottom = '-' + (targetBlockHeight + targetBlockDescHeight + 10) + 'px';
    target.closest('.row').style.zIndex = 3;
  } else {
    target.classList.remove('active');
    target.style.bottom = '';
    target.closest('.row').style.zIndex = '';
  };
};

const formulaItemPopup = (e) => {
  let target = e.target;
  if (target.closest('.formula-item')){
    const formulaItem = target.closest('.formula-item');
    if (formulaItem) {
      formulaItem.classList.toggle('active-item');
      visible(formulaItem);
    }
  }
};
document.querySelector('.formula').addEventListener('mouseover', formulaItemPopup);
document.querySelector('.formula').addEventListener('mouseout', formulaItemPopup);


export default formulaItemPopup;