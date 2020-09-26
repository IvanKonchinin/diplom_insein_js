const popupTransparency = () => {
  const popupTransparency = document.querySelector('.popup-transparency');

  document.addEventListener('click', (e)=>{
    let target = e.target;
    if (target.closest('.transparency-item__img')){
      popupTransparency.style.visibility = 'visible';
    }
    if(target.matches('.close') || target.matches('.popup')){
      popupTransparency.style.visibility = 'hidden';
    } 
  });
};

export default popupTransparency;