const express = require('express') // express es el modulo
let app = express() // app es el servidor 

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

app.listen(5000, () => {
  console.log('Estoy corriendo en el puerto 5000');
})