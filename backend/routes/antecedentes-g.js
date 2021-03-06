const express = require("express");
const AntecedentesG = require("../models/antecedentes-g");
 const checkAuth = require("../middleware/check-auth");

const router = express.Router();

router.post("", (req, res, next) => {
  console.log(req.body);
  const antecedentesG = new AntecedentesG({
    anthereditarios: req.body.anthereditarios,
    religion: req.body.religion,
    tiprelsex: req.body.tiprelsex,
    parejas: req.body.parejas,
    calalim: req.body.calalim,
    higpers: req.body.higpers,
    sedentarismo: req.body.sedentarismo,
    calhabit: req.body.calhabit,
    perspat: req.body.perspat,
    menarca: req.body.menarca,
    embarazos: req.body.embarazos,
    bajoPeso: req.body.bajoPeso,
    edadHijos: req.body.edadHijos,
    hijosMacro: req.body.hijosMacro,
    ritmo: req.body.ritmo,
    regla: req.body.regla,
    cesareas: req.body.cesareas,
    vidaSex: req.body.vidaSex,
    partos: req.body.partos,
    fechaParto: req.body.fechaParto,
    cuantosParto: req.body.cuantosParto,
    abortos: req.body.abortos,
    planifami: req.body.planifami,
    planifamitiem: req.body.planifamitiem,
paciente: req.body.paciente
    });
    antecedentesG.save()
    .then(createdIdent => {
      res.status(201).json({
        message: "Antecedentes Generales añadido correctamente",
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
      console.log(err);
      res.status(500).json({
        message: "No se pudo recuperar Antecedentes generales!"
      });
    });
});
// Editar cada componente
router.put("/:id",
  (req, res, next) => {

    console.log(req.body);
    const antecedentesG = new AntecedentesG({
      _id: req.body.id,
      anthereditarios: req.body.anthereditarios,
      religion: req.body.religion,
      tiprelsex: req.body.tiprelsex,
      parejas: req.body.parejas,
      calalim: req.body.calalim,
      higpers: req.body.higpers,
      sedentarismo: req.body.sedentarismo,
      calhabit: req.body.calhabit,
      perspat: req.body.perspat,
      menarca: req.body.menarca,
      embarazos: req.body.embarazos,
      bajoPeso: req.body.bajoPeso,
      edadHijos: req.body.edadHijos,
      hijosMacro: req.body.hijosMacro,
      ritmo: req.body.ritmo,
      regla: req.body.regla,
      cesareas: req.body.cesareas,
      vidaSex: req.body.vidaSex,
      partos: req.body.partos,
      fechaParto: req.body.fechaParto,
      cuantosParto: req.body.cuantosParto,
      abortos: req.body.abortos,
      planifami: req.body.planifami,
      planifamitiem: req.body.planifamitiem,
      paciente: req.body.paciente
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

