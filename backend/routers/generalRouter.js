const express = require('express');
const generalRouter = express.Router();

const applyRouter = require('./general/applyRouter');
const signupRouter = require('./general/signupRouter');
const signinRouter = require('./general/signinRouter');
const rejectRouter = require('./general/rejectRouter');
const contactRouter = require('./general/contactRouter');

generalRouter.use('/apply', applyRouter);
generalRouter.use('/signup', signupRouter);
generalRouter.use('/signin', signinRouter);
generalRouter.use('/reject', rejectRouter);
generalRouter.use('/contact', contactRouter);

module.exports = generalRouter;