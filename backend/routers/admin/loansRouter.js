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

loansRouter.get('/:id', (req, res, next) => {
  loansCtrl.getById(req.params.id, (err, loans) => {
    if (err) {
      err.status = 500;
      next(err);
    } else res.send(loans);
  })
});

loansRouter.post('/', (req, res, next) => {
  loansCtrl.add(req.body, (err, UpdatedCustomerWithLoan) => {
    if (err) {
      err.status = 500;
      next(err);
    } else res.send(UpdatedCustomerWithLoan);
  })
});

module.exports = loansRouter;