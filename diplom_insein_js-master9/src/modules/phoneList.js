const phoneList = ()=> {
  const headerContactsArrow = document.querySelector('.header-contacts__arrow');
  const headerContactsPhoneNumberAccord = document.querySelector('.header-contacts__phone-number-accord');

  headerContactsArrow.addEventListener('click', ()=>{
    
    headerContactsPhoneNumberAccord.classList.toggle('header-accord-active');
    headerContactsArrow.classList.toggle('header-accord-arrow-active');
  });
}

export default phoneList;