const mongoose = require("mongoose");

const exFisica = mongoose.Schema({
  peso: { type: String, required: true },
  talla: { type: String, required: true },
  fCardiaca: { type: String, required: true },
  presionArterial: { type: String, required: true },
  temperatura: { type: String, required: true },
  frecuenciaResp: { type: String, required: true },
  inspeccionGeneral: { type: String, required: true },
  cabeza: { type: String, required: true },
  cuello: { type: String, required: true },
  torax: { type: String, required: true },
  abdomen: { type: String, required: true },
  columnaVertebral: { type: String, required: true },
  extremidades: { type: String, required: true },
  diagnostico: { type: String, required: true },
  observaciones: { type: String, required: true },
  recomendaciones: { type: String, required: true },
  nombreMedico: { type: String, required: true },
});

module.exports = mongoose.model("ExFisica", exFisica);
