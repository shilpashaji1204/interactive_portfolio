const express = require('express');
const router = express.Router();
const messageQueries = require('../db/queries/messages');

/* GET users listing. */
router.get('/', function(req, res, next) {
  messageQueries.getMessageById(2)
  .then(data => {
    res.send(data);
  })
});

module.exports = router;