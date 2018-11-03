const mongoose = require("mongoose");

const antecedentesG = mongoose.Schema({
  religion  	: { type: String, required: true },
tiprelsex 	: { type: String, required: true },
parejas 	: { type: String, required: true },
calalim 	: { type: String, required: true },
higpers 	: { type: String, required: true },
sedentarismo  	: { type: String, required: true },
calhabit  	: { type: String, required: true },
perspat 	: { type: String, required: true },
ginecoobst  	: { type: String, required: true },
edades  	: { type: String, required: true },
planifami 	: { type: String, required: true },
partos  	: { type: String, required: true },
fechaParto  	: { type: String, required: true },
planifamitiem 	: { type: String, required: true },
cuantosParto  	: { type: String, required: true },
menarca 	: { type: String, required: true },
embarazos 	: { type: String, required: true },
bajoPeso  	: { type: String, required: true },
edadHijos 	: { type: String, required: true },
hijosMacro  	: { type: String, required: true },
ritmo 	: { type: String, required: true },
regla 	: { type: String, required: true },
cesareas  	: { type: String, required: true },
vidaSex 	: { type: String, required: true },
abortos 	: { type: String, required: true },
anthereditarios	: { type: String, required: true },
  paciente: { type: mongoose.Schema.Types.ObjectId, ref: "Ident", required: true }
});

module.exports = mongoose.model("AntecedentesG", antecedentesG);
