const mongoose = require("mongoose");

const estudioLabGab = mongoose.Schema({
  resultadosPrevios: { type: String, required: true },
  resultPrevios2: { type: String, required: true },
  paciente: { type: mongoose.Schema.Types.ObjectId, ref: "Ident", required: true }
});

module.exports = mongoose.model("LabGab", estudioLabGab);
