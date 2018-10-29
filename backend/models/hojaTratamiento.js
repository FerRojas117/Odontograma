const mongoose = require("mongoose");

const hojaTratamiento = mongoose.Schema({
  noEmpleado: { type: String, required: true },
  orgDental: { type: String, required: true },
  diagnostico: { type: String, required: true },
  tratamiento: { type: String, required: true },
  costo: { type: String, required: true },
  noPoliza: { type: String, required: true },
  paciente: { type: String, required: true },
  alumno: { type: String, required: true },
  profResponsable: { type: String, required: true },
  paciente: { type: mongoose.Schema.Types.ObjectId, ref: "Ident", required: true }
});

module.exports = mongoose.model("HTratamiento", hojaTratamiento);
