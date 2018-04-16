const express = require('express');
const adminRouter = express.Router();

const customersRouter = require('./admin/customersRouter');
const modifyValuesRouter = require('./admin/modifyValuesRouter');

adminRouter.use('/customers', customersRouter);
adminRouter.use('/modifyValues', modifyValuesRouter);

module.exports = adminRouter;