const mongoose = require("mongoose");

const diagnosticoPulp = mongoose.Schema({
  organoA: { type: String, required: true },
  tipoDeDolor: { type: String, required: true },
  episodios: { type: String, required: true },
  percusion: { type: String, required: true },
  movilidad: { type: String, required: true },
  cambioColor: { type: String, required: true },
  trumetaccion: { type: String, required: true },
  intra: { type: String, required: true },
  extra: { type: String, required: true },
  fisura: { type: String, required: true },
  reaccionPulpar: { type: String, required: true },
  testCavit: { type: String, required: true },

  organoB: { type: String, required: true },
  caries: { type: String, required: true },
  trauma: { type: String, required: true },
  enfPeriodonta: { type: String, required: true },
  obtDefectuosa: { type: String, required: true },
  fractura: { type: String, required: true },
  corona: { type: String, required: true },
  raiz: { type: String, required: true },
  otro: { type: String, required: true },

  organoC: { type: String, required: true },
  calificaciones: { type: String, required: true },
  corona: { type: String, required: true },
  raiz: { type: String, required: true },
  resorcion: { type: String, required: true },
  interno: { type: String, required: true },
  externo: { type: String, required: true },
  refacciones: { type: String, required: true },
  penapico: { type: String, required: true },
  radicular: { type: String, required: true },
  obturacionDefectuosa: { type: String, required: true },
  otro: { type: String, required: true },

  organoDentario: { type: String, required: true },
  vital: { type: String, required: true },
  reversible: { type: String, required: true },
  irreversible: { type: String, required: true },
  noVital: { type: String, required: true },
  aguda: { type: String, required: true },
  cronica: { type: String, required: true },

  observaciones: { type: String, required: true }
});

module.exports = mongoose.model("DiagPulpar", diagnosticoPulp);
