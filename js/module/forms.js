import {postData} from '../services/requests.js';
const forms = () => {
  const form = document.querySelectorAll('form');
  const inputs = document.querySelectorAll('input');
  
  const message = {
    success: 'Данные успешно отправлены',
    loading: 'Выполняется отправка данных. Пожалуйста, подождите',
    failure: 'При отправке данных возникла ошибка. Повторите попытку позже',
    spinner: 'img/loading.gif',
    ok: 'img/ok.png',
    fail: 'img/fail.png',
  };

  const path = {
    action: 'assets/action.php',
  };

  const clearInputs = () => {
    inputs.forEach((item) => {
      item.value = '';
    });
  };

  form.forEach((item) => {
    item.addEventListener('submit', (e) => {
      e.preventDefault();

      let statusMessage = document.createElement('div');
      statusMessage.classList.add('status');
      item.parentNode.append(statusMessage);


      setTimeout(() => {
        item.style.display = 'none';
      }, 400);

      let statusImg = document.createElement('img');
      statusImg.setAttribute('src', message.spinner);
      statusMessage.append(statusImg);

      let textMessage = document.createElement('div');
      textMessage.textContent = message.loading;
      statusMessage.append(textMessage);

      const formData = new FormData(item);

      postData(path.action, formData)
        .then((res) => {
          textMessage.textContent = message.success;
          statusImg.setAttribute('src', message.ok);
        })
        .catch(() => {
          textMessage.textContent = message.failure;
          statusImg.setAttribute('src', message.fail);
        })
        .finally(() => {
          clearInputs();
          setTimeout(() => {
            statusMessage.remove();
            item.style.display = 'block';
          }, 5000);
        });
    });
  });
};

export default forms;
