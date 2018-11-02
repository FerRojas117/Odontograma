const mongoose = require("mongoose");

const diagnosticoPulp = mongoose.Schema({
  organoa:	{ type: String, required: true },	
  tipodedolor:	{ type: String, required: true },	
  episodios:	{ type: String, required: true },	
  percusion:	{ type: String, required: true },	
  movilidad:	{ type: String, required: true },	
  cambiodecolor:	{ type: String, required: true },	
  trumefaccionintra:	{ type: String, required: true },	
  trumefaccionextra:	{ type: String, required: true },	
  fistula:	{ type: String, required: true },	
  reaccionpulparcalor:	{ type: String, required: true },	
  reaccionpulparfrio:	{ type: String, required: true },	
  reacciontestcavit:	{ type: String, required: true },	
  observaciones:	{ type: String, required: true },	
  organob:	{ type: String, required: true },	
  caries:	{ type: String, required: true },	
  trauma:	{ type: String, required: true },	
  enfperiodonta:	{ type: String, required: true },	
  obtdefectuosa:	{ type: String, required: true },	
  fracturacorona:	{ type: String, required: true },	
  fracturaraiz:	{ type: String, required: true },	
  otro:	{ type: String, required: true },	
  otro2:	{ type: String, required: true },	
  otro3:	{ type: String, required: true },	
  organoc:	{ type: String, required: true },	
  calcificacionescorona2:	{ type: String, required: true },	
  calcificacionesraiz2:	{ type: String, required: true },	
  resorcioninterno:	{ type: String, required: true },	
  resorcionexterno:	{ type: String, required: true },	
  rarefaccionpenapico:	{ type: String, required: true },	
  rarefaccionradicular:	{ type: String, required: true },	
  obturaciondefectuosa2:	{ type: String, required: true },	
  organodentario:	{ type: String, required: true },	
  vitalreversible:	{ type: String, required: true },	
  vitalirreversible:	{ type: String, required: true },	
  novitalaguda:	{ type: String, required: true },	
  novitalcronica:	{ type: String, required: true },	  
  paciente: { type: mongoose.Schema.Types.ObjectId, ref: "Ident", required: true }
});

module.exports = mongoose.model("DiagPulpar", diagnosticoPulp);
