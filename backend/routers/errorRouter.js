const express = require('express');
const errorRouter = express.Router();

errorRouter.get('/', (req, res, next) => {
  var err = new Error('The requested resource does not exist');
  err.status = 404;
  next(err);
});

module.exports = errorRouter;