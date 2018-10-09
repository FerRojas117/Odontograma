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
    diostemas: req.body.diostemas,
    mordidaCruzada: req.body.mordidaCruzada,
    relacionCorona: req.body.relacionCorona,
    LongitudArco: req.body.LongitudArco,
    desviacionOclusion: req.body.desviacionOclusion,
    //modelos estudio
    respuesta: req.body.respuesta,
    descripcion: req.body.descripcion,
    diagnosticoClasif: req.body.diagnosticoClasif,
    exploracionArticulacion: req.body.exploracionArticulacion,
    analisisRadiografico: req.body.analisisRadiografico,
    anotacionesEspeciales: req.body.anotacionesEspeciales,
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
