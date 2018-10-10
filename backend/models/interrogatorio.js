const mongoose = require("mongoose");

const interrogatorio = mongoose.Schema({
  presionArterial: { type: String, required: true },
  fiebreReu: { type: Boolean, required: true },
  hemorragias: { type: Boolean, required: true },
  anemia: { type: Boolean, required: true },
  infarto: { type: Boolean, required: true },
  otros: { type: String, required: true },
  tuberculosis: { type: Boolean, required: true },
  neumonia: { type: Boolean, required: true },
  asma: { type: Boolean, required: true },
  faringoamigdalitis: { type: Boolean, required: true },
  bronquitis: { type: Boolean, required: true },
  gastritis: { type: Boolean, required: true },
  colitis: { type: Boolean, required: true },
  gastroenteritis: { type: Boolean, required: true },
  hepatitis: { type: Boolean, required: true },
  hCuando: { type: String },
  diabetes: { type: Boolean, required: true },
  dCuando: { type: String },
  glucosa: { type: String, required: true },
  padecimientoRenal: { type: String }
});

module.exports = mongoose.model("Inter", interrogatorio);
