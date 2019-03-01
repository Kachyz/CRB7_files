const express = require('express') // express es el modulo
let app = express() // app es el servidor 
const bodyParser = require('body-parser')

app.use(bodyParser.json())

// let misPersonas = []
let misPersonas = [{
  nombre: 'Alan',
  correo: 'alan@gmail.com'
}, {
  nombre: 'Jose',
  correo: 'jose@gmail.com'
}]

// app.<metodo>(<ruta>, <cb>)
app.get('/', (request, response) => {
  console.log('Hicieron una peticion GET a la raiz');
  response.send("<h1>Soy un servidor!!</h1>")
})

app.get('/persona', (req, res) => {
  console.log('Estoy en PERSONA');
  res.send(misPersonas)
})

app.post('/persona', (req, res) => {
  console.log(req.body)
  misPersonas.push(req.body)
  res.send(202)
})

app.delete('/persona/:posicion', (req, res) => {
  let posicionInicial = req.params.posicion
  // misPersonas.splice(<Que posicion>, <Cuanto va a borrar = 1/>)
  console.log(misPersonas);
  misPersonas.splice(posicionInicial, 1)
  console.log(misPersonas);
  res.send("Elemento borrado")
})

app.put('/persona/:posicion', (req, res) => {
  let posicionInicial = req.params.posicion
  // misPersonas.splice(<Que posicion>, <Cuanto va a borrar = 1/>)
  console.log(misPersonas);
  misPersonas[posicionInicial] = req.body
  console.log(misPersonas);
  res.send("Elemento actualizado")
})

// Params
app.get('/persona/:id', (req, res) => {
  console.log(req);
  res.send(misPersonas[req.params.id])
})

// Query
app.get('/buscar', (req, res) => {
  console.log(req);
  let name = req.query.name
  let lastname = req.query.last
  res.send(`Hola ${name} ${lastname}`)
})

app.get('/body', (req, res) => {
  console.log(req.body)
  res.send(200)
})

app.listen(5000, () => {
  console.log('Estoy corriendo en el puerto 5000');
})