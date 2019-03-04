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

  let nuevoJuego = new JuegoModel(req.body)
  nuevoJuego.save()
    .then( () => {
      console.log('Juego Guardado')
    })
    .catch( (error) => {
      console.log('No pude guardar el juego', error);
    })

  // misPersonas.push(req.body)
  res.status(202).send('Juego recibido')
})

router.delete('/', (req, res) => {
  let tituloRecibido = req.query.titulo

  // JuegoModel.findOneAndRemove(<query>, <CB>)
  JuegoModel.findOneAndRemove({titulo: tituloRecibido}, (error, data) => {
    console.log(data);
    if (error)
      console.log(`Error al borrar ${error}`);
    else
      res.status(201).send('Elemento borrado'+ data)
  })
})

router.put('/', (req, res) => {
  let tituloModificar = req.query.titulo
  JuegoModel.findOneAndUpdate({titulo: tituloModificar}, req.body, (error, data) => {
    if (error)
      console.log(`ERROR - ${error}`)
    else
      res.status(201).send('Juego actualizado' + data)
  })
})

// Params
router.get('/:id', (req, res) => {
  console.log(req);
  res.send(misPersonas[req.params.id])
})


module.exports = router