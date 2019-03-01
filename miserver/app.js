const express = require('express') // express es el modulo
let app = express() // app es el servidor 
const bodyParser = require('body-parser')
const rutaPersona = require('./Routes/personas')

app.use(bodyParser.json())
app.use('/individuo', rutaPersona)


// app.<metodo>(<ruta>, <cb>)
app.get('/', (request, response) => {
  console.log('Hicieron una peticion GET a la raiz');
  response.send("<h1>Soy un servidor!!</h1>")
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