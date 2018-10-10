const mongoose = require("mongoose");

const diagnosticoPulp = mongoose.Schema({
  organoA: { type: String, required: true },
  tipoDeDolor: { type: String, required: true },
  episodios: { type: String, required: true },
  percusion: { type: String, required: true },
  movilidad: { type: String, required: true },
  cambioColor: { type: String, required: true },
  trumetaccion: [
     { intra: String, required: true },
     { extra: String, required: true },
  ],
  fistula: { type: String, required: true },
  reaccionPulpar: [
    { Calor: String, required: true },
    { Frio: String, required: true },
    { testCavit: String, required: true }
  ],

  organoB: { type: String, required: true },
  caries: { type: String, required: true },
  trauma: { type: String, required: true },
  enfPeriodonta: { type: String, required: true },
  obtDefectuosa: { type: String, required: true },
  fractura: [
  {corona:  String, required: true },
   {raiz: String, required: true }
],
otro: { type:String, required: true },


  organoC: { type: String, required: true },
  calcificaciones: 
 [ { corona: String, required: true },
   { raiz: String, required: true }
],
  resorcion: [ 
    { interno: String, required: true },
    { externo: String, required: true }
 ],
  rarefaccion: [ 
    { periapical: String, required: true },
    { radicular: String, required: true }
 ],
  obturacionDefectuosa: { type: String, required: true },
  otro: { type: String, required: true },

  organoDentario: { type: String, required: true },
  vital: 
  [ 
    { reversible: String, required: true },
    { irreversible: String, required: true }
 ],
  
  noVital:  [ 
    { aguda: String, required: true },
    { cronica: String, required: true }
 ],

  observaciones: { type: String, required: true }
});

module.exports = mongoose.model("DiagPulpar", diagnosticoPulp);
