// console.log("Hola");

// setTimeout(
//   () => {console.log('Desde el TimeOut')},
//   1000
//   )

// console.log("Como estan?");
// setTimeout(
//   () => {
//     console.log('medio segundo')
//     for(let i=0; i<=9999999999;i++){} //for 2
//     console.log('termine el 2do for')
//   },
//   500
//   )

// for(let i=0; i<=9999999999;i++){ //for 1
// }

// console.log("Adios");



function imprimir(){
  console.log('Estoy imprimiendo')
}

const hacerCafe = () => {
  console.log('Haciendo cafe')
}

const hacerSandwich = () => {console.log('Estoy haciendo un sandwich')}

function trabajando(hacerCafe){
  console.log('Estoy trabajando')
  hacerCafe()
  console.log('ya me voy a mi casa')
}

// trabajando(hacerCafe)
trabajando(imprimir)
// trabajando(hacerSandwich)
