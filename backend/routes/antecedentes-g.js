const express = require("express");
const AntecedentesG = require("../models/antecedentes-g");
 const checkAuth = require("../middleware/check-auth");

const router = express.Router();

router.post("", (req, res, next) => {
  console.log(req.body);
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
    paciente: req.body.paciente,
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
      tiempoMet:req.body.tiempoMet,
    }
    });
    antecedentesG.save()
    .then(createdIdent => {
      res.status(201).json({
        message: "Antecedentes Generales añadido correctamente",
      });
    })
    .catch((err) => {
      res.status(500).json({
        error: err
      });
    });
  }
);
// Obtener cada registro del componente para edicion
router.get("/:id", (req, res, next) => {

  console.log(req.params.id);
  antecedentesG.findOne({  paciente: req.params.id })
    .then(antg => {
      if (antg) {
        res.status(200).json(antg);
      } else {
        res.status(404).json({ message: "Antecedentes generales no encontrado!" });
      }
    })
    .catch(error => {
      res.status(500).json({
        message: "No se pudo recuperar Antecedentes generales!"
      });
    });
});
// Editar cada componente
router.put("/:id",
  (req, res, next) => {

    console.log(req.body);
    const exp = new ExFisica({
      _id: req.body.id,
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
      tiempoMet:req.body.tiempoMet},
      paciente: req.body.paciente,
    });
    ExFisica.updateOne({ _id: req.params.id}, exp)
      .then(result => {
        if (result.nModified > 0) {
          res.status(200).json({ message: "Actualizacion correcta de antecedentes!" });
        } else {
          res.status(401).json({ message: "No autorizado!" });
        }
      })
      .catch(error => {
        res.status(500).json({
          message: "No se pudo actualizar!"
        });
      });
  }
);



module.exports = router;

