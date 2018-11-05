const mongoose = require("mongoose");

const odontograma = mongoose.Schema({
  odont: { type: [String], required: true },
  trabajo	: { type: String, required: true },
fechaTrab	: { type: String, required: true },
profesor	: { type: String, required: true },
cariadas	: { type: String, required: true },
perdidas	: { type: String, required: true },
obturadas	: { type: String, required: true },
extracciones	: { type: String, required: true },
indicadas	: { type: String, required: true },
cariadastem	: { type: String, required: true },
perdidastem	: { type: String, required: true },
obturadastem	: { type: String, required: true },
extraccionestem	: { type: String, required: true },
indicadastem	: { type: String, required: true },
nombre	: { type: String, required: true },
cuat	: { type: String, required: true },
equipo	: { type: String, required: true },
sillon	: { type: String, required: true },
nombreaux	: { type: String, required: true },
cuataux	: { type: String, required: true },
equipoaux	: { type: String, required: true },
sillonaux	: { type: String, required: true },
  paciente: { type: mongoose.Schema.Types.ObjectId, ref: "Ident", required: true }

});

module.exports = mongoose.model("Odontograma", odontograma);
