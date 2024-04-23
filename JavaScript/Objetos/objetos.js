//clave = valor

// let usuario = {
//     nombre: "Emiliano",
//     email:"emiliano@gmail.com",
//     telefono: 1234567,
//     mayoreEdad: true,
//     nacionalidad: "Argentino"
// };

// //Para acceder y/o agregar y/o modificar una propiedad/atributos

// //dot rotation (rotacion de puntos)
// console.log(usuario.telefono);

// //con corchetes
// usuario["telefono"];

// //como agregar un valor al obejeto
// usuario.altura = 180; //notacion puntos
// usuario["altura"]= 180//notacion corchetes

// //Modificar un atributo o propiedad

// usuario.mayoreEdad = false;
// usuario["mayorEdad"] = false;

/*
Pedir por prompt al usaurio los nombres de sus familiares directos
(padre,madre,hermana,hermano,hijo/a,)

guardar esos nombres en un objeto
y luego agregar el atributo mascota con el nombre
finalmente mostrar la madre y la mascota
*/

let familiares ={
    Padre:"Ramon",
    Madre: "Susana",
    hermano: "Carlos"
};

familiares.mascota= "Indio"

console.log("El nombre de mi mama es " + familiares.Madre)
console.log("El nombre de mi mascota es " + familiares.mascota)