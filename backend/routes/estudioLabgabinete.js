const express = require("express");
const LabGab = require("../models/estudioLabgabinete");
// const checkAuth = require("../middleware/check-auth");

const router = express.Router();

router.post("", (req, res, next) => {
  console.log(req);
  const labGab = new LabGab({
    resultadosPrevios: req.body.resultadosPrevios,
    resultadosObtenidos: req.body.resultadosObtenidos,
    });
    LabGab.save()
    .then(createdIdent => {
      res.status(201).json({
        message: "EstudiosLG added successfully",
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
