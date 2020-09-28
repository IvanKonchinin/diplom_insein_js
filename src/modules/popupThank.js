const popupThank = () => {
  document.addEventListener('click', (e)=>{
    let target = e.target;
    const popupThank = document.querySelector('.popup-thank');
    if(target.matches('.popup') || target.closest('.close')){
      popupThank.style.visibility = 'hidden';
    }
  });
};

export default popupThank;