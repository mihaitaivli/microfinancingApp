const express = require('express');
const adminRouter = express.Router();

const customersRouter = require('./admin/customersRouter');

adminRouter.use('/customers', customersRouter);

module.exports = adminRouter;