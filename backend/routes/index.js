const express = require('express');
const router = express.Router();
const projectsQueries = require('../db/queries/projects');

/* GET all projects. */
router.get('/', function(req, res, next) {
  projectsQueries.getAllProjects()
  .then(data => {
    res.send(data);
    console.log(data);
  })
});


module.exports = router;
