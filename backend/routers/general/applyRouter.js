const express = require('express');
const applyRouter = express.Router();

applyRouter.get('/', (req, res) => {
  res.send('On the /apply endpoint');
});

module.exports = applyRouter;