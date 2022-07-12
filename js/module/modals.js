const modals = (trigger, modal, btnClose) => {
  
  trigger = document.querySelectorAll(trigger);
  modal = document.querySelector(modal);
  btnClose = document.querySelector(btnClose);
  const windows = document.querySelectorAll('[data-modal]');
  const header = document.querySelector('.navbar');
  const scroll = calcScroll();




  trigger.forEach(elem => {
    elem.addEventListener('click', (e) => {
      if (e.target) {
        e.preventDefault();
      }

      //Закрываем открытые модальные окна, если они были открыты
      windows.forEach(item => {
        item.classList.add('d-none');
      });

      modal.classList.remove('d-none');
      document.body.style.overflow = 'hidden';
      document.body.style.marginRight = `${scroll}px`;
      header.style.marginRight=`${scroll}px`;
  });
  });

  if (btnClose) {
    btnClose.addEventListener('click', () => {
      windows.forEach(item => {
        item.classList.add('d-none');
      });
    

      modal.classList.add('d-none');
      document.body.style.overflow = '';
      document.body.style.marginRight = '0';
      header.style.marginRight = '0';
    });
  }
  

  function calcScroll() {
    let div = document.createElement('div');

    div.style.width = '50px';
    div.style.height = '50px';
    div.style.overflowY = 'scroll';
    div.style.visibility = 'hidden';

    document.body.appendChild(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();
    return scrollWidth;
  }


};

export default modals;