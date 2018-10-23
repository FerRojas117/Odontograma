const express = require("express");
const Ident = require("../models/identificacion");
const checkAuth = require("../middleware/check-auth");

const router = express.Router();

router.post("", checkAuth, (req, res, next) => {

  const ident = new Ident({
      nombre: req.body.nombre,
      sexo: req.body.sexo,
      edad: req.body.edad,
      fechaNac:req.body.fechaNac,
      estadoCivil: req.body.estadoCivil,
      direccion: req.body.direccion,
      telefono: req.body.telefono,
      ocupacion: req.body.ocupacion,
      lugarDeNacimiento: req.body.lugarDeNacimiento,
      procedencia: req.body.procedencia,
      estadoSocioeconomico: req.body.estadoSocioeconomico,
      creator: req.userData.userId
    });
    ident.save()
    .then(createdIdent => {
      res.status(201).json({
        message: "Identificacion añadida correctamente",
        id: createdIdent._id
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


router.get("", (req, res, next) => {
  const pageSize = +req.query.pagesize;
  const currentPage = +req.query.page;
  const postQuery = Ident.find().select('nombre telefono');
  let fetchedIds;
  if (pageSize && currentPage) {
    postQuery.skip(pageSize * (currentPage - 1)).limit(pageSize);
  }
  postQuery
    .then(documents => {
      fetchedIds = documents;
      return Ident.count();
    })
    .then(count => {
      res.status(200).json({
        message: "Idents fetched successfully!",
        ids: fetchedIds,
        maxIds: count
      });

    })
    .catch(error => {
      res.status(500).json({
        message: "Fetching posts failed!"
      });
    });
});


router.get("/:id", (req, res, next) => {
  Ident.findById(req.params.id)
    .then(ids => {
      if (ids) {
        res.status(200).json(ids);
      } else {
        res.status(404).json({ message: "Ident no encontrado!" });
      }
    })
    .catch(error => {
      res.status(500).json({
        message: "No se pudo recuperar Ident!"
      });
    });
});

router.put("/:id", checkAuth,
  (req, res, next) => {
    const ids = new Ident({
      _id: req.body.id,
      nombre: req.body.nombre,
      sexo: req.body.sexo,
      edad: req.body.edad,
      fechaNac: req.body.fechaNac,
      estadoCivil: req.body.estadoCivil,
      direccion: req.body.direccion,
      telefono: req.body.telefono,
      ocupacion: req.body.ocupacion,
      lugarDeNacimiento: req.body.lugarDeNacimiento,
      procedencia: req.body.procedencia,
      estadoSocioeconomico: req.body.estadoSocioeconomico,
      creator: req.userData.userId
    });
    Ident.updateOne({ _id: req.params.id, creator: req.userData.userId }, ids)
      .then(result => {
        if (result.nModified > 0) {
          res.status(200).json({ message: "Actualizacion correcta!" });
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
