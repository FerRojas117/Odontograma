const express = require("express");
const DiagPulpar = require("../models/diagnosticoPulpar");
const checkAuth = require("../middleware/check-auth");

const router = express.Router();

router.post("", (req, res, next) => {
  console.log(req.body);
  const diagPulpar = new DiagPuplar({
    organoa:	req.body.organoa	,
    tipodedolor:	req.body.tipodedolor	,
    episodios:	req.body.episodios	,
    percusion:	req.body.percusion	,
    movilidad:	req.body.movilidad	,
    cambiodecolor:	req.body.cambiodecolor	,
    trumefaccionintra:	req.body.trumefaccionintra	,
    trumefaccionextra:	req.body.trumefaccionextra	,
    fistula:	req.body.fistula	,
    reaccionpulparcalor:	req.body.reaccionpulparcalor	,
    reaccionpulparfrio:	req.body.reaccionpulparfrio	,
    reacciontestcavit:	req.body.reaccionpulpartestcavit	,
    observaciones:	req.body.		observaciones	,
    organob:	req.body.		organob	,
    caries:	req.body.		caries	,
    trauma:	req.body.		trauma	,
    enfperiodonta:	req.body.		enfperiodonta	,
    obtdefectuosa:	req.body.		obtdefectuosa	,
    fracturacorona:	req.body.		fracturacorona	,
    fracturaraiz:	req.body.		fracturaraiz	,
    otro:	req.body.		otro	,
    otro2:	req.body.		otro2	,
    otro3:	req.body.		otro3	,
    organoc:	req.body.		organoc	,
    calcificacionescorona2:	req.body.		calcificacionescorona2	,
    calcificacionesraiz2:	req.body.		calcificacionesraiz2	,
    resorcioninterno:	req.body.		resorcioninterno	,
    resorcionexterno:	req.body.		resorcionexterno	,
    rarefaccionpenapico:	req.body.		rarefaccionpenapico	,
    rarefaccionradicular:	req.body.		rarefaccionradicular	,
    obturaciondefectuosa2:	req.body.		obturaciondefectuosa2	,
    organodentario:	req.body.		organodentario	,
    vitalreversible:	req.body.		vitalreversible	,
    vitalirreversible:	req.body.		vitalirreversible	,
    novitalaguda:	req.body.		novitalaguda	,
    novitalcronica:	req.body.		novitalcronica	,
    paciente: req.body.paciente
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

// Obtener cada registro del componente para edicion
router.get("/:id", (req, res, next) => {

  console.log(req.params.id);
  diagnostico.findOne({  paciente: req.params.id })
    .then(diagnostico => {
      if (diagnostico) {
        res.status(200).json(diagnostico);
      } else {
        res.status(404).json({ message: "diagnostico no encontrado!" });
      }
    })
    .catch(error => {
      res.status(500).json({
        message: "No se pudo recuperar Ident!"
      });
    });
});


// Editar cada componente
router.put("/:id",
  (req, res, next) => {

    console.log(req.body);
    const diagnostico = new DiagPulpar({
      _id: req.body.id,
      organoa:	req.body.		organoa	,
      tipodedolor:	req.body.		tipodedolor	,
      episodios:	req.body.		episodios	,
      percusion:	req.body.		percusion	,
      movilidad:	req.body.		movilidad	,
      cambiodecolor:	req.body.		cambiodecolor	,
      trumefaccionintra:	req.body.		trumefaccionintra	,
      trumefaccionextra:	req.body.		trumefaccionextra	,
      fistula:	req.body.		fistula	,
      reaccionpulparcalor:	req.body.		reaccionpulparcalor	,
      reaccionpulparfrio:	req.body.		reaccionpulparfrio	,
      reacciontestcavit:	req.body.		reaccionpulpartestcavit	,
      observaciones:	req.body.		observaciones	,
      organob:	req.body.		organob	,
      caries:	req.body.		caries	,
      trauma:	req.body.		trauma	,
      enfperiodonta:	req.body.		enfperiodonta	,
      obtdefectuosa:	req.body.		obtdefectuosa	,
      fracturacorona:	req.body.		fracturacorona	,
      fracturaraiz:	req.body.		fracturaraiz	,
      otro:	req.body.		otro	,
      otro2:	req.body.		otro2	,
      otro3:	req.body.		otro3	,
      organoc:	req.body.		organoc	,
      calcificacionescorona2:	req.body.		calcificacionescorona2	,
      calcificacionesraiz2:	req.body.		calcificacionesraiz2	,
      resorcioninterno:	req.body.		resorcioninterno	,
      resorcionexterno:	req.body.		resorcionexterno	,
      rarefaccionpenapico:	req.body.		rarefaccionpenapico	,
      rarefaccionradicular:	req.body.		rarefaccionradicular	,
      obturaciondefectuosa2:	req.body.		obturaciondefectuosa2	,
      organodentario:	req.body.		organodentario	,
      vitalreversible:	req.body.		vitalreversible	,
      vitalirreversible:	req.body.		vitalirreversible	,
      novitalaguda:	req.body.		novitalaguda	,
      novitalcronica:	req.body.		novitalcronica	,
      paciente: req.body.paciente
    });
    ExFisica.updateOne({ _id: req.params.id}, exp)
      .then(result => {
        if (result.nModified > 0) {
          res.status(200).json({ message: "Actualizacion correcta de Diagnóstico!" });
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
