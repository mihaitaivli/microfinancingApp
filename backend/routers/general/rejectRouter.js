const express = require('express');
const rejectRouter = express.Router();

rejectRouter.get('/', (req, res) => {
  res.send('On the /reject endpoint');
});

module.exports = rejectRouter;