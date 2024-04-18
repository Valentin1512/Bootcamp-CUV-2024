// ejercicios de nivel 1

//2.Mensaje Con Variables
  
 let nombre = "valentin"
 let edad = 20
 let cumpleaños = "15 de octubre de 2003"
 let ciudad = "Buenos aires"
 let ocupacion = "repartidor"
 let pasatiempos = "jugar al futbol"

 console.log(" me llamo " + nombre + " tengo " + edad + " años " + " cumplo un " + cumpleaños + " vivo en la ciudad de " + ciudad + " trabajo de " + ocupacion + " mi pasatiempo es " + pasatiempos)


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//ejercicios de nivel 2

//1.Variables

 let num1 = parseInt(prompt("decime el primer valor"))
 let num2 = parseInt(prompt("decime el segundo valor"))
 let resultado = num1 + num2
  console.log(resultado);

//////////////////////////////////////////////////////////////////////////////////////////////////
 
//ejercicio de nivel 3

//1.¿Cuántos snacks vas a comer por el resto de tu vida?

 let edad = 20;
 let edadMaxima = 90;
 let snackFavorito = "Papas fritas"
 let snackMaximo = 5
 let anosRestantes = edadMaxima - edad
 let snackRestante = anosRestantes * 365 * snackMaximo

 alert("Necesitarás " + snackRestante + " " + snackFavorito + " para que te alcancen hasta los " + edadMaxima + " años.");

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//2. Presupuestando las vacaciones

 var diasDeViaje = 7; // Por ejemplo, 7 días

 // Presupuesto máximo para todo el viaje
 var presupuestoMaximo = 350; // Por ejemplo, $350

// // Variable para almacenar el costo de cada comida
 var comida;

// // Estimación de la cantidad total de comidas durante el viaje
 var totalComidas = diasDeViaje * 3; // Suponiendo 3 comidas al día

// // Cálculo del costo máximo por comida
 comida = presupuestoMaximo / totalComidas;

// // Mostrar el resultado en un alert
alert("Podés gastar $" + comida.toFixed(2) + " en cada comida para que te alcance la plata durante los " + diasDeViaje + " días de viaje.");








