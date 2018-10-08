const mongoose = require("mongoose");

const estudioLabGab = mongoose.Schema({
  resultadosPrevios: { type: String, required: true },
  resultadosObtenidos: { type: String, required: true }
});

module.exports = mongoose.model("LabGab", estudioLabGab);
