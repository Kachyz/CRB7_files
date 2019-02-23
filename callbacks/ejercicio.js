// Calculadora
//   * recibe 2 numeros
//   * opciones de sumar, restar, multiplicar, dividir

// calculadora(4,6, 1) //1 suma, 2 resta
// calculadora(4,6, 'sumar') 
// calculadora(4,6, '+') 


// const calculadora = (n1, n2, operacion) => {
//   switch(operacion){
//     case '+':
//       return n1 + n2
//       break;
//     case '-':
//       return n1 - n2
//       break;
//   }
// }

const calculadora = (n1, n2, operacion) => {
  console.log("Bienvenido a la calculadora");
  return operacion(n1,n2)
}

const sumar = (n1, n2) => {
  return n1 + n2
}
const restar = (n1, n2) => n1-n2
// console.log(sumar(1,2));
 
console.log(calculadora(4, 7, sumar))
console.log(calculadora(4, 7, restar))