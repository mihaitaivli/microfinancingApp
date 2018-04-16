const express = require('express');
const contactRouter = express.Router();

contactRouter.get('/', (req, res) => {
  res.send('On the /contact endpoint');
});

module.exports = contactRouter;