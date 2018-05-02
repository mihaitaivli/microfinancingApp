const express = require('express');
const generalCtrl = require('../../controllers/generalCtrl');
const loginRouter = express.Router();

loginRouter.post('/', (req, res, next) => {
  generalCtrl.login(req.body, (err, response) => {
    if (err) {
      err.status = 400;
      next(err);
    } else res.send(response);
  });
});

module.exports = loginRouter;