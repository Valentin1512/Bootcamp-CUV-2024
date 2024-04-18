//EJERCICIOS DE NIVEL 1
//2. Mi Primer "Bot"

// Definir el número máximo de clientes y el contador inicial
/*const maxClientes = 20;
let contadorClientes = 0;


while (contadorClientes < maxClientes) {
    contadorClientes++;
    let mesa = contadorClientes;
    console.log(`¡Bienvenid@ a mi café! Su mesa es la ${mesa}`);
}

console.log("Se ha alcanzado el límite de clientes. ¡Gracias por visitarnos!");*/


//ejercicio de nivel 2

//1.Par O Impar

 /*let numero = parseInt(prompt("ingrese un numero (para salir pulse 0 o un numero negativo"))

 while(numero >0){
  if ((!numero % 2)) {
       alert("El resultado es un numero PAR");
      } else {
        alert("El resultado es un numero INPAR");
      }
     numero = parseInt(prompt("ingrese un numero (para salir pulse 0 o un numero negativo"))
 }*/

///////////////////////////////////////////////////////////////////////////////////////////////////

//2.Contador De Positivos

/* let num = parseInt(prompt("ingrese un numero entero"))
 let contador = 0
 while(num >=0){
     contador++
     num = parseInt(prompt("ingrese un numero (para salir ingrese un numero negativo)"))

 }
 alert(`ingresaste ${contador}numeros positivos`) */

//////////////////////////////////////////////////////////////////////////////////////////////////////

//3. Burro-Mático

/*let respuestaBurro= prompt("ya merito llegamos?")

 while(respuestaBurro.toLowerCase() != 'si'){
     respuestaBurro = prompt("ya merito llegamos?")
 }
  alert("Bienvenido a muy muy lejano")*/

///////////////////////////////////////////////////////////////////////////////////////////////////////

//Ejercicios de nivel 3

//2. Adiviná Un Número

 /*let numUsuario = parseInt(prompt("Ingrese un numero del 1 al 10"));
 let numeroRandom = Math.ceil(Math.random() * numUsuario);
 let respuesta = parseInt(prompt("cual es el numero secreto?"));
 let Contador = 0;

 console.log(numeroRandom);
 while (numeroRandom != respuesta) {
  respuesta = parseInt(prompt("¿Cual es el numero secreto?"));
   if (respuesta < numeroRandom) {
     alert("El numero es menor al numero secreto");
  } else if (respuesta > numeroRandom) {
     alert("El numero es mayor al numero secreto");
   } else alert("No ingresaste un numero valido");
   contador++;
 }
 alert(" Acertaste! " + " lo hiciste en " + Contador + " Intentos "); */

 ///////////////////////////////////////////////////////////////////////////////////////////////////////////////

 let opcionUsuario;
let opcionComputadora;


// Generar una opción aleatoria para la computadora
let numeroAleatorio = Math.floor(Math.random() * 3);
if (numeroAleatorio === 0) {
    opcionComputadora = "Piedra";
} else if (numeroAleatorio === 1) {
    opcionComputadora = "Papel";
} else {
    opcionComputadora = "Tijera";
}

// Pedir al usuario que ingrese su opción hasta que sea válida
while (true) {
    opcionUsuario = prompt("Ingresa Piedra, Papel o Tijera:");
    if (opcionUsuario === "Piedra" || opcionUsuario === "Papel" || opcionUsuario === "Tijera") {
        break;
    }
    alert("Opción inválida. Por favor, ingresa Piedra, Papel o Tijera.");
}

// Mostrar las opciones elegidas por el usuario y la computadora
alert(`Usuario eligió: ${opcionUsuario}`);
alert(`Computadora eligió: ${opcionComputadora}`);

// Determinar el ganador
if (opcionUsuario === opcionComputadora) {
    alert("¡Empate!");
} else if (
    (opcionUsuario === "Piedra" && opcionComputadora === "Tijera") ||
    (opcionUsuario === "Papel" && opcionComputadora === "Piedra") ||
    (opcionUsuario === "Tijera" && opcionComputadora === "Papel")
) {
    alert("¡Usuario gana!");
} else {
    alert("¡Computadora gana!");
}





