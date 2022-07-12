const subscription = () => {
  const subscriptionForm = document.querySelector('.subscription form');
  
  if (subscriptionForm) {
    const subscriptionInput = subscriptionForm.querySelector('.subscription-input');
    const subscriptionBtn = subscriptionForm.querySelector('.subscription-btn');
    const confirmCheck = subscriptionForm.querySelector('.policy-confirm-check');
    const confirmBtn = subscriptionForm.querySelector('.policy-confirm-btn');


      subscriptionBtn.addEventListener('click', function() {
        if (subscriptionInput.value) {
          createPolicyConfirm();
        if (confirmBtn) {
        confirmBtn.addEventListener('submit', function() {
          confirmBtn.style.display = 'none';
        
        });
      }
        }
        else {
          createPolicyConfirmError();
        }
      });
    
    function createPolicyConfirm() {
      const policy = document.createElement('div');
      policy.classList.add('policy-confirm', 'd-flex');
      policy.innerHTML = `
      <label class="mt-3">
      <input class="policy-confirm-check" type="checkbox" name="policyCheck" required>
      Я согласен(на) с  <a href="pages/policy.html" target="_blank">политикой конфиденциальности</a>
    </label>
      <button type="submit" class="policy-confirm-btn btn btn-outline-success mt-3">Подтвердить</button>
      `;
      //Прикрепляем к родителю инпута чекбокс и кнопку
      subscriptionForm.appendChild(policy);
      subscriptionBtn.toggleAttribute('disabled');
    }
  
    function createPolicyConfirmError() {
      const policyConfirmError = document.createElement('p');
      policyConfirmError.textContent = 'Введите email';
      policyConfirmError.classList.add('text-danger');
      subscriptionForm.appendChild(policyConfirmError);
      btnToggleDisabled(subscriptionBtn);

      subscriptionInput.addEventListener('input', () => {
        if (subscriptionInput.value) {
          policyConfirmError.style.display = 'none';
          btnToggleDisabled(subscriptionBtn);
        }
      });
    }

    
      

    function btnToggleDisabled(btn) {
      btn.toggleAttribute('disabled');
    }
    function inputClear(input) {
      input.value = '';
    }
  
  }
};



export default subscription;