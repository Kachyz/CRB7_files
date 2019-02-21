let moldeCarro = {
  // Atributos (caracteristicas)
  noLlantas: 4,
  modelo: 2000,
  marca: 'nissan',
  color: 'blanco',

  // Metodos (acciones)
  encender: function encendido(){console.log('Ya arranque')},
  pitar: function pitar(){console.log('bip bip!!')}
}

let tsuru = moldeCarro
let march = moldeCarro

// tsuru.encender()
// march.encender()
// console.log(march)
// tsuru.tuneado = true

// console.log(tsuru)
// console.log(march)


class moldeAuto{
  constructor(marca, color, modelo){
    this.marca = marca
    this.color = color
    this.modelo = modelo
    this.noLlantas = 4
  }

  encender(){
    console.log('ya me prendi!!')
  }
  pitar(){
    console.log('bip bip!!')
  }
  saluda(){
    console.log(`Hola! soy un ${this.modelo} color ${this.color}`)
  }
}

let miTsuru = new moldeAuto('nissan', 'verde', 'tsuru')
let miCivic = new moldeAuto('honda', 'rojo', 'civic')

// miCivic.saluda()
// miTsuru.saluda()

// miTsuru.pitar()
// miCivic.pitar()
// console.log(miCivic.color);
// console.log(miTsuru.color)
// miTsuru.color = 'amarillo'
// console.log(miTsuru.color)
// console.log(miCivic.noLlantas);

//////////////
// HERENCIA //

class Animal{
  constructor(especie, metodoDes){
    this.especie = especie
    this.metodoDes = metodoDes
  }

  desplazar(){
    console.log(`Soy un ${this.especie} y estoy por ${this.metodoDes} a mi destino`)
  }
  comer(){
    console.log('Estoy comiendo');
  }
}

class Perro extends Animal{
  constructor(nombre){
    super('perro', 'caminar')
    this.nombre = nombre
    this.noPatas = 4
  }
}

class Gato extends Animal{
  constructor(nombre){
    super('gato', 'escalar')
    this.nombre = nombre
    this.noPatas = 4
  }

  comer(){
    console.log('comiendo atun...');
  }
}

let perro = new Perro('perro', 'caminar', 4)
let nuevoPerro = new Perro('Firulais')
console.log(nuevoPerro.nombre)
console.log(nuevoPerro.noPatas)
console.log(nuevoPerro.especie)
nuevoPerro.comer()

let miGato = new Gato('garfield')
miGato.comer()

// let pinguino = new Animal('pinguino', 'caminar', 2)
// let caballo = new Animal('caballo', 'trotar', 4)
// let pez = new Animal('pez', 'nadar', 0)

// perro.desplazar()
// ponguino.desplazar()
// caballo.desplazar()
// pez.desplazar()

// console.log(perro.noPatas)
