// Obtener el elemento de entrada de resultado
const result = document.getElementById('result');

// Obtener todos los botones de números, operadores y limpiar
const buttons = document.querySelectorAll('.number, .operator, .equal, .clear');

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