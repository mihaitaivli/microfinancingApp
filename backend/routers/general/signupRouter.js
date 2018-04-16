const express = require('express');
const signupRouter = express.Router();

signupRouter.get('/', (req, res) => {
  res.send('On the /signup endpoint');
});

module.exports = signupRouter;