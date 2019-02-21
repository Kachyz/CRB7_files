// Ejercicios POO

// 1) Hacer una clase PERSONA que pueda hacer lo siguiente:
//   * Decir su nombre
//   * Calcular su IMC
//      IMC = Peso (kg) / altura (m)2
      peso / (altura * altura)
      peso / Math.pow(altura, 2)
//   * Mencionar si es o no mayor de edad
//   * Cumplir años
class Persona{
  constructor(nombre, edad){
    this.nombre = nombre
    this.edad = edad
  }

  decirNombre(){
    console.log(`Hola me llamo ${this.nombre}`);
  }

  esMayor(){
    if(this.edad >= 18)
      console.log(`${this.nombre} es mayor de edad`);
    else
      console.log(`${this.nombre} es menor de edad, no le vendan cigarros!!`);
  }

  esMenor(){
    return this.edad < 18
  }
}

let kachyz = new Persona('Carlos', 30)
kachyz.decirNombre()
kachyz.esMayor()

console.log(`Kachyz es ${kachyz.esMenor() ? 'menor' : 'MAYOR'}`)



// 2) Hacer una clase cuadrado
//   * calcular su area
//   * calcular su perimetro

// 3) Hacer una clase triangulo
//   * calcular su area
//   * calcular su perimetro

// 4) Hacer una clase rectangulo
//   * calcular su area
//   * calcular su perimetro
