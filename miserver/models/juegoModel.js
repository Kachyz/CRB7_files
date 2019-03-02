const mongoose = require('mongoose')
const Schema = mongoose.Schema

const JuegoSchema = new Schema({
  titulo: String,
  anio: Number,
  compania: String,
  plataforma: Array
})

module.exports = mongoose.model('juegos', JuegoSchema)