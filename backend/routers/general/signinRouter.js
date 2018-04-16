const express = require('express');
const signinRouter = express.Router();

signinRouter.get('/', (req, res) => {
  res.send('On the /signin endpoint');
});

module.exports = signinRouter;