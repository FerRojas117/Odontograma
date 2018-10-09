const express = require("express");
const Ident = require("../models/identificacion");
// const checkAuth = require("../middleware/check-auth");

const router = express.Router();

router.post("", (req, res, next) => {
  console.log(req);
  const ident = new Ident({
      nombre: req.body.nombre,
      sexo: req.body.sexo,
      edad: req.body.edad,
      estadoCivil: req.body.estadoCivil,
      direccion: req.body.direccion,
      telefono: req.body.telefono,
      ocupacion: req.body.ocupacion,
      lugarDeNacimiento: req.body.lugarDeNacimiento,
      procedencia: req.body.procedencia,
      estadoSocioeconomico: req.body.estadoSocioeconomico
    });
    ident.save()
    .then(createdIdent => {
      res.status(201).json({
        message: "Identificacion added successfully",
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
