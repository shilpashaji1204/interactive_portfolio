const express = require('express');
const router = express.Router();
const projectQueries = require('../db/queries/projects');

/* GET home page. */

router.get('/', function(req, res) {

  projectQueries.getAllProjects()
  .then(data => {
    res.json(data);
  });
  
});

router.get('/projects', function(req, res) {

  userId = req.body.userId;

  projectQueries.getProjectsByUserId(userId)
  .then(data => {
    res.json(data);
  });
});

/* GET about page */
// router.get('/about', function(req, res) {
//   res.send('about page');
// });

// /* Individual Project  Page*/
// router.get('/projects/:project_id', (req, res) => {
//   projectQueries.getProjectsById(2)
//   .then(data => {
//     res.send(data);
//   })
// });

module.exports = router;
