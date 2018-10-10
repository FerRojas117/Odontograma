const express = require("express");
const Inter = require("../models/interrogatorio");
// const checkAuth = require("../middleware/check-auth");

const router = express.Router();

router.post("", (req, res, next) => {
  console.log(req);
  const inter = new Inter({
    presionArterial: req.body.presionArterial,
    fiebreReu: req.body.fiebreReu,
    hemorragias: req.body.hemorragias,
    anemia: req.body.anemia,
    infarto: req.body.infarto,
    otros: req.body.otros,
    tuberculosis: req.body.tuberculosis,
    neumonia: req.body.neumonia,
    asma: req.body.asma,
    faringoamigdalitis: req.body.faringoamigdalitis,
    bronquitis: req.body.bronquitis,
    gastritis: req.body.gastritis,
    colitis: req.body.colitis,
    gastroenteritis: req.body.gastroenteritis,
    hepatitis: req.body.hepatitis,
    hCuando: req.body.hCuando,
    diabetes: req.body.diabetes,
    dCuando: req.body.dCuando,
    glucosa: req.body.glucosa,
    padecimientoRenal: req.body.padecimientoRenal,
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

module.exports = router;
