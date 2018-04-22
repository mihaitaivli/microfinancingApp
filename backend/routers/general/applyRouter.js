const express = require('express');
const applyRouter = express.Router();
const applyCtrl = require('../../controllers/generalCtrl').apply;

applyRouter.post('/', (req, res, next) => {
  applyCtrl(req.body, (err, outcome) => {
    if (err) {
      res.status = 500;
      next(err);
    } else res.send(outcome);
  });
});

module.exports = applyRouter;