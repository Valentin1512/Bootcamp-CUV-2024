//EJERCICIO DE NIVEL 2
//1. contarDeA_n

/*
function contarDeA_n(contar_de_a,contar_hasta){
    let i = 1
   while(i <= contar_hasta){
    i+=contar_de_a
    console.log(i)
   }

}
contarDeA_n(2,10)*/

//////////////////////////////////////////////////////////////////////

//EJERCICIO DE NIVEL 1
/*
function triplicador(numero){
    return numero * 3;
}

function multiplicador(num1,num2){
    return num1 * num2
}

function division(num1,num2){
    return num1 / num2
}

function resto(num1,num2){
    return num1 % num2
}

let paso1 = triplicador(5)
let paso2 = multiplicador(paso1,12)
let paso3 = divisor(paso2,12)
let pasoFinal = resto(paso3,3)

console.log(pasoFinal)
*/

///////////////////////////////////////////////////////////////////////
//EJERCICIO DE NIVEL 3


function factorial(numero) {
  // Verificar si el número es 0 o negativo
  if (numero < 0) {
    return "El factorial de un número negativo no está definido.";
  } else if (numero === 0) {
    return 1; // Factorial de 0 es 1
  } else {
    let resultado = 1; // Inicializamos el resultado en 1
    // Usamos un loop para calcular el factorial
    for (let i = 1; i <= numero; i++) {
      resultado *= i;
    }
    return resultado;
  }
}

// Ejemplos de uso
console.log(factorial(5)); // Salida: 120
console.log(factorial(0)); // Salida: 1
console.log(factorial(-5)); // Salida: "El factorial de un número negativo no está definido."

