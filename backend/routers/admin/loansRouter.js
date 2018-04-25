const express = require('express');
const loansRouter = express.Router();
const loansCtrl = require('../../controllers/loansCtrl');

loansRouter.get('/', (req, res, next) => {
  loansCtrl.getAll((err, loans) => {
    if (err) {
      err.status = 500;
      next(err);
    } else res.send(loans);
  })
});

module.exports = loansRouter;