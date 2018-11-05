const express = require("express");
const AntEst = require("../models/antecedentes-e");
 const checkAuth = require("../middleware/check-auth");

const router = express.Router();

router.post("", (req, res, next) => {
  console.log(req.body);
  const antEst = new AntEst({
    paciente: req.body.paciente,
      motivoConsulta: req.body.motivoConsulta,
      visitaEstomatologo: req.body.visitaEstomatologo,
      motivo: req.body.motivo,
      frecuenciaVisita: req.body.frecuenciaVisita,
     radiografias:{
      respuesta: req.body.respuesta,
      cuando: req.body.cuando,
      cuantas: req.body.cuantas
     },

      organosDentarios:{
        respuesta: req.body.respuesta,
        cuantos: req.body.cuantos,
        porQue: req.body.porQue,
      },

    reemplazos:{
      respuesta: req.body.respuesta,
    como: req.body.como,
    cuando: req.body.cuando
    },

    cirugiasDentoalveolares:{
      respuesta: req.body.respuesta,
      hemorragias: req.body.hemorragias,
      dolorProlongado: req.body.dolorProlongado,
      cicatRetardada: req.body.cicatRetardada,
      alveolitis: req.body.alveolitis
    },

    antestesiaLocal:{
      respuesta: req.body.respuesta,
    tipo: req.body.tipo,
    },
    higieneOral: req.body.higieneOral,
    boca:{
      hemorragias: req.body.hemorragias,
      dolores: req.body.dolores,
      saborDes: req.body.saborDes,
      fracturas: req.body.fracturas,
      trismus: req.body.trismus,
      paresia: req.body.paresia,
      parestesia: req.body.parestesia,
      otros: req.body.otros
    },
    cuidadoMedico:{
      respuesta: req.body.respuesta,
      hospital: req.body.hospital,
      historiaNo: req.body.historiaNo
    },

    visitaMedico:{
      respuesta: req.body.respuesta,
      razon: req.body.razon
    },

    drogas:{
      respuesta: req.body.respuesta,
      cuales: req.body.cuales
    },

    hemorragiasSignificativas:{
      respuesta: req.body.respuesta,
      heridasPequenas: req.body.heridasPequenas,
      traumaLeve: req.body.traumaLeve,
      menstruacion: req.body.menstruacion,
      hematomas: req.body.hematomas,
      petequias: req.body.petequias,
      esquimosis: req.body.esquimosis,
      epistaxis: req.body.epistaxis
    },
    alergias:{
      respuesta: req.body.respuesta,
      alimentos: req.body.alimentos,
      cualesA: req.body.cualesA,
      drogas: req.body.drogas,
      cualesD: req.body.cualesD,
      anestesicos: req.body.anestesicos,
      cualesAn: req.body.cualesAn,
      cosmeticos:req.body.cosmeticos, //falto
      cualesC:req.bosy.cualesC,   //falto
      otros: req.body.otros,
      cualesO: req.body.cualesO
    },

    consulta:{
      respuesta: req.body.respuesta,
      porQue: req.body.porQue,
      observaciones: req.body.observaciones
    },

    cavidaOral:{
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
      descripcion: req.body.descripcion
    },

    higieneBoca:{
      buena: req.body.buena,
      regular: req.body.regular,
      mala: req.body.mala,
      haliotosis: req.body.haliotosis,
      materiaAlba: req.body.materiaAlba,
      pigmentaciones: req.body.pigmentaciones,
      placa: req.body.placa
    },
    calculos:{
      ausentes: req.body.ausentes,
      regulares: req.body.regulares,
      abundantes: req.body.abundantes,
      supragingivales: req.body.supragingivales,
      subgingivales: req.body.subgingivales
    },
    exploracionRadiografica: req.body.exploracionRadiografica,
    //AIUDA
    paciente:  req.body.pacienteId
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
    const exp = new antEst({
      _id: req.body.id,
      cuanvisito	:req.body.cuanvisito	,
vistmedult	:req.body.vistmedult	,
motivo	:req.body.motivo	,
cdcuantiempo	:req.body.cdcuantiempo	,
radiografias	:req.body.radiografias	,
radiografia	:req.body.radiografia	,
cuantascuando	:req.body.cuantascuando	,
orgdentarios	:req.body.orgdentarios	,
cuantosporque	:req.body.cuantosporque	,
remplazo	:req.body.remplazo	,
organos	:req.body.organos	,
comocuando	:req.body.comocuando	,
cirugias	:req.body.cirugias	,
malestar	:req.body.malestar	,
tipos	:req.body.tipos	,
proanestesia	:req.body.proanestesia	,
quetipo	:req.body.quetipo	,
higieneoral	:req.body.higieneoral	,
algvezhateni	:req.body.algvezhateni	,
explique	:req.body.explique	,
hospital	:req.body.hospital	,
vismedult	:req.body.vismedult	,
paraque	:req.body.paraque	,
drogas	:req.body.drogas	,
cualesdr	:req.body.cualesdr	,
hemorragiass	:req.body.hemorragiass	,
hsig	:req.body.hsig	,
reacalergicas	:req.body.reacalergicas	,
tipreac	:req.body.tipreac	,
cualesali	:req.body.cualesali	,
cualesd	:req.body.cualesd	,
cualesanes	:req.body.cualesanes	,
cualesotr	:req.body.cualesotr	,
consmedica	:req.body.consmedica	,
porque	:req.body.porque	,
obs	:req.body.obs	,
exploracion	:req.body.exploracion	,
deschigieneoral	:req.body.deschigieneoral	,
calculos	:req.body.calculos	,
exploracionradiografica	:req.body.exploracionradiografica	,
cuantasRadio	:req.body.cuantasRadio	,
cuandoRadio	:req.body.cuandoRadio	,
cuantosOrganos	:req.body.cuantosOrganos	,
porqueOrganos	:req.body.porqueOrganos	,
siReemplazoOrganos	:req.body.siReemplazoOrganos	,
comoReemplazoOrganos	:req.body.comoReemplazoOrganos	,
cuandoReemplazoOrganos	:req.body.cuandoReemplazoOrganos	,
cualesCirugias	:req.body.cualesCirugias	,
problemasAnestesia	:req.body.problemasAnestesia	,
cualesProblemas	:req.body.cualesProblemas	,
cuidadoHospital	:req.body.cuidadoHospital	,
cuidadoMedico	:req.body.cuidadoMedico	,
cuidadoHistorial	:req.body.cuidadoHistorial	,
cuidadoParaque	:req.body.cuidadoParaque	,
cualesDrogas	:req.body.cualesDrogas	,
cualesHemorragias	:req.body.cualesHemorragias	,
cualesAlergias	:req.body.cualesAlergias	,
consultaPorque	:req.body.consultaPorque	,
recalergicas	:req.body.recalergicas	,

    });
    antEst.updateOne({ _id: req.params.id}, exp)
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
