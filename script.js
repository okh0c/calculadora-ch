const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const operacionInput = document.getElementById("operacion");
const calcularBtn = document.getElementById("calcular");
const resultadoDiv = document.getElementById("resultado");

function calcular() {
  // Capturamos los valores ingresados por el usuario
  let num1 = num1Input.value;
  let num2 = num2Input.value;
  let operacion = operacionInput.value;

  // Convertimos los valores ingresados a números
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);

  // Verificamos que los valores ingresados sean números
  if (isNaN(num1) || isNaN(num2)) {
    resultadoDiv.textContent = "Error: uno o ambos valores ingresados no son números.";
  } else {
    // Realizamos la operación solicitada y mostramos el resultado
    let resultado;
    switch (operacion) {
      case "+":
        resultado = num1 + num2;
        break;
      case "-":
        resultado = num1 - num2;
        break;
      case "*":
        resultado = num1 * num2;
        break;
      case "/":
        if (num2 === 0) {
          resultadoDiv.textContent = "Error: no se puede dividir por cero.";
        } else {
          resultado = num1 / num2;
        }
        break;
      default:
        resultadoDiv.textContent = "Error: operación no válida.";
        break;
    }

    // Mostramos el resultado por consola y por pantalla
    console.log("El resultado es: " + resultado);
    resultadoDiv.textContent = "El resultado es: " + resultado;
  }
}

calcularBtn.addEventListener("click", calcular);
