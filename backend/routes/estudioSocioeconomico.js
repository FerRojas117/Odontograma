const express = require("express");
const EstudioSE = require("../models/estudioSocioeconomico");
const checkAuth = require("../middleware/check-auth");

const router = express.Router();

router.post("", (req, res, next) => {
  console.log(req.body);
  const socioec = new Socioec({
    telefono: req.body.telefono,
    ocupacion: req.body.ocupacion,
    direcc: req.body.direcc,
    ingresos: req.body.ingresos,
    gradoinst: req.body.gradoinst,
    numfam: req.body.numfam,
    digsoci: req.body.digsoci,
    asignacion: req.body.asignacion,
    tutor: req.body.tutor,
    obs: req.body.obs,
    paciente: req.body.paciente
    });
    socioec.save()
    .then(createdIdent => {
      res.status(201).json({
        message: "Estudios Socioeconómicos añadido exitosamente",
      //  id: createdIdent._id
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
  socioec.findOne({  paciente: req.params.id })
    .then(estu => {
      if (estu) {
        res.status(200).json(estu);
      } else {
        res.status(404).json({ message: "Estudio Socioeconómico no encontrado!" });
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
    const socioec = new EstudioSE({
      _id: req.body.id,
      telefono: req.body.telefono,
    ocupacion: req.body.ocupacion,
    direcc: req.body.direcc,
    ingresos: req.body.ingresos,
    gradoinst: req.body.gradoinst,
    numfam: req.body.numfam,
    digsoci: req.body.digsoci,
    asignacion: req.body.asignacion,
    tutor: req.body.tutor,
    obs: req.body.obs,
    paciente: req.body.paciente
    });
    EstudioSE.updateOne({ _id: req.params.id}, socioec)
      .then(result => {
        if (result.nModified > 0) {
          res.status(200).json({ message: "Actualizacion correcta de Estudio Socioecnómico!" });
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
