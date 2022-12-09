var express = require('express');
const AlumnoController = require('../Controllers/alumno-controller');
const models = require('../models');
var router = express.Router();

const {Alumno} = requiere("../models/index")
// const Alumno = models.alumno

/* GET users listing. */
router.get("/:id", function(req, res, next) {
  Alumno.findByPk(id).then( (data)=>{
    res.send(data);
  });

  // res.send('respond with a resource');
});

//get users by name
router.get("/name/:name",AlumnoController.getByName);

module.exports = router;
