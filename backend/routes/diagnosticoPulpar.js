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
    trumetaccion:{
      intra: req.body.intra,
      extra: req.body.extra
    },
    fistula: req.body.fistula,
    reaccionPulpar: {
      testCavit: req.body.testCavit,
      calor: req.body.calor,
      frio: req.body.frio
    },
    organoB: req.body.organoB,
    caries: req.body.caries,
    trauma: req.body.trauma,
    enfPeriodonta: req.body.enfPeriodonta,
    obtDefectuosa: req.body.obtDefectuosa,
    fractura: 
    {raiz: req.body.raiz,
      corona: req.body.corona,
    },
    otro: req.body.otro,

    organoC: req.body.organoC,
    calcificaciones: 
    {corona: req.body.corona,
    raiz: req.body.raiz}
    ,
    resorcion: 
    {interno: req.body.interno,
    externo: req.body.externo
    },
    rarefaccion: 
    {periapical: req.body.periapical,
    radicular: req.body.radicular
    },
    obturacionDefectuosa: req.body.obturacionDefectuosa,
    otro:req.body.otro,
    
    organoDentario: req.body.organoDentario,
    vital: 
   { reversible: req.body.reversible,
    irreversible: req.body.irreversible},
    noVital: 
    {aguda: req.body.aguda,
    cronica: req.body.cronica},
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
