const express = require("express");
const Ident = require("../models/identificacion");
const checkAuth = require("../middleware/check-auth");

const router = express.Router();

router.post("", checkAuth, (req, res, next) => {

  const ident = new Ident({
      nombre: req.body.nombre,
      sexo: req.body.sexo,
      edad: req.body.edad,
      fechaNac:req.body.fechaNac,
      estadoCivil: req.body.estadoCivil,
      direccion: req.body.direccion,
      telefono: req.body.telefono,
      ocupacion: req.body.ocupacion,
      lugarDeNacimiento: req.body.lugarDeNacimiento,
      procedencia: req.body.procedencia,
      estadoSocioeconomico: req.body.estadoSocioeconomico,
      creator: req.userData.userId
    });
    console.log(ident);
    ident.save()
    .then(createdIdent => {
      res.status(201).json({
        message: "Identificacion añadida correctamente",
        id: createdIdent._id
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

module.exports = router;
