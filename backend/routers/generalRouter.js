const express = require('express');
const generalRouter = express.Router();

const applyRouter = require('./general/applyRouter');
const signupRouter = require('./general/signupRouter');
const variablesRouter = require('./general/variablesRouter');

generalRouter.use('/apply', applyRouter);
generalRouter.use('/signup', signupRouter);
generalRouter.use('/variables', variablesRouter);

module.exports = generalRouter;