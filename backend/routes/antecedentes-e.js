const express = require("express");
const AntEst = require("../models/antecedentes-e");
// const checkAuth = require("../middleware/check-auth");

const router = express.Router();

router.post("", (req, res, next) => {
  console.log(req);
  const antEst = new AntEst({
      motivoConsulta: req.body.motivoConsulta,
      visitaEstomatologo: req.body.visitaEstomatologo,
      motivo: req.body.motivo,
      frecuenciaVisita: req.body.frecuenciaVisita,
      //radiografias
      respuesta: req.body.respuesta,
      cuando: req.body.cuando,
      cuantas: req.body.cuantas,
      //organosDentarios
      respuesta: req.body.respuesta,
      cuantos: req.body.cuantos,
      porQue: req.body.porQue,
    //reemplazos
    respuesta: req.body.respuesta,
    como: req.body.como,
    cuando: req.body.cuando,
    //cirugiasDentoalveolares
    respuesta: req.body.respuesta,
    hemorragias: req.body.hemorragias,
    dolorProlongado: req.body.dolorProlongado,
    cicatRetardada: req.body.cicatRetardada,
    alveolitis: req.body.alveolitis,
    //antestesiaLocal
    respuesta: req.body.respuesta,
    tipo: req.body.tipo,
    higieneOral: req.body.higieneOral,
    //boca
    hemorragias: req.body.hemorragias,
    dolores: req.body.dolores,
    saborDes: req.body.saborDes,
    fracturas: req.body.fracturas,
    trismus: req.body.trismus,
    paresia: req.body.paresia,
    parestesia: req.body.parestesia,
    otros: req.body.otros,
    //cuidadoMedico
    respuesta: req.body.respuesta,
    hospital: req.body.sexo,
    historiaNo: req.body.edad,
    //visitaMedico
    respuesta: req.body.respuesta,
    razon: req.body.nombre,
    //drogas
    respuesta: req.body.respuesta,
    cuales: req.body.cuales,
    //hemorragiasSignificativas
    respuesta: req.body.respuesta,
    heridasPequenas: req.body.heridasPequenas,
    traumaLeve: req.body.traumaLeve,
    menstruacion: req.body.menstruacion,
    hematomas: req.body.hematomas,
    petequias: req.body.petequias,
    esquimosis: req.body.esquimosis,
    epistaxis: req.body.epistaxis,
    //alergias
    respuesta: req.body.respuesta,
    alimentos: req.body.alimentos,
    cualesA: req.body.cualesA,
    drogas: req.body.drogas,
    cualesD: req.body.cualesD,
    anestesicos: req.body.anestesicos,
    cualesAn: req.body.cualesAn,
    otros: req.body.otros,
    cualesO: req.body.cualesO,
    //consulta
    respuesta: req.body.respuesta,
    porQue: req.body.porQue,
    observaciones: req.body.observaciones,
    //cavidaOral
    noAnormal: req.body.noAnormal,
    pigmentacion: req.body.pigmentacion,
    labios: req.body.labios,
    pisoBoca: req.body.pisoBoca,
    encia: req.body.encia,
    carrillo: req.body.carrillo,
    paladar: req.body.edad,
    glandulas: req.body.estadoCivil,
    lengua: req.body.lengua,
    orofaringe: req.body.orofaringe,
    salivares: req.body.salivares,
    descripcion: req.body.descripcion,
    //higieneBoca
    buena: req.body.buena,
    regular: req.body.regular,
    mala: req.body.mala,
    haliotosis: req.body.haliotosis,
    materiaAlba: req.body.materiaAlba,
    pigmentaciones: req.body.pigmentaciones,
    placa: req.body.placa,
    //calculos
    ausentes: req.body.ausentes,
    regulares: req.body.regulares,
    abundantes: req.body.abundantes,
    supragingivales: req.body.supragingivales,
    subgingivales: req.body.subgingivales,
    exploracionRadiografica: req.body.exploracionRadiografica
    });
    antEst.save()
    .then(createdIdent => {
      res.status(201).json({
        message: "Antecedentes Estomatológicos added successfully",
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
