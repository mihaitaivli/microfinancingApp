if (!process.env.NODE_ENV) process.env.NODE_ENV = 'dev';

const express = require('express');
const app = express();

const generalRouter = require('./routers/generalRouter');
const adminRouter = require('./routers/adminRouter');
const errorRouter = require('./routers/errorRouter');
const errorHandler = require('./lib/errorHandler');

app.get('/', (req, res) => {
  res.send('api working...');
});

// routes section
app.use('/api', generalRouter);
app.use('/api/admin', adminRouter);
app.use('*', errorRouter);

// error handling middleware
app.use(errorHandler);

module.exports = app;