//DRY= Dont repeat yourself (no repitas el codigo)
//forma de declarar una funcion
//funcion es un bloque de codigo que escribimos una vez, y lo utilizamos las veces que quieras
 function sumar(){
    let a = 10;
    let b = 20;
    alert(a + b)
 }

//forma de llamar o utilizar una funcion

 sumar() //ejecutando la funcion sumar (instanciar)

 if(1==1){
     sumar()
}

 let i = 2;
 while(i >=1 ){
     sumar()
     i--;
}

//crear una funcion que muestre por pantalla su nombre y apellido

function nombreCompleto() {
  let nombre = "Valentin";
  let apellido = "Viollaz";
  alert(" mi nombre completo es " + nombre + apellido);
}

 function sumar(num1,num2){ //dentro de la parentesis van la variables, y tienen un orden
     let resultado = num1 + num2;
     alert(resultado)
 }

 sumar(10,45); //ejecutando mi funcion, pasandole 2 valores

 let x = parseInt(prompt("ingrse el primer numero"));
let y = parseInt(prompt("ingrese el segundo numero"));

 sumar(x,y) 

//crear una calculadora pidiendo al usuario 
//1)ingrese que operacion desea realizar
//2) pedirle que ingrese 2 numeros
// 3) realizar la operacion matematica elegida
// 4) mostrar el resultado por un alert

function sumar(valor1,valor2){
    let resultado = valor1 + valor2;
    alert("El resultado de la operacion es: " + resultado);
}

function restar(valor1,valor2){
    let resultado = valor1 - valor2;
    alert("El resultado de la operacion es: " + resultado);
}

function multiplicar(valor1,valor2){
    let resultado = valor1 * valor2;
    alert("El resultado de la operacion es: " + resultado);
}

function dividir(valor1,valor2){
    let resultado = valor1 / valor2;
    if(valor2 !== 0){;
        alert("El resultado de la operacion es: " + resultado);
    }else{
        alert("No se puede dividir por 0");
    }
} 

let operacion = prompt("Elegi que opreacion vas a realizar (+-*/)");
 let valor1 = parseFloat(prompt("Ingrese el primer valor"));
 let valor2 = parseFloat(prompt("Ingrese el segundo valor"));

 if(operacion === "+"){
     sumar(valor1,valor2);
 }else if(operacion === "-"){
     restar(valor1,valor2);
 }else if(operacion === "*" ){
     multiplicar(valor1,valor2);
 }else if(operacion === "/"){
     dividir(valor1,valor2);
 }else{
     alert("la operacion no es valida")
 } 


//return en funciones

function mostrarTexto(a){
    let texto = "la variable a contiene: " + a;
    return texto; //devuelve el valor de la variable texto
}
let contenido;
contenido = mostrarTexto("hola mundo")

alert(contenido)


function nombreCompleto(nombre,apellido){
    let nombre_y_apellido = nombre + "," + apellido
    return nombre_y_apellido

}

alert(nombreCompleto("valentin", "viollaz"))