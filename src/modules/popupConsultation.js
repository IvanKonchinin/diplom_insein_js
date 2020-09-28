const popupConsultation = () => {
    const popupConsultation = document.querySelector('.popup-consultation');

    document.addEventListener('click', (e)=>{
      let target = e.target;
      if (target.matches('.button_wide')){
        popupConsultation.style.visibility = 'visible';
      }
      if(target.matches('.close') || target.matches('.popup')){
        popupConsultation.style.visibility = 'hidden';
      }
    });
};

export default popupConsultation;