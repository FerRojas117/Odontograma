const mongoose = require("mongoose");

const odontograma = mongoose.Schema({
  fecha: { type: String, required: true },
  trabajo: { type: String, required: true },
  profesor: { type: String, required: true },
  
  permanentes: [
    { cariadas: Boolean, required: true },
    { perdidas: Boolean, required: true },
    { obturadas: Boolean, required: true },
    { extracciones: Boolean, required: true },
    { indicadas: Boolean, required: true }
  ],
  obturadas: [
    { cariadas: Boolean, required: true },
    { perdidas: Boolean, required: true },
    { obturadas: Boolean, required: true },
    { extracciones: Boolean, required: true },
    { indicadas: Boolean, required: true }
  ],
  operador: [
    { operador: String, required: true },
    { cuat: String, required: true },
    { equipo: String, required: true },
    { sillon: String, required: true },
  ],
  auxiliar: [
    { auxiliar: String, required: true },
    { cuat: String, required: true },
    { equipo: String, required: true },
    { sillon: String, required: true },
  ],
  nombre: { type: String, required: true }
});

module.exports = mongoose.model("Odontograma", odontograma);
