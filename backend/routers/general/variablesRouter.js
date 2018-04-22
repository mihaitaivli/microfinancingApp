const express = require('express');
const varsCtrl = require('../../controllers/variablesCtrl');
const variablesRouter = express.Router();

variablesRouter.get('/', (req, res, next) => {
  varsCtrl.get((err, vars) => {
    if (err) {
      res.status = 500;
      next(err);
    } else res.send(vars);
  });
});

module.exports = variablesRouter;