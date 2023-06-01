// Obtener el elemento de entrada de resultado
const result = document.getElementById('calculate');

// Obtener todos los botones de números y operadores
const buttons = document.querySelectorAll('.number, .operator');

// Adjuntar oyentes de eventos de clic a los botones
buttons.forEach(button => {
  button.addEventListener('click', function() {
    const value = this.innerText;

    if (value === '=') {
      try {
        const resultValue = eval(result.value);
        result.value = resultValue;
      } catch (error) {
        result.value = 'Error';
      }
    } else if (value === 'C') {
      result.value = '';
    } else {
      result.value += value;
    }
  });
});