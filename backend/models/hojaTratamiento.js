const mongoose = require("mongoose");

const hojaTratamiento = mongoose.Schema({
  pacienteh: { type: String, required: true },
  alumno: { type: String, required: true },
  profresponsable: { type: String, required: true },
  noempleado: { type: String, required: true },
  orgdental: { type: String, required: true },
  diagnostico: { type: String, required: true },
  tratamiento: { type: String, required: true },
  costo: { type: String, required: true },
  nopoliza: { type: String, required: true },
  paciente: { type: mongoose.Schema.Types.ObjectId, ref: "Ident", required: true }
});

module.exports = mongoose.model("HTratamiento", hojaTratamiento);
