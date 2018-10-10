const express = require("express");
const Consentimiento = require("../models/consentimiento");
// const checkAuth = require("../middleware/check-auth");

const router = express.Router();

router.post("", (req, res, next) => {
  console.log(req);
  const consentimiento = new Consentimiento({
    paciente: req.body.paciente,
    alumno: req.body.religion,
    odontologo: req.body.odontologo,
    autorizoNom: req.body.autorizoNom,
    noAutorizoNom: req.body.noAutorizoNom,
    fechaNom: req.body.fechaNom
    });
    consentimiento.save()
    .then(createdIdent => {
      res.status(201).json({
        message: "Consentimiento added successfully",
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
