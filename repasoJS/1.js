/*
VARIABLES

IF
ELSE

CICLOS

ARREGLOS
OBJETOS

FUNCIONES

COMO EJECUTAR JS
*/

// Comentar lo que resta de la lina 
/* comenta un bloque completo */

//Variables
// var, let, const

let miNombre = "Carlos Estrada"

let otroNombre = false;
// Tipos de datos
// Number, Strings, Booleans, Array, Object
let miEdad = 0

// console.log(`Hola me llamo ${otroNombre} ${miNombre} ${miEdad}`)
// console.log(miNombre);

console.log(`nombre ${miNombre}`);
// IF - ELSE
// Si, entonces
if(miEdad){
  let miNombre = 'Jose'
  console.log(`Felicidades ${miNombre}, eres mayor de edad!!`)
} else { // SI NO
  miNombre = 'Alexis'
  console.log(`Lo siento no eres mayor de edad ${miNombre}`);
}
//Truthty  > se considera verdadero
//Falsy    > se considera falso
console.log(`nombre ${miNombre}`);

// Ciclos
// for, while, do-while, foreach, for-in, for-of
// for(DECLARACION; CONDICION; INCREMENTOS){ BLOQUE DE CODIGO }
/*for(let contador = 0; contador < 20; contador++){
  console.log('Estoy ciclado');
  contador++
}*/

// Funciones
function hacerSandwich(){
  console.log('Tomar pan')
  console.log('Poner jamon');
  console.log('Entregar');
}

const hacerSandwich2 = () => {
  console.log('otro Sandiwch');
}

hacerSandwich()
hacerSandwich()
hacerSandwich2()

const sumar = n1 => n1+n2

function suma(n1){
  return n1 + n2
}

// console.log( suma(2,5) )
// console.log( suma(20,15) )


// Arreglos
let miArreglo = ['a', 'e', 'i', 'o', 'u', 7, true, false, 8, 9]
// console.log(miArreglo);
// miArreglo[40] = 'Hola'
// console.log(miArreglo);

for(let index = 0; index < miArreglo.length ; index++){
  console.log(`Posicion ${index} = ${miArreglo[index]}`)
}