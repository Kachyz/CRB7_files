// Ejercicios JS

// 1) Hacer una funcion que convierte grados C a F
const gradosCaF = (gradosC) => {
  // (20 °C × 9/5) + 32 = 68 °F
  let gradosF = (gradosC * 9/5) + 32
  return `${gradosF} grados F`
}

// const gradosCaF = gradosC => (gradosC * 9/5) + 32

console.log(gradosCaF(20))
console.log(gradosCaF(-15))



// 2) Una funcion que imprima la tabla de multiplicar de X numero

// 3) Funcion que imprima los primeros 20 numeros pares 

// 4) Funcion que te diga si un numero es primo o no
  // Solo puede dividirse entre el mismo y 1

// 5) Funcion que imprima la serie fibonacci hasta N
  // 0,1,1,2,3,5,8