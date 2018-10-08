const mongoose = require("mongoose");

const antecedentesG = mongoose.Schema({
  antecedentesH: { type: String, required: true },
  religion: { type: String, required: true },
  relacionesSexuales: { type: String, required: true },
  noParejas: { type: String, required: true },
  calidadAlimentacion: { type: String, required: true },
  higienePersonal: { type: String, required: true },
  sedentarismo: { type: String, required: true },
  calidadHabitacion: { type: String, required: true },
  personalesPatologicos: { type: String, required: true },
  ginecoObstetricos: [
    { memoria: Boolean },
    { ritmo: Boolean },
    { edadInicio: Boolean },
    { embarazo: Boolean },
    { cesareas: Boolean },
    { abortos: Boolean },
    { hijosBPeso: Boolean },
    { edadHijos: Boolean }
  ],
  tipoPlanificacion: { type: String, required: true },
});

module.exports = mongoose.model("AntecedentesG", antecedentesG);
