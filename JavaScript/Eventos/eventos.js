
//eventos

//seleccionamos el elementos
let elemento = document.getElementsByTagName("button");

//Trigger o disparador -----> escuchar al elemento seleccionado
elemento[0].addEventListener("click",function(){
    //escribo lo que va a suceder cuando alguien haga click en el boton
    let num1 =10;
    let num2 = 14;
    let resultado = num1 + num2
    alert("El resultado de la suma es: " + resultado);
})
let cantEntradas = 0

elemento[1].addEventListener("click",function(){
    cantEntradas++;
    console.log(cantEntradas + " Tikets comprados")
})

let h2 = document.getElementsByName("titulo")//selecionnamos el elemento

//creamos el evento
h2[0].addEventListener("mouseover",function(){
    console.log("Pasaste por encima del titulo")
})

let miBoton = document.getElementById("miBoton")//seleccionamos el elemento con ID

miBoton.addEventListener("click",function(){
    alert("Click en mi boton")
    h2[0].style.color ="red"
}
)


let input2 = document.getElementById("texto");
let btnObtener = document.getElementById("obtener")

btnObtener.addEventListener("click",function(){
    let valorIngresado = input2.value;
    console.log("El usuario ingreso: " + valorIngresado) 
}) 

//Ejercicio: hacer una calculadora con 2 inputs y un boton de suma
//cuando el usuario haga click en el boton,se sumen los 2 valores ingresados
//en cada input.
//mostrarlo por alert o console.log

 let inputValor1 = document.getElementById("num1")
 let inputValor2 = document.getElementById("num2")
 let botonDeSuma = document.getElementById("botonDeSuma")

 botonDeSuma.addEventListener("click",function(){
     let resultado = parseInt(num1.value) + parseInt(num2.value)
     console.log("El resultado de la suma es: " + resultado)
 })

let input = document.getElementById("valorIngresado")
let hacerClick = document.getElementById("boton")
let parrafo1 = document.getElementById("parrafo1")
let parrafo2 = document.getElementById("parrafo2")

hacerClick.addEventListener("click",function () {
    parrafo1.textContent = input.value.toUpperCase()
    parrafo2.textContent = input.value
    parrafo1.style.color = "red"
    parrafo2.style.color = "blue"
})

