const express = require("express");
const Odontograma = require("../models/odontograma");
 const checkAuth = require("../middleware/check-auth");

const router = express.Router();

router.post("", (req, res, next) => {
  console.log(req.body);
  const odontograma = new Odontograma({
    odont: req.body. odontograma,
    trabajo	: req.body.	trabajo	,
    fechaTrab	: req.body.	fechaTrab	,
    profesor	: req.body.	profesor	,
    cariadas	: req.body.	cariadas	,
    perdidas	: req.body.	perdidas	,
    obturadas	: req.body.	obturadas	,
    extracciones	: req.body.	extracciones	,
    indicadas	: req.body.	indicadas	,
    cariadastem	: req.body.	cariadastem	,
    perdidastem	: req.body.	perdidastem	,
    obturadastem	: req.body.	obturadastem	,
    extraccionestem	: req.body.	extraccionestem	,
    indicadastem	: req.body.	indicadastem	,
    nombre	: req.body.	nombre	,
    cuat	: req.body.	cuat	,
    equipo	: req.body.	equipo	,
    sillon	: req.body.	sillon	,
    nombreaux	: req.body.	nombreaux	,
    cuataux	: req.body.	cuataux	,
    equipoaux	: req.body.	equipoaux	,
    sillonaux	: req.body.	sillonaux	,
    paciente: req.body.paciente
    });
    odontograma.save()
    .then(createdIdent => {
      res.status(201).json({
        message: "Odontograma añadido exitosamente",
      //  id: createdIdent._id
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
  Odontograma.findOne({  paciente: req.params.id })
    .then(explo => {
      if (explo) {
        res.status(200).json(explo);
      } else {
        res.status(404).json({ message: "Odontograma no encontrado!" });
      }
    })
    .catch(error => {
      res.status(500).json({
        message: "No se pudo recuperar odontograma!"
      });
    });
});


// Editar cada componente
router.put("/:id",
  (req, res, next) => {

    console.log(req.body);
    const exp = new Odontograma({
      _id: req.body.id,
      odont: req.body. odontograma,
      trabajo	: req.body.	trabajo	,
fechaTrab	: req.body.	fechaTrab	,
profesor	: req.body.	profesor	,
cariadas	: req.body.	cariadas	,
perdidas	: req.body.	perdidas	,
obturadas	: req.body.	obturadas	,
extracciones	: req.body.	extracciones	,
indicadas	: req.body.	indicadas	,
cariadastem	: req.body.	cariadastem	,
perdidastem	: req.body.	perdidastem	,
obturadastem	: req.body.	obturadastem	,
extraccionestem	: req.body.	extraccionestem	,
indicadastem	: req.body.	indicadastem	,
nombre	: req.body.	nombre	,
cuat	: req.body.	cuat	,
equipo	: req.body.	equipo	,
sillon	: req.body.	sillon	,
nombreaux	: req.body.	nombreaux	,
cuataux	: req.body.	cuataux	,
equipoaux	: req.body.	equipoaux	,
sillonaux	: req.body.	sillonaux	,
      paciente: req.body.paciente
    });
    Odontograma.updateOne({ _id: req.params.id}, exp)
      .then(result => {
        if (result.nModified > 0) {
          res.status(200).json({ message: "Actualizacion correcta de Odontograma!" });
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
