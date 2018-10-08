const mongoose = require("mongoose");

const rehabilitacion = mongoose.Schema({
  referido: { type: String, required: true },
  motivoConsulta: { type: String, required: true },
  traumaDesarmonia: { type: Boolean, required: true },
  posicionDental: { type: Boolean, required: true },
  organosDentarios: { type: Boolean, required: true },
  diostemas: { type: Boolean, required: true },
  mordidaCruzada: { type: Boolean, required: true },
  relacionCorona: { type: Boolean, required: true },
  LongitudArco: { type: Boolean, required: true },
  desviacionOclusion: { type: Boolean, required: true },
  modelosEstudio: [
    { respuesta: Boolean, required: true },
    { descripcion: Boolean, required: true }
  ],
  diagnosticoClasif: { type: Boolean, required: true },
  exploracionArticulacion: { type: String, required: true },


  analisisRadiografico: { type: String, required: true },
  anotacionesEspeciales: { type: String, required: true }
});

module.exports = mongoose.model("Rehab", rehabilitacion);
