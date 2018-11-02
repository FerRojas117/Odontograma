const mongoose = require("mongoose");

const consentimiento = mongoose.Schema({
  pacienteh: { type: String, required: true },
  alumno: { type: String, required: true },
  ododntologo: { type: String, required: true },
  autorizoNom: { type: String },
  noAutorizoNom: { type: String },
  fechaNom: { type: String },
  paciente: { type: mongoose.Schema.Types.ObjectId, ref: "Ident", required: true }
});

module.exports = mongoose.model("Consentimiento", consentimiento);
