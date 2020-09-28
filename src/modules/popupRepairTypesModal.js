const repairTypesPopupTabs = () => {
  const tabHeader = document.querySelector('.nav-popup .nav-list-popup-repair');
  const tab = document.querySelectorAll('.popup-repair-types-nav__item');
  const preview = document.querySelectorAll('.popup-repair-types-content__head-title');
  const tabContent = document.querySelector('.popup-repair-types-content-table').children;
console.log(tabContent[0]);
  const toggleTabContent = (index) => {
    for (let i = 0; i < tabContent.length; i++) {
      if (index === i) {
        tab[i].classList.add('active');
        tabContent[i].classList.add('show');
      } else {
        tab[i].classList.remove('active');
        tabContent[i].classList.remove('show');
      }
    }
    for (let i = 0; i < preview.length; i++) {
      if (index === i) {
        preview[i].classList.add('show');
      } else {
        preview[i].classList.remove('show');
      }
    }
  }

  document.addEventListener('click', (e) => {

    let target = e.target;

    if (target.classList.contains('popup-repair-types-nav__item')) {

      [...tab].forEach((item, i) => {

        if (item === target) {
          toggleTabContent(i);

        }
      })
    }
  });

}



const loadingDataRepairTypes = () => {//запрос в БД

      return fetch('./db/db.json', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      });
    
};

const getRepairTypesTabs = (data) =>{
  const navListPopupRepairWrap = document.querySelector('.nav-list-popup-repair');
  const popupRepairTypesContentHead = document.querySelector('.popup-repair-types-content__head');
  
  navListPopupRepairWrap.innerHTML = '';
  popupRepairTypesContentHead.innerHTML = '';
    data.forEach((item, i) => {
      
      if (item.title){
        let active = (i === 1) ? ' active' : '';
        let show = (i === 1) ? ' show' : '';
          navListPopupRepairWrap.insertAdjacentHTML('beforeend', `<button class="button_o popup-repair-types-nav__item${active}">${item.title}</button>`);
          popupRepairTypesContentHead.insertAdjacentHTML('afterbegin', `<div class="popup-repair-types-content__head-title${show}" id="switch-inner">${item.title}</div>`);
      }
      else if(i === 0){
          popupRepairTypesContentHead.insertAdjacentHTML('afterbegin', `<div class="popup-repair-types-content__head-date">${data[0].date}<i><i></i></i></div>`);
      }
    });
};

const getRepairpriceList = (data) => {//прайслист
  let priceListArr = [];
  data.forEach((item)=>{
    if(item.priceList) priceListArr.push(item.priceList);
  })
  return priceListArr;
};

const setDataTable = (data) => {
  const priceListArr = getRepairpriceList(data);
  const popupRepairTypesContentTable = document.querySelector('.popup-repair-types-content-table');
  popupRepairTypesContentTable.innerHTML = '';
  
  
  priceListArr.forEach((item, i)=>{
    let newTd = '';
    
    item.forEach((items, i)=>{
      let showHide = '';
      if(i === 0) showHide = 'showHide';
      
       newTd += `
          <tr class="mobile-row ${showHide}">
            <td class="repair-types-name">${items.typeService}</td> 
            <td class="mobile-col-title tablet-hide desktop-hide"> Ед.измерения </td> 
            <td class="mobile-col-title tablet-hide desktop-hide"> Цена за ед. </td> 
            <td class="repair-types-value">${items.units}</td>
            <td class="repair-types-value">${items.cost}</td> 
          </tr>
        `;
    });

    let show = (i === 0) ? 'show' : '';
    popupRepairTypesContentTable.insertAdjacentHTML('beforeend', 
    `<table class="popup-repair-types-content-table__list ${show}">
      <tbody>
        ${newTd}
      </tbody>
    </table>`);
  });

}


const popupRepairTypesModal = () => {
  const popupRepairModal = document.querySelector('.popup-repair-types');
        //popupDialogMenu = document.querySelector('.popup-dialog-menu');
  
  document.addEventListener('click', (e)=>{
    let target = e.target;
    
    if(target.closest('.link-list-repair')){
      popupRepairModal.classList.add('popup-repair-types-show');
     // popupDialogMenu.classList.remove('showHide-menu');
    }
    if ((target.matches('.close') && target.closest('.popup-repair-types')) || target.matches('.popup')) {
      popupRepairModal.classList.remove('popup-repair-types-show');
    }

  });



};

loadingDataRepairTypes()
  .then((response) => {
    if (response.status !== 200) {
      throw new new Error('status network not 200');
    }
    return response.json();
  })
  .then((data) => {
    setDataTable(data);
    getRepairTypesTabs(data);
    repairTypesPopupTabs();

  })
  .catch((error) => {
    console.error(error);
  });

export default popupRepairTypesModal;
