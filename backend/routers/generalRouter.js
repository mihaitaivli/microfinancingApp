const express = require('express');
const generalRouter = express.Router();

const applyRouter = require('./general/applyRouter');
const signupRouter = require('./general/signupRouter');
const signinRouter = require('./general/signinRouter');
const variablesRouter = require('./general/variablesRouter');

generalRouter.use('/apply', applyRouter);
generalRouter.use('/signup', signupRouter);
generalRouter.use('/signin', signinRouter);
generalRouter.use('/variables', variablesRouter);

module.exports = generalRouter;