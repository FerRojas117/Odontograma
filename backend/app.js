const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");


const userRoutes = require("./routes/user");
const identRoutes = require("./routes/identificacion");
const exploFisica = require("./routes/exploracionFisica");

const antecedentes = require("./routes/antecedentes-e");


const antecedentesG = require("./routes/antecedentes-g");
const consentimiento = require("./routes/consentimiento");
const diagnosticoP = require("./routes/diagnosticoPulpar");
const estLabGab = require("./routes/estudioLabgabinete");
const estSocioEc = require("./routes/estudioSocioeconomico");
const hojaTrata = require("./routes/hojaTratamiento");
const interrogatorio = require("./routes/interrogatorio");
const odontograma = require("./routes/odontograma");
const rehabilitacion = require("./routes/rehabilitacion");

const app = express();
mongoose.set('useCreateIndex', true);
mongoose
  .connect(
    "mongodb://localhost:27017/odontograma",
    {
      useNewUrlParser: true
    },
    {
      autoIndex: false
    }
  )
  .then(() => {
    console.log("Connected to database!");
  })
  .catch(() => {
    console.log("Connection failed!");
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});


app.use("/api/user", userRoutes);
app.use("/api/ident", identRoutes);
app.use("/api/exploFisica", exploFisica);

app.use("/api/antEstoma", antecedentes);

app.use("/api/antGenerales", antecedentesG);
app.use("/api/consen", consentimiento);
app.use("/api/diagnostico", diagnosticoP);
app.use("/api/labo", estLabGab);
app.use("/api/estu", estSocioEc);
app.use("/api/hojadeTrat", hojaTrata);
app.use("/api/inter", interrogatorio);
app.use("/api/plandeTratamiento", odontograma);
app.use("/api/rehabilitacion", rehabilitacion);

module.exports = app;
