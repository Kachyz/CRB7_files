const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const JuegoModel = require('../models/juegoModel')

router.use(bodyParser.json())

let misPersonas = [{
  nombre: 'Alan',
  correo: 'alan@gmail.com'
}, {
  nombre: 'Jose',
  correo: 'jose@gmail.com'
}]

router.get('/', (req, res) => {
  console.log('Estoy en GET PERSONA');
  JuegoModel.find((err, juego) => {
    if(err){
      console.log("Hubo un error en el GET de JUEGO");
      res.send(404)
    }
    res.send(juego)
  })
  // res.send(misPersonas)
})

router.post('/', (req, res) => {
  console.log(req.body)
  misPersonas.push(req.body)
  res.send(202)
})

router.delete('/:posicion', (req, res) => {
  let posicionInicial = req.params.posicion
  // misPersonas.splice(<Que posicion>, <Cuanto va a borrar = 1/>)
  console.log(misPersonas);
  misPersonas.splice(posicionInicial, 1)
  console.log(misPersonas);
  res.send("Elemento borrado")
})

router.put('/:posicion', (req, res) => {
  let posicionInicial = req.params.posicion
  // misPersonas.splice(<Que posicion>, <Cuanto va a borrar = 1/>)
  console.log(misPersonas);
  misPersonas[posicionInicial] = req.body
  console.log(misPersonas);
  res.send("Elemento actualizado")
})

// Params
router.get('/:id', (req, res) => {
  console.log(req);
  res.send(misPersonas[req.params.id])
})


module.exports = router