const checkNumInputs = (selector) => {
  const numInputs = document.querySelectorAll(selector);
  numInputs.forEach(item => {
    item.addEventListener('input', () => {
      //регулярное выражение, означающее, что мы ищем все не цифры в веденном значении
      item.value = item.value.replace(/\D/, '');
    });
  });
};

export default checkNumInputs;