const express = require("express");
const Inter = require("../models/interrogatorio");
const checkAuth = require("../middleware/check-auth");

const router = express.Router();

router.post("", (req, res, next) => {
  console.log(req.body);
  const inter = new Inter({
    presionArterial	:req.body.	 presionArterial	,
    fiebreReumatica	:req.body.	    fiebreReumatica	,
    hemorragias	:req.body.	    hemorragias	,
    anemia	:req.body.	    anemia	,
    infarto	:req.body.	    infarto	,
    otros	:req.body.	    otros	,
    cualesOtros	:req.body.	    cualesOtros,
    tuberculosis	:req.body.	    tuberculosis	,
    neumonia	:req.body.	    neumonia	,
    hasma	:req.body.	    hasma	,
    faringeamigdalitis	:req.body.	    faringeamigdalitis	,
    bronquitis	:req.body.	    bronquitis	,
    gastritis	:req.body.	    gastritis	,
    colitis	:req.body.	    colitis	,
    gastroenteritis	:req.body.	    gastroenteritis	,
    hepatitis	:req.body.	    hepatitis	,
    cuandoHepatitis	:req.body.	    cuandoHepatitis	,
    diabetes	:req.body.	    diabetes	,
    cuandoDiabetes	:req.body.	    cuandoDiabetes	,
    glucosa	:req.body.	    glucosa	,
aparatoDigestivo	:req.body.	aparatoDigestivo	,

    paciente: req.body.paciente
    });
    inter.save()
    .then(createdIdent => {
      res.status(201).json({
        message: "Interrogatorio added successfully",
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
// Obtener cada registro del componente para edicion
router.get("/:id", (req, res, next) => {

  console.log(req.params.id);
  inter.findOne({  paciente: req.params.id })
    .then(inter => {
      if (inter) {
        res.status(200).json(inter);
      } else {
        res.status(404).json({ message: "Exploracion física no encontrado!" });
      }
    })
    .catch(error => {
      res.status(500).json({
        message: "No se pudo recuperar Ident!"
      });
    });
});


// Editar cada componente
router.put("/:id",
  (req, res, next) => {

    console.log(req.body);
    const exp = new ExFisica({
      _id: req.body.id,
      presionArterial	:req.body.	 presionArterial	,
      fiebreReumatica	:req.body.	    fiebreReumatica	,
      hemorragias	:req.body.	    hemorragias	,
      anemia	:req.body.	    anemia	,
      infarto	:req.body.	    infarto	,
      otros	:req.body.	    otros	,
      cualesOtros	:req.body.	    cualesOtros	,
      tuberculosis	:req.body.	    tuberculosis	,
      neumonia	:req.body.	    neumonia	,
      hasma	:req.body.	    hasma	,
      faringeamigdalitis	:req.body.	    faringeamigdalitis	,
      bronquitis	:req.body.	    bronquitis	,
      gastritis	:req.body.	    gastritis	,
      colitis	:req.body.	    colitis	,
      gastroenteritis	:req.body.	    gastroenteritis	,
      hepatitis	:req.body.	    hepatitis	,
      cuandoHepatitis	:req.body.	    cuandoHepatitis	,
      diabetes	:req.body.	    diabetes	,
      cuandoDiabetes	:req.body.	    cuandoDiabetes	,
      glucosa	:req.body.	    glucosa	,
  aparatoDigestivo	:req.body.	aparatoDigestivo	,  
      paciente: req.body.paciente
    });
    inter.updateOne({ _id: req.params.id}, exp)
      .then(result => {
        if (result.nModified > 0) {
          res.status(200).json({ message: "Actualizacion correcta de Interrogatorio!" });
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
