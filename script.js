const inputEl = document.querySelector('#binary-number');
const errorEl = document.querySelector('#error');
const resultEl = document.querySelector('#result');
let decimalData = null;

const errorAlert = function () {
  errorEl.style.display = 'block';
  inputEl.addEventListener('blur', (e) => {
    errorEl.style.display = 'none';
  });
};

inputEl.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    let inputValue = e.target.value;
    const isBinary = /^[01]+$/.test(inputValue) || inputValue === '';

    if (!isBinary) {
      errorAlert();
    } else if (inputValue.length > 8) {
      errorAlert();
    } else {
      decimalData = parseInt(inputValue, 2);
      resultEl.textContent =
        inputValue + ` Convert binary to decimal as ` + decimalData;
      inputEl.value = '';
    }
  }
});
