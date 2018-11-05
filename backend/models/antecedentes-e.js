const mongoose = require("mongoose");

const antecedentes_e = mongoose.Schema({
  motivoConsulta: { type: String, required: true },
  visitaEstomatologo: { type: String, required: true },
  motivo: { type: String, required: true },
  frecuenciaVisita: { type: String, required: true },
  radiografias: {
     respuesta: String,
     cuando: String,
     cuantas: String
  },
  organosDentarios: {
    respuesta: String,
     cuantos: String ,
     porQue: String ,
  },
  reemplazos: {
     respuesta: String,
     como: String ,
     cuando: String ,
  },
  cirugiasDentoalveolares: {
     respuesta: String,
     hemorragias: Boolean ,
     dolorProlongado: Boolean ,
     cicatRetardada: Boolean ,
     alveolitis: Boolean
  },
  anestesiaLocal: {
     respuesta: String,
     tipo: String
  },
  higieneOral: { type: String, required: true },
  boca: {
     hemorragias: Boolean ,
     dolores: Boolean ,
     saborDes: Boolean ,
     fracturas: Boolean ,
     trismus: Boolean ,
     paresia: Boolean ,
     parestesia: Boolean ,
     otros: String
  },
  cuidadoMedico: {
     respuesta: String,
     hospital: String ,
     historiaNo: String
  },
  visitaMedico: {
     respuesta: String,
     razon: String
  },
  drogas: {
     respuesta: String,
     cuales: String
  },
  hemorragiasSignificativas: {
     respuesta: String,
     heridasPequenas: Boolean ,
     traumaLeve: Boolean ,
     menstruacion: Boolean ,
     hematomas: Boolean ,
     petequias: Boolean ,
     esquimosis: Boolean ,
     epistaxis: Boolean
  },
  alergias: {
     respuesta: String,
     alimentos: Boolean ,
     cualesA: String ,
     drogas: Boolean ,
     cualesD: String ,
     anestesicos: Boolean ,
     cualesAn: String ,
     cosmeticos: Boolean ,
     cualesC: String ,
     otros: Boolean ,
     cualesO: String
  },
  consulta: {
     respuesta: String,
     porQue: String ,
     observaciones: String
  },
  cavidadOral: {
     noAnormal: Boolean ,
     pigmentacion: Boolean ,
     labios: Boolean ,
     pisoBoca: Boolean ,
     encia: Boolean ,
     carrillo: Boolean ,
     paladar: Boolean ,
     glandulas: Boolean ,
     lengua: Boolean ,
     orofaringe: Boolean ,
     salivares: Boolean ,
     descripcion: String
  },
  higieneBoca: {
     buena: Boolean ,
     regular: Boolean ,
     mala: Boolean ,
     haliotosis: Boolean ,
     materiaAlba: Boolean ,
   pigmentaciones: Boolean ,
     placa: Boolean
  },
  calculos: {
     ausentes: Boolean ,
     regulares: Boolean ,
     abundantes: Boolean ,
     supragingivales: Boolean ,
     subgingivales: Boolean
  },
  exploracionRadiografica: { type: String, required: true },
  paciente: { type: mongoose.Schema.Types.ObjectId, ref: "Ident", required: true }
});

module.exports = mongoose.model("AntEst", antecedentes_e);
