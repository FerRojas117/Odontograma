const express = require("express");
const DiagPulpar = require("../models/diagnosticoPulpar");
// const checkAuth = require("../middleware/check-auth");

const router = express.Router();

router.post("", (req, res, next) => {
  console.log(req);
  const diagPulpar = new DiagPuplar({
    organoA: req.body.organoA,
    tipoDeDolor: req.body.tipoDeDolor,
    episodios: req.body.episodios,
    percusion: req.body.percusion,
    movilidad: req.body.movilidad,
    cambioColor: req.body.cambioColor,
    trumetaccion: req.body.trumetaccion,
    intra: req.body.intra,
    extra: req.body.extra,
    fisura: req.body.fisura,
    reaccionPulpar: req.body.reaccionPulpar,
    testCavit: req.body.testCavit,
    organoB: req.body.organoB,
    caries: req.body.caries,
    trauma: req.body.trauma,
    enfPeriodonta: req.body.enfPeriodonta,
    obtDefectuosa: req.body.obtDefectuosa,
    fractura: req.body.fractura,
    raiz: req.body.raiz,
    otro: req.body.otro,
    organoC: req.body.organoC,
    calificaciones: req.body.calificaciones,
    corona: req.body.corona,
    raiz: req.body.raiz,
    resorcion: req.body.resorcion,
    interno: req.body.interno,
    externo: req.body.externo,
    refacciones: req.body.refacciones,
    penapico: req.body.penapico,
    radicular: req.body.radicular,
    obturacionDefectuosa: req.body.obturacionDefectuosa,
    organoDentario: req.body.organoDentario,
    vital: req.body.vital,
    reversible: req.body.reversible,
    irreversible: req.body.irreversible,
    noVital: req.body.noVital,
    aguda: req.body.aguda,
    cronica: req.body.cronica,
    observaciones: req.body.observaciones
    });
    diagPulpar.save()
    .then(createdIdent => {
      res.status(201).json({
        message: "diagnóstico pulpar added successfully",
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
