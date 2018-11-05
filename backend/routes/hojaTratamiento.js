const express = require("express");
const HTratamiento = require("../models/hojaTratamiento");
const checkAuth = require("../middleware/check-auth");

const router = express.Router();

router.post("", (req, res, next) => {
  console.log(req.body);
  const hTratamiento = new HTratamiento({
    noEmpleado: req.body.noEmpleado,
    orgDental: req.body.orgDental,
    diagnostico: req.body.diagnostico,
    tratamiento: req.body.tratamiento,
    costo: req.body.costo,
    noPoliza: req.body.noPoliza,
    pacienteh: req.body.pacienteh,
    alumno: req.body.alumno,
    profResponsable: req.body.profResponsable,
    paciente: req.body.paciente,
    });
    hTratamiento.save()
    .then(createdIdent => {
      res.status(201).json({
        message: "Exploración añadido exitosamente",
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
  hTratamiento.findOne({  paciente: req.params.id })
    .then(hojadetrat => {
      if (hojadetrat) {
        res.status(200).json(hojadetrat);
      } else {
        res.status(404).json({ message: "Hoja de tratamiento no encontrado!" });
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
    const hojadetrat = new HojadeTrat({
      _id: req.body.id,
      noempleado	:req.body.	noempleado	,
      organodental	:req.body.	organodental	,
      diagnostico	:req.body.	diagnostico	,
      tratamiento	:req.body.	tratamiento	,
      costo	:req.body.	costo	,
      nopoliza	:req.body.	nopoliza	,
      pacienteh	:req.body.	paciente	,
      alumno	:req.body.	alumno	,
      profesorresponsable	:req.body.	profesorresponsable	,
      paciente: req.body.paciente
    });
    HojadeTrat.updateOne({ _id: req.params.id}, hojadetrat)
      .then(result => {
        if (result.nModified > 0) {
          res.status(200).json({ message: "Actualizacion correcta de Hoja de tratamiento!" });
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
