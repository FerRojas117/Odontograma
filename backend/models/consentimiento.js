const mongoose = require("mongoose");

const consentimiento = mongoose.Schema({
  paciente: { type: String, required: true },
  alumno: { type: String, required: true },
  ododntologo: { type: String, required: true },
  autorizoNom: { type: String },
  noAutorizoNom: { type: String },
  fechaNom: { type: String }
});

module.exports = mongoose.model("Consentimiento", consentimiento);
