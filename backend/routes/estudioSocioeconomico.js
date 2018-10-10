const express = require("express");
const EstudioSE = require("../models/estudioSocioeconomico");
// const checkAuth = require("../middleware/check-auth");

const router = express.Router();

router.post("", (req, res, next) => {
  console.log(req);
  const socioec = new Socioec({
    nombre: req.body.nombre, //r_ident
    edad: req.body.edad, //r_ident
    direccion: req.body.direccion,//r_ident
    tiempoRadicar: req.body.tiempoRadicar,
    fechaNacimiento: req.body.fechaNacimiento,
    telefono: req.body.telefono,//r_ident
    lugarDeNacimiento: req.body.lugarDeNacimiento,//r_ident
    sexo: req.body.sexo,//r_ident
    estadoCivil: req.body.estadoCivil,//r_ident
    ocupacion: req.body.ocupacion,//r_ident
    lugar: req.body.lugar,
    direccion: req.body.direccion,//r_ident
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
