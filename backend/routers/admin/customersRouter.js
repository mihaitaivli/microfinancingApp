const express = require('express');
const customersRouter = express.Router();

customersRouter.get('/', (req, res) => {
  res.send('On the admin/customers endpoint');
})

module.exports = customersRouter;