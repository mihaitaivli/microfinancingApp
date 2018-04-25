const express = require('express');
const signinRouter = express.Router();
const generalCtrl = require('../../controllers/generalCtrl');

signinRouter.post('/', (req, res, next) => {
  generalCtrl.signin(req.body, (err, status) => {
    if (err) {
      err.status = 500;
      next(err);
    } else res.send(status);
  });
});

module.exports = signinRouter;