const sendForms = () => {

  const errorMessage = 'Что-то пошло не так...',
        loadMessage = `Отправка...`,
        checkboxMessage = `Необходимо согласиться с политикой конфиденциальности`;

  const statusMessage = document.createElement('div');
  const statusSubmit = document.createElement('div');
  const popupThank = document.querySelector('.popup-thank');
  
  statusMessage.style.cssText = `font-size:1.4rem;color:#000000`;
  statusSubmit.classList.add('status-submit');
  

  document.addEventListener('submit', (event) => {
    event.preventDefault();
    let target = event.target;
    const targetCheckbox = target.closest('form').querySelector('input[type="checkbox"]');
    
    if (!targetCheckbox.checked) {
      
      if(!target.querySelector('input[name="name"]')){
        statusSubmit.style.bottom = '-10px';
      }else{
        statusSubmit.style.bottom = '-50px';
      }
      target.appendChild(statusSubmit);

      statusSubmit.insertAdjacentHTML('afterbegin', checkboxMessage);
      setTimeout(() => {
        statusSubmit.remove();
        statusSubmit.textContent = '';
      }, 2000);
      return;
    }

    const formData = new FormData(target);
    let phoneInput = target.querySelector('input[name="phone"]');
    let nameInput = target.querySelector('input[name="name"]') ? target.querySelector('input[name="name"]').value : true;
    
    let body = {};

    formData.forEach((val, key) => {
      body[key] = val;
    });
    if (/^\+\d{1,3}\s?\(\d{3}\)\s?\d{3}(-\d{2}){2}$/.test(phoneInput.value) && nameInput) {
      
      phoneInput.style.border = '';
      target.appendChild(statusMessage);
      statusMessage.insertAdjacentHTML('afterbegin', loadMessage);

      postData(body)
        .then((response) => {
          if (response.status !== 200) {
            throw new new Error('status network not 200');
          }
          statusMessage.textContent = '';
          popupThank.style.visibility = 'visible';
          
        })
        .catch((error) => {
          statusMessage.textContent = errorMessage;
          console.error(error);
        });

    } else {
      target.querySelector('input').style.cssText = 'border:2px solid red;';
      return;
    }
    clearInputsForms(target);
  });

  //clearInputsForms
  const clearInputsForms = (target) => {
    let targetFormInputs = target.querySelectorAll('input');
    targetFormInputs.forEach((item) => {
      item.style.border = '';
      item.value = '';
      item.checked = false;
    });
  };

  const postData = (body) => {

    return fetch('./server.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body),
      credentials: 'include' //проверка cookie на сервере
    });
  }
};

export default sendForms;