
const checkTextInputs = (selector) => {
  const txtInputs = document.querySelectorAll(selector);
  txtInputs.forEach((input) => {
    input.addEventListener('keypress', (e) => {
      //Проверяю вводимый текст. Для имени, фамилии и сообщений допустим только русский язык
      if (e.key.match(/[^а-яё 0-9]/gi)) {
        e.preventDefault();
      }
    });
  });
};
export default checkTextInputs;
