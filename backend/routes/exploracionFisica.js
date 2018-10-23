const express = require("express");
const ExFisica = require("../models/exploracionFisica");
// const checkAuth = require("../middleware/check-auth");

const router = express.Router();

router.post("", (req, res, next) => {
  console.log(req);
  const exFisica = new ExFisica({
    peso: req.body.peso,
    talla: req.body.talla,
    fCardiaca: req.body.fCardiaca,
    presionArterial: req.body.presionArterial,
    temperatura: req.body.temperatura,
    frecuenciaResp: req.body.frecuenciaResp,
    inspeccionGeneral: req.body.inspeccionGeneral,
    cabeza: req.body.cabeza,
    cuello: req.body.cuello,
    torax: req.body.torax,
    abdomen: req.body.abdomen,
    columnaVertebral: req.body.columnaVertebral,
    extremidades: req.body.extremidades,
    diagnostico: req.body.diagnostico,
    observaciones: req.body.observaciones,
    recomendaciones: req.body.recomendaciones,
    nombreMedico: req.body.nombreMedico,
    paciente: req.body.paciente
    });
    exFisica.save()
    .then(createdIdent => {
      res.status(201).json({
        message: "Exploración añadida correctamente"
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
  Ident.findOne({  paciente:req.params.paciente })
    .then(explo => {
      if (explo) {
        res.status(200).json(explo);
      } else {
        res.status(404).json({ message: "Exploracion física no encontrado!" });
      }
    })
    .catch(error => {
      res.status(500).json({
        message: "No se pudo recuperar Ident!"
      });
    });
});



module.exports = router;
