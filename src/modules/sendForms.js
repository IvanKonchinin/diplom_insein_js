const sendForms = () => {

  const errorMessage = 'Что-то пошло не так...',
        loadMessage = `Отправка...`;

  const statusMessage = document.createElement('div');
  const popupThank = document.querySelector('.popup-thank');
  
  statusMessage.style.cssText = `font-size:1.4rem;color:#000000`;

  document.addEventListener('submit', (event) => {
    event.preventDefault();
    let target = event.target;
    const targetCheckbox = target.closest('form').querySelector('input[type="checkbox"]');

    if (!targetCheckbox.checked) return;

    const formData = new FormData(target);
    let phoneInput = target.querySelector('input[name="phone"]');
    
    let body = {};

    formData.forEach((val, key) => {
      body[key] = val;
    });
    if (phoneInput.value.length === 17) {
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
      target.style.cssText = 'border:2px solid red;background:#fff';
      return;
    }
    clearInputsForms(target);
  });

  //clearInputsForms
  const clearInputsForms = (target) => {
    let targetFormInputs = target.querySelectorAll('input');
    targetFormInputs.forEach((item) => {
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