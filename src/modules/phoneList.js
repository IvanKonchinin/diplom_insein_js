const phoneList = ()=> {
  const headerContactsArrow = document.querySelector('.header-contacts__arrow');
  const headerContactsPhoneNumberAccord = document.querySelector('.header-contacts__phone-number-accord');
  const headerContactsPhoneNumber = headerContactsPhoneNumberAccord.querySelector('.header-contacts__phone-number');

  headerContactsArrow.addEventListener('click', (e)=>{
    headerContactsPhoneNumberAccord.classList.toggle('show-phone-header-wrap');
    headerContactsPhoneNumber.classList.toggle('show-phone-header-link');
  });
}

export default phoneList;