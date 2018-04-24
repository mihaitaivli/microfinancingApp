const express = require('express');
const signupRouter = express.Router();
const customersCtrl = require('../../controllers/customersCtrl');

signupRouter.post('/', (req, res, next) => {
  customersCtrl.addNewCustomer(req.body, (err, newCustomer) => {
    if (err) {
      err.status = 400;
      next(err);
    } else res.send(newCustomer);
  });
});

module.exports = signupRouter;