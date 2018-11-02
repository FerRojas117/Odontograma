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
    { menarca: Boolean },
    { ritmo: Boolean },
    { edadInicio: Boolean },
    { ultimaRegla: String }, //falto
    { embarazo: Boolean },
    { partos: Boolean, required: true},//falto
    { ultimoParto: String }, //falto
    { cesareas: Boolean },
    { abortos: Boolean },
    { hijosBPeso: Boolean },
    { hijosMac: Boolean },//falto
    { edadHijos: Boolean },
    {tipoPlanificacion: String},
    {tiempoMet: String},//falto
  ],
  paciente: { type: mongoose.Schema.Types.ObjectId, ref: "Ident", required: true }
});

module.exports = mongoose.model("AntecedentesG", antecedentesG);
