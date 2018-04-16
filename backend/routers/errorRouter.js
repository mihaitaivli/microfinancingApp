const express = require('express');
const errorRouter = express.Router();

errorRouter.get('/', (req, res, next) => {
  var err = new Error();
  err.status = 404;
  next(err);
});

module.exports = errorRouter;