const express = require('express');
const adminRouter = express.Router();

const customersRouter = require('./admin/customersRouter');
const modifyValuesRouter = require('./admin/modifyValuesRouter');
const loansRouter = require('./admin/loansRouter');

adminRouter.use('/customers', customersRouter);
adminRouter.use('/modifyValues', modifyValuesRouter);
adminRouter.use('/loans', loansRouter);

module.exports = adminRouter;