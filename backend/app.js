const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");


const userRoutes = require("./routes/user");
const identRoutes = require("./routes/identificacion");
const exploFisica = require("./routes/exploracionFisica");

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

module.exports = app;
