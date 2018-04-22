const express = require('express');
const customersRouter = express.Router();
const customersCtrl = require('../../controllers/customersCtrl');

customersRouter.get('/', (req, res, next) => {
  customersCtrl.getAll((err, customers) => {
    if (err) {
      err.status = 500;
      next(err);
    }
    else res.send(customers);
  });
});

customersRouter.get('/:name', (req, res, next) => {
  customersCtrl.findByName(req.params.name, (err, customers) => {
    if (err) {
      err.status = 500;
      next(err);
    }
    else res.send(customers);
  });
});

customersRouter.post('/', (req, res, next) => {
  customersCtrl.addNewCustomer(req.body, (err, newCustomer) => {
    if (err) {
      err.status = 401; // TODO - handle the error properly
      next(err);
    }
    else res.send(newCustomer);
  });
});

module.exports = customersRouter;