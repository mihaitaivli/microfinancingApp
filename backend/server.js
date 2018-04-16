if (!process.env.NODE_ENV) process.env.NODE_ENV = 'dev';

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('nothing to see here, move along...');
});
app.get('/api', (req, res) => {
  res.send('General api handler working...')
});

module.exports = app;