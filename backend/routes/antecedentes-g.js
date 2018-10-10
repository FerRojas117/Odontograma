const express = require("express");
const AntecedentesG = require("../models/antecedentes-g");
// const checkAuth = require("../middleware/check-auth");

const router = express.Router();

router.post("", (req, res, next) => {
  console.log(req);
  const antecedentesG = new AntecedentesG({
    antecedentesH: req.body.antecedentesH,
    religion: req.body.religion,
    relacionesSexuales: req.body.relacionesSexuales,
    noParejas: req.body.noParejas,
    calidadAlimentacion: req.body.calidadAlimentacion,
    higienePersonal: req.body.higienePersonal,
    sedentarismo: req.body.sedentarismo,
    calidadHabitacion: req.body.calidadHabitacion,
    personalesPatologicos: req.body.personalesPatologicos,
    ginecoObstetricos:{
      menarca: req.body.menarca,
      ritmo: req.body.ritmo,
      edadInicio: req.body.edadInicio,
      ultimaRegla:req.body.ultimaRegla ,
      partos:req.body.partos,
      ultimoParto:req.body.ultimoParto,
      embarazo: req.body.embarazo,
      cesareas: req.body.cesareas,
      abortos: req.body.abortos,
      hijosBPeso: req.body.hijosBPeso,
      hijosMac:req.body.hijosMac,
      edadHijos: req.body.edadHijos,
      tipoPlanificacion: req.body.tipoPlanificacion,
      tiempoMet:req.body.tiempoMet
    }
    });
    antecedentesG.save()
    .then(createdIdent => {
      res.status(201).json({
        message: "Antecedentes Generales added successfully",
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
