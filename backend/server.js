if (!process.env.NODE_ENV) process.env.NODE_ENV = 'dev';

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Listening...');
});

module.exports = app;