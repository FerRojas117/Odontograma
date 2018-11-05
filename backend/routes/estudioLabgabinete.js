const express = require("express");
const LabGab = require("../models/estudioLabgabinete");
 const checkAuth = require("../middleware/check-auth");

const router = express.Router();

router.post("", (req, res, next) => {
  console.log(req.body);
  const labGab = new LabGab({
    resultadosPrevios: req.body.resultadosPrevios,
    resultPrevios2: req.body.resultPrevios2,
    paciente: req.body.paciente
    });
    labGab.save()
    .then(createdIdent => {
      res.status(201).json({
        message: "EstudiosLG añadido exitosamente",
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
  LabGab.findOne({  paciente: req.params.id })
    .then(explo => {
      if (explo) {
        res.status(200).json(explo);
      } else {
        res.status(404).json({ message: "Laboratorio no encontrado!" });
      }
    })
    .catch(error => {
      console.log(err);
      res.status(500).json({
        message: "No se pudo recuperar Ident!"
      });
    });
});


// Editar cada componente
router.put("/:id",
  (req, res, next) => {

    console.log(req.body);
    const labGab = new labGab({
      _id: req.body.id,
      resultadosPrevios: req.body.resultadosPrevios,
      resultPrevios2: req.body.resultPrevios2,
      paciente: req.body.paciente
    });
    LabGab.updateOne({ _id: req.params.id}, exp)
      .then(result => {
        if (result.nModified > 0) {
          res.status(200).json({ message: "Actualizacion correcta deLaboratorio!" });
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
