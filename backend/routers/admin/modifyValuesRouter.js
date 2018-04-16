const express = require('express');
const modifyValuesRouter = express.Router();

modifyValuesRouter.get('/', (req, res) => {
  res.send('On the admin/modify endpoint');
})

module.exports = modifyValuesRouter;