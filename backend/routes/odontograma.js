const express = require("express");
const Odontograma = require("../models/odontograma");
// const checkAuth = require("../middleware/check-auth");

const router = express.Router();

router.post("", (req, res, next) => {
  console.log(req);
  const odontograma = new Odontograma({
    fecha: req.body.fecha,
    trabajo: req.body.trabajo,
    //permanentes
    cariadas: req.body.cariadas,
    perdidas: req.body.perdidas,
    obturadas: req.body.obturadas,
    extracciones: req.body.extracciones,
    indicadas: req.body.indicadas,
    //obturadas
    cariadas: req.body.cariadas,
    perdidas: req.body.perdidas,
    obturadas: req.body.obturadas,
    extracciones: req.body.extracciones,
    indicadas: req.body.indicadas,
    //operador
    operador: req.body.operador,
    cuat: req.body.cuat,
    equipo: req.body.equipo,
    sillon: req.body.sillon,
    //auxiliar
    auxiliar: req.body.auxiliar,
    cuat: req.body.cuat,
    equipo: req.body.equipo,
    sillon: req.body.sillon,
    });
    odontograma.save()
    .then(createdIdent => {
      res.status(201).json({
        message: "Odontograma added successfully",
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