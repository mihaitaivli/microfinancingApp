const express = require('express');
const customersRouter = express.Router();
const customersCtrl = require('../../controllers/customersCtrl');

customersRouter.get('/', (req, res) => {
  customersCtrl.getAll((err, customers) => {
    if (err) res.status(500).send(err);
    else res.send(customers);
  });
});

module.exports = customersRouter;