const mongoose = require("mongoose");

const socioEconomico = mongoose.Schema({
  telefono: { type: String},
  ocupacion: { type: String},
  direcc: { type: String},
  ingresos: { type: String},
  gradoinst: { type: String},
  numfam: { type: String},
  digsoci: { type: String},
  asignacion: { type: String},
  tutor: { type: String},
  obs: { type: String},
  paciente: { type: mongoose.Schema.Types.ObjectId, ref: "Ident", required: true }
});

module.exports = mongoose.model("Socioec", socioEconomico);
