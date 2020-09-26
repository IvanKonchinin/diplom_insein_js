const popupPortfolio = () => {
  const itemHover = document.querySelector('.portfolio-slider .item-hover');
  const popupPortfolio = document.querySelector('.popup-portfolio');
  const close = popupPortfolio.querySelector('.close');

  document.addEventListener('click', (e)=>{
    let target = e.target;
    
    if (target.closest('.portfolio-slider') && target.closest('.portfolio-slider').querySelector('.item-hover')) {
      popupPortfolio.style.visibility = 'visible';
    }
    else if (target.closest('.popup-portfolio') && target.matches('.close')) {
      popupPortfolio.style.visibility = 'hidden';
    }
    else if (target.matches('.popup')){
      popupPortfolio.style.visibility = 'hidden';
    }
  });
};

export default popupPortfolio;