const mongoose = require("mongoose");

const antecedentesG = mongoose.Schema({
  anthereditarios: { type: String},
  religion: { type: String},
  tiprelsex: { type: String},
  parejas: { type: String},
  calalim: { type: String},
  higpers: { type: String},
  sedentarismo: { type: String},
  calhabit: { type: String},
  perspat: { type: String},
  menarca: { type: String},
  embarazos: { type: String},
  bajoPeso: { type: String},
  edadHijos: { type: String},
  hijosMacro: { type: String},
  ritmo: { type: String},
  regla: { type: String},
  cesareas: { type: String},
  vidaSex: { type: String},
  partos: { type: String},
  fechaParto: { type: String},
  cuantosParto: { type: String},
  abortos: { type: String},
  planifami: { type: String},
  planifamitiem: { type: String},
  paciente: { type: mongoose.Schema.Types.ObjectId, ref: "Ident", required: true }
});

module.exports = mongoose.model("AntecedentesG", antecedentesG);
