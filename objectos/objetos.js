// Objetos (Objects)

let miObjeto = {
  nombre: "Alexis", 
  edad: 27,
  '0': 'hola',
  saludar:  {
    dialogo1: function saludo(){console.log('Hola desde el objeto')},
    dialogo2: function saludo(){console.log('Estoy en el 2')},
  },
  arregloInterno: [1,2,3,4]
}
// let nombre = 'edad'
// console.log(miObjeto[nombre])   // Mal
// console.log(miObjeto.nombre) // Bien 


// miObjeto.saludar(dialogo1, dialogo2)
// miObjeto.saludar(`${dialogo1} ${dialogo2}`)
// miObjeto.saludar.dialogo1()
// miObjeto.saludar.dialogo2()
// console.log(miObjeto.arregloInterno[0]);


