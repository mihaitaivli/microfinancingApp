const express = require('express');
const modifyValuesRouter = express.Router();
const variablesCtrl = require('../../controllers/variablesCtrl');

modifyValuesRouter.put('/:id', (req, res, next) => {
  variablesCtrl.modify(req.params.id, req.body, (err, variables) => {
    if (err) {
      err.status = 500;
      next(err);
    } else res.send(variables);
  });
})

module.exports = modifyValuesRouter;