const express = require('express');
const router = express.Router();
const projectQueries = require('../db/queries/projects');

/* GET home page. */

// router.put('/projects', function(req, res) {

//   projectQueries.getAllProjects()
//   .then(data => {
//     res.json(data);
//   });
  
// });

router.put('/projects', function(req, res) {

  const user_id = req.body.user_id;

  projectQueries.getProjectsByUserId(user_id)
  .then(data => {
    return res.json(data);
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
