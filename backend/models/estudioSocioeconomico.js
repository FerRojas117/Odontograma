const mongoose = require("mongoose");

const socioEconomico = mongoose.Schema({
  nombre: { type: String, required: true },
  edad: { type: String, required: true },
  direccion: { type: String, required: true },
  tiempoRadicar: { type: String, required: true },
  fechaNacimiento: { type: String, required: true },
  telefono: { type: String, required: true },
  lugarDeNacimiento: { type: String, required: true },
  nacionalidad: { type: String, required: true },
  sexo: { type: String, required: true },
  estadoCivil: { type: String, required: true },
  ocupacion: { type: String, required: true },
  lugar: { type: String, required: true },
  direccion: { type: String, required: true },
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
