const mongoose = require("mongoose");

const rehabilitacion = mongoose.Schema({
  referido: { type: String, required: true },
  motivoConsulta: { type: String, required: true },
  traumaDesarmonia: { type: Boolean, required: true },
  posicionDental: { type: Boolean, required: true },
  organosDentarios: { type: Boolean, required: true },
  relacionMarg: { type: Boolean, required: true },
  relacionArcos: { type: Boolean, required: true },
  desgasteCuspi: { type: Boolean, required: true },
  planoOcusal: { type: Boolean, required: true },
  abrasionCerv: { type: Boolean, required: true },
  cierreOcusal: { type: Boolean, required: true },
  diastemas: { type: Boolean, required: true },
  sobremordida: { type: Boolean, required: true },
  supernumerarios: { type: Boolean, required: true },
  mordidaCruzada: { type: Boolean, required: true },
  relacionCorona: { type: Boolean, required: true },
  desviacionesLinea: { type: Boolean, required: true },
  edoRestauraciones: { type: Boolean, required: true },
  relacionTam: { type: Boolean, required: true },
  LongitudArco: { type: Boolean, required: true },
  EspacioDientes: { type: Boolean, required: true },
  desviacionOclusion: { type: Boolean, required: true },
  modelosEstudio: [
    { respuesta: Boolean, required: true },
    { descripcion: String, required: true }
  ],
  diagnosticoClasif: { type: Boolean, required: true },
  exploracionArticulacion: { type: String, required: true },
  otrasExploraciones: { type: String, required: true },
  //faltaba 
planProtesisParcial: [
  {fijo11	:	String, required: true },
{fijo12	:	String, required: true },
{fijo13	:	String, required: true },
{fijo14	:	String, required: true },
{fijo15	:	String, required: true },
{fijo16	:	String, required: true },
{fijo17	:	String, required: true },
{fijo18	:	String, required: true },
{fijo21	:	String, required: true },
{fijo22	:	String, required: true },
{fijo23	:	String, required: true },
{fijo24	:	String, required: true },
{fijo25	:	String, required: true },
{fijo26	:	String, required: true },
{fijo27	:	String, required: true },
{fijo28	:	String, required: true },
{remov11	:	String, required: true },
{remov12	:	String, required: true },
{remov13	:	String, required: true },
{remov14	:	String, required: true },
{remov15	:	String, required: true },
{remov16	:	String, required: true },
{remov17	:	String, required: true },
{remov18	:	String, required: true },
{remov21	:	String, required: true },
{remov22	:	String, required: true },
{remov23	:	String, required: true },
{remov24	:	String, required: true },
{remov25	:	String, required: true },
{remov26	:	String, required: true },
{remov27	:	String, required: true },
{remov28	:	String, required: true },
{fijo41	:	String, required: true },
{fijo42	:	String, required: true },
{fijo43	:	String, required: true },
{fijo44	:	String, required: true },
{fijo45	:	String, required: true },
{fijo46	:	String, required: true },
{fijo47	:	String, required: true },
{fijo48	:	String, required: true },
{fijo31	:	String, required: true },
{fijo32	:	String, required: true },
{fijo33	:	String, required: true },
{fijo34	:	String, required: true },
{fijo35	:	String, required: true },
{fijo36	:	String, required: true },
{fijo37	:	String, required: true },
{fijo38	:	String, required: true },
{remov41	:	String, required: true },
{remov42	:	String, required: true },
{remov43	:	String, required: true },
{remov44	:	String, required: true },
{remov45	:	String, required: true },
{remov46	:	String, required: true },
{remov47	:	String, required: true },
{remov48	:	String, required: true },
{remov31	:	String, required: true },
{remov32	:	String, required: true },
{remov33	:	String, required: true },
{remov34	:	String, required: true },
{remov35	:	String, required: true },
{remov36	:	String, required: true },
{remov37	:	String, required: true },
{remov38	:	String, required: true },

],

  analisisRadiografico: { type: String, required: true },
  anotacionesEspeciales: { type: String, required: true }
});

module.exports = mongoose.model("Rehab", rehabilitacion);