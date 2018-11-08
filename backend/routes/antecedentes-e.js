const express = require("express");
const AntEst = require("../models/antecedentes-e");
 const checkAuth = require("../middleware/check-auth");

const router = express.Router();

router.post("", (req, res, next) => {
  console.log(req.body);
  const antEst = new AntEst({
    motivoconsulta:  req.body.motivoconsulta,
    cuanvisito: req.body.cuanvisito,
    motivo: req.body.motivo,
    cdcuantiempo: req.body.cdcuantiempo,
    radiografia: req.body.radiografia,
    cuantasRadio: req.body.cuantasRadio,
    cuandoRadio: req.body.cuandoRadio,
    organos: req.body.organos,
    siReemplazoOrganos: req.body.siReemplazoOrganos,
    porqueOrganos: req.body.porqueOrganos,
    cuantosOrganos: req.body.cuantosOrganos,
    comoReemplazoOrganos: req.body.comoReemplazoOrganos,
    cuanReemplazoOrganos: req.body.cuanReemplazoOrganos,
    cirugias: req.body.cirugias, // array
    proanestesia: req.body.proanestesia,
    cualesProblemas: req.body.cualesProblemas,
    malestar: req.body.malestar, // array
    explique: req.body.explique,
    cuidadoMedico: req.body.cuidadoMedico,
    cuidadoHospital: req.body.cuidadoHospital,
    medico: req.body.medico,
    cuidadoHistorial: req.body.cuidadoHistorial,
    vistmedult: req.body.vistmedult,
    paraque: req.body.paraque,
    drogas: req.body.drogas,
    cualesDrogas: req.body.cualesDrogas,
    hemorragiass: req.body.hemorragiass, // array
    recalergicas: req.body.recalergicas, // array
    consmedica: req.body.consmedica,
    consultaPorque: req.body.consultaPorque,
    cavidad: req.body.cavidad, // array
    higieneo: req.body.higieneo, // array
    calculos: req.body.calculos, // array
    exploracionradiografica: req.body.exploracionradiografica,
    paciente: req.body.paciente
    });
    antEst.save()
    .then(createdIdent => {
      res.status(201).json({
        message: "Antecedentes Estomatológicos añadida correctamente",
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
router.get("/:id", (req, res, next) => {

  console.log(req.params.id);
  antEst.findOne({  paciente: req.params.id })
    .then(antece => {
      if (antece) {
        res.status(200).json(antece);
      } else {
        res.status(404).json({ message: "Antecedentes estomatológicos no encontrado!" });
      }
    })
    .catch(error => {
      res.status(500).json({
        message: "No se pudo recuperar Antecendetes!"
      });
    });
});

// Editar cada componente
router.put("/:id",
  (req, res, next) => {

    console.log(req.body);
    const antEst = new antEst({
      _id: req.body.id,
      motivoconsulta:  req.body.motivoconsulta,
      cuanvisito: req.body.cuanvisito,
      motivo: req.body.motivo,
      cdcuantiempo: req.body.cdcuantiempo,
      radiografia: req.body.radiografia,
      cuantasRadio: req.body.cuantasRadio,
      cuandoRadio: req.body.cuandoRadio,
      organos: req.body.organos,
      siReemplazoOrganos: req.body.siReemplazoOrganos,
      porqueOrganos: req.body.porqueOrganos,
      cuantosOrganos: req.body.cuantosOrganos,
      comoReemplazoOrganos: req.body.comoReemplazoOrganos,
      cuanReemplazoOrganos: req.body.cuanReemplazoOrganos,
      cirugias: req.body.cirugias, // array
      proanestesia: req.body.proanestesia,
      cualesProblemas: req.body.cualesProblemas,
      malestar: req.body.malestar, // array
      explique: req.body.explique,
      cuidadoMedico: req.body.cuidadoMedico,
      cuidadoHospital: req.body.cuidadoHospital,
      medico: req.body.medico,
      cuidadoHistorial: req.body.cuidadoHistorial,
      vistmedult: req.body.vistmedult,
      paraque: req.body.paraque,
      drogas: req.body.drogas,
      cualesDrogas: req.body.cualesDrogas,
      hemorragiass: req.body.hemorragiass, // array
      recalergicas: req.body.recalergicas, // array
      consmedica: req.body.consmedica,
      consultaPorque: req.body.consultaPorque,
      cavidad: req.body.cavidad, // array
      higieneo: req.body.higieneo, // array
      calculos: req.body.calculos, // array
      exploracionradiografica: req.body.exploracionradiografica,
      paciente: req.body.paciente
    });
    antEst.updateOne({ _id: req.params.id}, antEst)
      .then(result => {
        if (result.nModified > 0) {
          res.status(200).json({ message: "Actualizacion correcta antecedentes estomatológicos" });
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
