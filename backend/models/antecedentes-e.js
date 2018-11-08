const mongoose = require("mongoose");

const antecedentes_e = mongoose.Schema({
  motivoconsulta: { type: String },
  cuanvisito:{ type: String },
  motivo:{ type: String },
  cdcuantiempo:{ type: String },
  radiografia:{ type: String },
  cuantasRadio:{ type: String },
  cuandoRadio:{ type: String },
  organos:{ type: String },
  siReemplazoOrganos:{ type: String },
  porqueOrganos:{ type: String },
  cuantosOrganos:{ type: String },
  comoReemplazoOrganos:{ type: String },
  cuanReemplazoOrganos:{ type: String },
  cirugias: { type: [String] }, // array
  proanestesia:{ type: String },
  cualesProblemas:{ type: String },
  malestar: { type: [String] }, // array
  explique:{ type: String },
  cuidadoMedico:{ type: String },
  cuidadoHospital:{ type: String },
  medico:{ type: String },
  cuidadoHistorial:{ type: String },
  vistmedult:{ type: String },
  paraque:{ type: String },
  drogas:{ type: String },
  cualesDrogas:{ type: String },
  hemorragiass: { type: [String] }, // array
  recalergicas: { type: [String] }, // array
  consmedica:{ type: String },
  consultaPorque:{ type: String },
  cavidad: { type: [String] }, // array
  higieneo: { type: [String] }, // array
  calculos: { type: [String] }, // array
  exploracionradiografica:{ type: String },
  paciente: { type: mongoose.Schema.Types.ObjectId, ref: "Ident", required: true }
});

module.exports = mongoose.model("AntEst", antecedentes_e);
