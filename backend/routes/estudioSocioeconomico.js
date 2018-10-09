const express = require("express");
const EstudioSE = require("../models/estudioSocioeconomico");
// const checkAuth = require("../middleware/check-auth");

const router = express.Router();

router.post("", (req, res, next) => {
  console.log(req);
  const socioec = new Socioec({
    nombre: req.body.nombre,
    edad: req.body.edad,
    direccion: req.body.direccion,
    tiempoRadicar: req.body.tiempoRadicar,
    fechaNacimiento: req.body.fechaNacimiento,
    telefono: req.body.telefono,
    lugarDeNacimiento: req.body.lugarDeNacimiento,
    sexo: req.body.sexo,
    estadoCivil: req.body.estadoCivil,
    ocupacion: req.body.ocupacion,
    lugar: req.body.lugar,
    direccion: req.body.direccion,
    rangoIngresos: req.body.rangoIngresos,
    gradoInstruccion: req.body.gradoInstruccion,
    noPersonasFamilia: req.body.noPersonasFamilia,
    diagnosticoSocial: req.body.diagnosticoSocial,
    asignado: req.body.asignado,
    alumno: req.body.alumno,
    tutor: req.body.tutor,
    observaciones: req.body.observaciones,
    });
    socioec.save()
    .then(createdIdent => {
      res.status(201).json({
        message: "Estudios Socioeconómicos added successfully",
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
