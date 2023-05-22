const express = require('express');
const router = express.Router();
const projectQueries = require('../db/queries/projects');

/* GET home page. */

router.get('/projects', function(req, res) {

  projectQueries.getAllProjects()
  .then(data => {
    res.json(data);
  });
  
});

router.put('/projects', function(req, res) {

  const user_id = req.body.user_id;

  projectQueries.getProjectsByUserId(user_id)
  .then(data => {
    return res.json(data);
  });
});

router.put('/project', function(req,res) {

  const project_id = req.body.project_id;

  projectQueries.getProjectsById(project_id)
  .then((data) => {
    return res.json(data);
  });
});

router.post('/projects/new', function(req, res) {

  const project = req.body.project_info;
  const userId = req.body.user_id;

  projectQueries.addProject(userId, project)
  .then((data) => {
    return res.json(data);
  });

});

router.put('/projects/edit', function(req, res) {

  const project = req.body.editedProject;

  projectQueries.editProject(project)
  .then((data) => {
    return res.json(data);
  });

});

module.exports = router;
