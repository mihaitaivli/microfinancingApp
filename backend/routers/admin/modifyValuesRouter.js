const express = require('express');
const modifyValuesRouter = express.Router();
const variablesCtrl = require('../../controllers/variablesCtrl');

modifyValuesRouter.put('/', (req, res, next) => {
  variablesCtrl.modify((err, variables) => {
    if (err) {
      err.status = 500;
      next(err);
    } else res.send(variables);
  });
})

module.exports = modifyValuesRouter;