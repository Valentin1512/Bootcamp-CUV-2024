
// arreglo

/*let dias = ["lu","ma","mi","ju","vi","sa","do"] //declaro la array

alert(dias[4]) //muestra "vi" en el alert

if(dias[3]=="mi"){
    //verdadero
}

alert(dias[7])

alert("cantidad de elementos: " + dias.length) //conocer la longitud de mi array (elementos)

let miArray = []

miArray[0] = "emiliano"
miArray [1] = "santino"
miArray[3] = 'laura'

alert(miArray[2])*/

//lista de compras
//pedir al usuario que ingrese una lista de los productos a comprar,
//mostrar cuantos productos se agregaron a la lista
//aclaracion: si ingrese "no",significa que no quiere ingresar mas productos

/*let producto = prompt("INGRESE UN PRODUCTO o no para finalizar")
let lista = []
let i = 0

while(producto !="no"){
    lista[i] = producto
    producto = prompt("INGRESE UN PRODUCTO o no para finalizar")
    i++
}
alert("La cantidad total de productos es :" + lista.length) 

let cont = 0
while(cont <=lista.length){
    alert(lista(cont))
}


let colores = []
colores[0] = "rojo"
colores [1] = "amarillo"
colores.push = "azul"
colores.push = "negro","blanco","verde"

console.log("la longitud total= " + colores.length)
consoloe.log()
//push: agrega un elemento a la array

//pop: elimina el ultimo elemento
colores.pop()
console.log(colores)

//shift:elimina el primer elemento
colores.shift()
console.log(colores)

//unshift:agrega un elemento al principio de la array

colores.unshift("mi primer elemento")*/



/*Pedirle al usuario que ingrese números hasta que ingrese la palabra "stop".
Ir guardando esos números y mostrar: 
- la cantidad de números ingresados 
- el 3º y último número ingresado
- la suma de todos los números ingresados*/


let lista = [];
let numero = prompt("ingrese un numero o la palabra stop para finalizar");
let sumaTotal = 0;
while(numero != "STOP"){
    lista.push(parseInt(numero)) //agregar al array cada numero ingresado;
    sumaTotal = parseInt(sumaTotal) + numero;
    numero = parseFloat(prompt("ingrese un numero o la palabra stop para finalizar"));
}

console.log("Cantidad de numeros ingresados= " + lista.length);
console.log("El 3 numero es " + lista[2]);
console.log("El ultimo numero es " + lista[lista.length -1]);
console.log("La suma total es " + sumaTotal);








