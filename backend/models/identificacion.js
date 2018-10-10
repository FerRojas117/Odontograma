const mongoose = require("mongoose");

const identificacion = mongoose.Schema({
  nombre: { type: String, required: true },
  sexo: { type: String, required: true },
  edad: { type: String, required: true },
  fechaNac: { type: String, required: true },
  estadoCivil: { type: String, required: true },
  direccion: { type: String, required: true },
  telefono: { type: String, required: true },
  ocupacion: { type: String, required: true },
  lugarDeNacimiento: { type: String, required: true },
  procedencia: { type: String, required: true },
  estadoSocioeconomico: { type: String, required: true },
});

module.exports = mongoose.model("Ident", identificacion);

