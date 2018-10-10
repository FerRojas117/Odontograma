const mongoose = require("mongoose");

const socioEconomico = mongoose.Schema({
  nombre: { type: String, required: true },//r_ident
  edad: { type: String, required: true },//r_ident
  direccion: { type: String, required: true },//r_ident
  tiempoRadicar: { type: String, required: true },
  fechaNacimiento: { type: String, required: true },
  telefono: { type: String, required: true },//r_ident
  lugarDeNacimiento: { type: String, required: true },//r_ident
  nacionalidad: { type: String, required: true },
  sexo: { type: String, required: true },//r_ident
  estadoCivil: { type: String, required: true },//r_ident
  ocupacion: { type: String, required: true },//r_ident
  lugar: { type: String, required: true },//r_ident
  direccion: { type: String, required: true },//r_ident
  rangoIngresos: { type: String, required: true },
  gradoInstruccion: { type: String, required: true },
  noPersonasFamilia: { type: String, required: true },
  diagnosticoSocial: { type: String, required: true },
  asignado: { type: String, required: true },
  alumno: { type: Boolean, required: true },
  tutor: { type: String },
  observaciones: { type: String, required: true },
});

module.exports = mongoose.model("Socioec", socioEconomico);
