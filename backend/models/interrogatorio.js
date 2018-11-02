const mongoose = require("mongoose");

const interrogatorio = mongoose.Schema({
  presionArterial	: { type: String, required: true },
    fiebreReumatica	: { type: String, required: true },
    hemorragias	: { type: String, required: true },
    anemia	: { type: String, required: true },
    infarto	: { type: String, required: true },
    otros	: { type: String, required: true },
    cualesOtros	: { type: String, required: true },
    tuberculosis	: { type: String, required: true },
    neumonia	: { type: String, required: true },
    hasma	: { type: String, required: true },
    faringeamigdalitis	: { type: String, required: true },
    bronquitis	: { type: String, required: true },
    gastritis	: { type: String, required: true },
    colitis	: { type: String, required: true },
    gastroenteritis	: { type: String, required: true },
    hepatitis	: { type: String, required: true },
    cuandoHepatitis	: { type: String, required: true },
    diabetes	: { type: String, required: true },
    cuandoDiabetes	: { type: String, required: true },
    glucosa	: { type: String, required: true },
aparatoDigestivo	: { type: String, required: true },
  paciente: { type: mongoose.Schema.Types.ObjectId, ref: "Ident", required: true }
});

module.exports = mongoose.model("Inter", interrogatorio);
