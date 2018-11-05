const express = require("express");
const Consentimiento = require("../models/consentimiento");
 const checkAuth = require("../middleware/check-auth");

const router = express.Router();

router.post("", (req, res, next) => {
  console.log(req.body);
  const consentimiento = new Consentimiento({
    pacienteh: req.body.pacienteh,
    alumno: req.body.religion,
    odontologo: req.body.odontologo,
    autorizoNom: req.body.autorizoNom,
    noAutorizoNom: req.body.noAutorizoNom,
    fechaConsen: req.body.fechaConsen,
    paciente: req.body.paciente
    });
    consentimiento.save()
    .then(createdIdent => {
      res.status(201).json({
        message: "Consentimiento añadido exitosamente",
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
router.get("/:id", (req, res, next) => {

  console.log(req.params.id);
  Consentimiento.findOne({  paciente: req.params.id })
    .then(consen => {
      if (consen) {
        res.status(200).json(consen);
      } else {
        res.status(404).json({ message: "Consentimiento no encontrado!" });
      }
    })
    .catch(error => {
      res.status(500).json({
        message: "No se pudo recuperar Consentimiento!"
      });
    });
});

router.put("/:id",
  (req, res, next) => {

    console.log(req.body);
    const cons = new Consentimiento({
      _id: req.body.id,
      pacienteh: req.body.pacienteh,
    alumno: req.body.religion,
    odontologo: req.body.odontologo,
    autorizoNom: req.body.autorizoNom,
    noAutorizoNom: req.body.noAutorizoNom,
    fechaConsen: req.body.fechaConsen,
    paciente: req.body.paciente
    });
    ExFisica.updateOne({ _id: req.params.id}, exp)
      .then(result => {
        if (result.nModified > 0) {
          res.status(200).json({ message: "Actualizacion correcta de Consentimiento!" });
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
