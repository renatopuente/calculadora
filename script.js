// Obtener el elemento de entrada de resultado
const result = document.getElementById('result');

// Obtener todos los botones de números
const numberButtons = document.getElementsByClassName('number');

// Obtener el botón de calcular
const calculateButton = document.getElementById('calculate');

// Adjuntar oyentes de eventos de clic a los botones de números
for (let i = 0; i < numberButtons.length; i++) {
  numberButtons[i].addEventListener('click', function() {
    result.value += this.innerText;
  });
}

// Adjuntar oyente de evento de clic al botón de calcular
calculateButton.addEventListener('click', function() {
  const expression = result.value;

  try {
    const resultValue = eval(expression);
    result.value = resultValue;
  } catch (error) {
    result.value = 'Error';
  }
});
