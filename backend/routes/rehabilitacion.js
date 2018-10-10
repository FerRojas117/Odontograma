const express = require("express");
const Rehab = require("../models/rehabilitacion");
// const checkAuth = require("../middleware/check-auth");

const router = express.Router();

router.post("", (req, res, next) => {
  console.log(req);
  const rehab = new Rehab({
    referido: req.body.referido,
    motivoConsulta: req.body.motivoConsulta,
    traumaDesarmonia: req.body.traumaDesarmonia,
    posicionDental: req.body.posicionDental,
    organosDentarios: req.body.organosDentarios,
    relacionMarg: req.body.relacionMarg,
    relacionArcos: req.body.relacionArcos,
    desgasteCuspi: req.body.desgasteCuspi,
    planoOcusal: req.body.planoOcusal,
    abrasionCerv: req.body.abrasionCerv,
    cierreOcusal: req.body.cierreOcusal,
    diastemas: req.body.diastemas,
    sobremordida: req.body.sobremordida,
    supernumerarios: req.body.supernumerarios,
    mordidaCruzada: req.body.mordidaCruzada,
    relacionCorona: req.body.relacionCorona,
    desviacionesLinea: req.body.desviacionesLinea,
    edoRestauraciones: req.body.edoRestauraciones,
    relacionTam: req.body.relacionTam,
    LongitudArco: req.body.LongitudArco,
    EspacioDientes: req.body.EspacioDientes,
    desviacionOclusion: req.body.desviacionOclusion,
    modelosEstudio:{
      respuesta: req.body.respuesta,
      descripcion: req.body.descripcion,
      diagnosticoClasif: req.body.diagnosticoClasif,
      exploracionArticulacion: req.body.exploracionArticulacion,
      analisisRadiografico: req.body.analisisRadiografico,
      anotacionesEspeciales: req.body.anotacionesEspeciales
    },
    planProtesisParcial:{
      fijo11	:	req.body.	fijo11	,
      fijo12	:	req.body.	fijo12	,
      fijo13	:	req.body.	fijo13	,
      fijo14	:	req.body.	fijo14	,
      fijo15	:	req.body.	fijo15	,
      fijo16	:	req.body.	fijo16	,
      fijo17	:	req.body.	fijo17	,
      fijo18	:	req.body.	fijo18	,
      fijo21	:	req.body.	fijo21	,
      fijo22	:	req.body.	fijo22	,
      fijo23	:	req.body.	fijo23	,
      fijo24	:	req.body.	fijo24	,
      fijo25	:	req.body.	fijo25	,
      fijo26	:	req.body.	fijo26	,
      fijo27	:	req.body.	fijo27	,
      fijo28	:	req.body.	fijo28	,
      remov11	:	req.body.	remov11	,
      remov12	:	req.body.	remov12	,
      remov13	:	req.body.	remov13	,
      remov14	:	req.body.	remov14	,
      remov15	:	req.body.	remov15	,
      remov16	:	req.body.	remov16	,
      remov17	:	req.body.	remov17	,
      remov18	:	req.body.	remov18	,
      remov21	:	req.body.	remov21	,
      remov22	:	req.body.	remov22	,
      remov23	:	req.body.	remov23	,
      remov24	:	req.body.	remov24	,
      remov25	:	req.body.	remov25	,
      remov26	:	req.body.	remov26	,
      remov27	:	req.body.	remov27	,
      remov28	:	req.body.	remov28	,
      fijo41	:	req.body.	fijo41	,
      fijo42	:	req.body.	fijo42	,
      fijo43	:	req.body.	fijo43	,
      fijo44	:	req.body.	fijo44	,
      fijo45	:	req.body.	fijo45	,
      fijo46	:	req.body.	fijo46	,
      fijo47	:	req.body.	fijo47	,
      fijo48	:	req.body.	fijo48	,
      fijo31	:	req.body.	fijo31	,
      fijo32	:	req.body.	fijo32	,
      fijo33	:	req.body.	fijo33	,
      fijo34	:	req.body.	fijo34	,
      fijo35	:	req.body.	fijo35	,
      fijo36	:	req.body.	fijo36	,
      fijo37	:	req.body.	fijo37	,
      fijo38	:	req.body.	fijo38	,
      remov41	:	req.body.	remov41	,
      remov42	:	req.body.	remov42	,
      remov43	:	req.body.	remov43	,
      remov44	:	req.body.	remov44	,
      remov45	:	req.body.	remov45	,
      remov46	:	req.body.	remov46	,
      remov47	:	req.body.	remov47	,
      remov48	:	req.body.	remov48	,
      remov31	:	req.body.	remov31	,
      remov32	:	req.body.	remov32	,
      remov33	:	req.body.	remov33	,
      remov34	:	req.body.	remov34	,
      remov35	:	req.body.	remov35	,
      remov36	:	req.body.	remov36	,
      remov37	:	req.body.	remov37	,
      remov38	:	req.body.	remov38	,
      
    }
    });
    rehab.save()
    .then(createdIdent => {
      res.status(201).json({
        message: "Rehabilitación added successfully",
      //  id: createdIdent._id
      });
    })
    .catch((err) => {
      res.status(500).json({
        error: err
      });
    });
  }
);

module.exports = router;
