const express = require('express');
const router = express.Router();
const projectQueries = require('../db/queries/projects');

/* GET all projects. */
router.get('/', function(req, res, next) {
  projectQueries.getAllProjects()
  .then(data => {
    res.send(data);
    console.log(data);
  })
});


module.exports = router;
