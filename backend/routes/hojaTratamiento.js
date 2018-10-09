const express = require("express");
const HTratamiento = require("../models/hojaTratamiento");
// const checkAuth = require("../middleware/check-auth");

const router = express.Router();

router.post("", (req, res, next) => {
  console.log(req);
  const hTratamiento = new HTratamiento({
    noEmpleado: req.body.noEmpleado,
    orgDental: req.body.orgDental,
    diagnostico: req.body.diagnostico,
    tratamiento: req.body.tratamiento,
    costo: req.body.costo,
    noPoliza: req.body.noPoliza,
    paciente: req.body.paciente,
    alumno: req.body.alumno,
    profResponsable: req.body.profResponsable,
    });
    hTratamiento.save()
    .then(createdIdent => {
      res.status(201).json({
        message: "Exploración added successfully",
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
