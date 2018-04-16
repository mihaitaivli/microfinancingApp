if (!process.env.NODE_ENV) process.env.NODE_ENV = 'dev';

const express = require('express');
const app = express();
const generalRouter = require('./routers/generalRouter');

app.get('/', (req, res) => {
  res.send('api working...');
});

app.use('/api', generalRouter);

module.exports = app;