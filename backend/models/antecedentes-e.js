const mongoose = require("mongoose");

const antecedentes_e = mongoose.Schema({
  motivoConsulta: { type: String, required: true },
  visitaEstomatologo: { type: String, required: true },
  motivo: { type: String, required: true },
  frecuenciaVisita: { type: String, required: true },
  radiografias: [
    { respuesta: String, required: true },
    { cuando: String },
    { cuantas: String },
  ],
  organosDentarios: [
    { respuesta: String, required: true },
    { cuantos: String },
    { porQue: String },
  ],
  reemplazos: [
    { respuesta: String, required: true },
    { como: String },
    { cuando: String },
  ],
  cirugiasDentoalveolares: [
    { respuesta: String, required: true },
    { hemorragias: Boolean },
    { dolorProlongado: Boolean },
    { cicatRetardada: Boolean },
    { alveolitis: Boolean }
  ],
  anestesiaLocal: [
    { respuesta: String, required: true },
    { tipo: String }
  ],
  higieneOral: { type: String, required: true },
  boca: [
    { hemorragias: Boolean },
    { dolores: Boolean },
    { saborDes: Boolean },
    { fracturas: Boolean },
    { trismus: Boolean },
    { paresia: Boolean },
    { parestesia: Boolean },
    { otros: String}
  ],
  cuidadoMedico: [
    { respuesta: String, required: true },
    { hospital: String },
    { historiaNo: String }
  ],
  visitaMedico: [
    { respuesta: String, required: true },
    { razon: String }
  ],
  drogas: [
    { respuesta: String, required: true },
    { cuales: String }
  ],
  hemorragiasSignificativas: [
    { respuesta: String, required: true },
    { heridasPequenas: Boolean },
    { traumaLeve: Boolean },
    { menstruacion: Boolean },
    { hematomas: Boolean },
    { petequias: Boolean },
    { esquimosis: Boolean },
    { epistaxis: Boolean }
  ],
  alergias: [
    { respuesta: String, required: true },
    { alimentos: Boolean },
    { cualesA: String },
    { drogas: Boolean },
    { cualesD: String },
    { anestesicos: Boolean },
    { cualesAn: String },
    { otros: Boolean },
    { cualesO: String }
  ],
  consulta: [
    { respuesta: String, required: true },
    { porQue: String },
    { observaciones: String }
  ],
  cavidadOral: [
    { noAnormal: Boolean },
    { pigmentacion: Boolean },
    { labios: Boolean },
    { pisoBoca: Boolean },
    { encia: Boolean },
    { carrillo: Boolean },
    { paladar: Boolean },
    { glandulas: Boolean },
    { lengua: Boolean },
    { orofaringe: Boolean },
    { salivares: Boolean },
    { descripcion: String }
  ],
  higieneBoca: [
    { buena: Boolean },
    { regular: Boolean },
    { mala: Boolean },
    { haliotosis: Boolean },
    { materiaAlba: Boolean },
    { pigmentaciones: Boolean },
    { placa: Boolean }
  ],
  calculos: [
    { ausentes: Boolean },
    { regulares: Boolean },
    { abundantes: Boolean },
    { supragingivales: Boolean },
    { subgingivales: Boolean }
  ],
  exploracionRadiografica: { type: String, required: true },
  paciente: { type: mongoose.Schema.Types.ObjectId, ref: "Ident", required: true }
});

module.exports = mongoose.model("AntEst", antecedentes_e);
