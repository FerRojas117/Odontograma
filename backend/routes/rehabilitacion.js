const express = require("express");
const Rehab = require("../models/rehabilitacion");
const checkAuth = require("../middleware/check-auth");

const router = express.Router();

router.post("", (req, res, next) => {
  console.log(req.body);
  const rehab = new Rehab({
    referidoPor	:req.body.	referidoPor	,
motivoConsulta	:req.body.	motivoConsulta	,
moEstu	:req.body.	moEstu	,
descripcion	:req.body.	descripcion	,
diagO	:req.body.	diagO	,
exTem	:req.body.	exTem	,
examenPara	:req.body.	examenPara	,
otrasEx	:req.body.	otrasEx	,
analisisRadio	:req.body.	analisisRadio	,
trataProte	:req.body.	trataProte	,
fijo11	:req.body.	fijo11	,
fijo12	:req.body.	fijo12	,
fijo13	:req.body.	fijo13	,
fijo14	:req.body.	fijo14	,
fijo15	:req.body.	fijo15	,
fijo16	:req.body.	fijo16	,
fijo17	:req.body.	fijo17	,
fijo18	:req.body.	fijo18	,
fijo21	:req.body.	fijo21	,
fijo22	:req.body.	fijo22	,
fijo23	:req.body.	fijo23	,
fijo24	:req.body.	fijo24	,
fijo25	:req.body.	fijo25	,
fijo26	:req.body.	fijo26	,
fijo27	:req.body.	fijo27	,
fijo28	:req.body.	fijo28	,
fijo41	:req.body.	fijo41	,
fijo42	:req.body.	fijo42	,
fijo43	:req.body.	fijo43	,
fijo44	:req.body.	fijo44	,
fijo45	:req.body.	fijo45	,
fijo46	:req.body.	fijo46	,
fijo47	:req.body.	fijo47	,
fijo48	:req.body.	fijo48	,
fijo31	:req.body.	fijo31	,
fijo32	:req.body.	fijo32	,
fijo33	:req.body.	fijo33	,
fijo34	:req.body.	fijo34	,
fijo35	:req.body.	fijo35	,
fijo36	:req.body.	fijo36	,
fijo37	:req.body.	fijo37	,
fijo38	:req.body.	fijo38	,
remov11	:req.body.	remov11	,
remov12	:req.body.	remov12	,
remov13	:req.body.	remov13	,
remov14	:req.body.	remov14	,
remov15	:req.body.	remov15	,
remov16	:req.body.	remov16	,
remov17	:req.body.	remov17	,
remov18	:req.body.	remov18	,
remov21	:req.body.	remov21	,
remov22	:req.body.	remov22	,
remov23	:req.body.	remov23	,
remov24	:req.body.	remov24	,
remov25	:req.body.	remov25	,
remov26	:req.body.	remov26	,
remov27	:req.body.	remov27	,
remov28	:req.body.	remov28	,
remov41	:req.body.	remov41	,
remov42	:req.body.	remov42	,
remov43	:req.body.	remov43	,
remov44	:req.body.	remov44	,
remov45	:req.body.	remov45	,
remov46	:req.body.	remov46	,
remov47	:req.body.	remov47	,
remov48	:req.body.	remov48	,
remov31	:req.body.	remov31	,
remov32	:req.body.	remov32	,
remov33	:req.body.	remov33	,
remov34	:req.body.	remov34	,
remov35	:req.body.	remov35	,
remov36	:req.body.	remov36	,
remov37	:req.body.	remov37	,
remov38	:req.body.	remov38	,
    paciente: req.body.paciente
    });
    rehab.save()
    .then(createdIdent => {
      res.status(201).json({
        message: "Rehabilitación añadida exitosamente",
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
  }
);
// Obtener cada registro del componente para edicion
router.get("/:id", (req, res, next) => {

  console.log(req.params.id);
  Rehab.findOne({  paciente: req.params.id })
    .then(rehab => {
      if (rehab) {
        res.status(200).json(explo);
      } else {
        res.status(404).json({ message: "Rehabilitación no encontrado!" });
      }
    })
    .catch(error => {
      res.status(500).json({
        message: "No se pudo recuperar Rehabilitacion!"
      });
    });
});


// Editar cada componente
router.put("/:id",
  (req, res, next) => {

    console.log(req.body);
    const rehab = new Rehab({
      _id: req.body.id,
      referidoPor	:req.body.	referidoPor	,
motivoConsulta	:req.body.	motivoConsulta	,
moEstu	:req.body.	moEstu	,
descripcion	:req.body.	descripcion	,
diagO	:req.body.	diagO	,
exTem	:req.body.	exTem	,
examenPara	:req.body.	examenPara	,
otrasEx	:req.body.	otrasEx	,
analisisRadio	:req.body.	analisisRadio	,
trataProte	:req.body.	trataProte	,
fijo11	:req.body.	fijo11	,
fijo12	:req.body.	fijo12	,
fijo13	:req.body.	fijo13	,
fijo14	:req.body.	fijo14	,
fijo15	:req.body.	fijo15	,
fijo16	:req.body.	fijo16	,
fijo17	:req.body.	fijo17	,
fijo18	:req.body.	fijo18	,
fijo21	:req.body.	fijo21	,
fijo22	:req.body.	fijo22	,
fijo23	:req.body.	fijo23	,
fijo24	:req.body.	fijo24	,
fijo25	:req.body.	fijo25	,
fijo26	:req.body.	fijo26	,
fijo27	:req.body.	fijo27	,
fijo28	:req.body.	fijo28	,
fijo41	:req.body.	fijo41	,
fijo42	:req.body.	fijo42	,
fijo43	:req.body.	fijo43	,
fijo44	:req.body.	fijo44	,
fijo45	:req.body.	fijo45	,
fijo46	:req.body.	fijo46	,
fijo47	:req.body.	fijo47	,
fijo48	:req.body.	fijo48	,
fijo31	:req.body.	fijo31	,
fijo32	:req.body.	fijo32	,
fijo33	:req.body.	fijo33	,
fijo34	:req.body.	fijo34	,
fijo35	:req.body.	fijo35	,
fijo36	:req.body.	fijo36	,
fijo37	:req.body.	fijo37	,
fijo38	:req.body.	fijo38	,
remov11	:req.body.	remov11	,
remov12	:req.body.	remov12	,
remov13	:req.body.	remov13	,
remov14	:req.body.	remov14	,
remov15	:req.body.	remov15	,
remov16	:req.body.	remov16	,
remov17	:req.body.	remov17	,
remov18	:req.body.	remov18	,
remov21	:req.body.	remov21	,
remov22	:req.body.	remov22	,
remov23	:req.body.	remov23	,
remov24	:req.body.	remov24	,
remov25	:req.body.	remov25	,
remov26	:req.body.	remov26	,
remov27	:req.body.	remov27	,
remov28	:req.body.	remov28	,
remov41	:req.body.	remov41	,
remov42	:req.body.	remov42	,
remov43	:req.body.	remov43	,
remov44	:req.body.	remov44	,
remov45	:req.body.	remov45	,
remov46	:req.body.	remov46	,
remov47	:req.body.	remov47	,
remov48	:req.body.	remov48	,
remov31	:req.body.	remov31	,
remov32	:req.body.	remov32	,
remov33	:req.body.	remov33	,
remov34	:req.body.	remov34	,
remov35	:req.body.	remov35	,
remov36	:req.body.	remov36	,
remov37	:req.body.	remov37	,
remov38	:req.body.	remov38	,
      paciente: req.body.paciente
    });
    Rehab.updateOne({ _id: req.params.id}, exp)
      .then(result => {
        if (result.nModified > 0) {
          res.status(200).json({ message: "Actualizacion correcta de Rehabilitación!" });
        } else {
          res.status(401).json({ message: "No autorizado!" });
        }
      })
      .catch(error => {
        res.status(500).json({
          message: "No se pudo actualizar!"
        });
      });
  }
);



module.exports = router;
