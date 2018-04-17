const app = require('./server');
const PORT = require('./config').PORT[process.env.NODE_ENV];
const DB = require('./config').DB[process.env.NODE_ENV] || process.env.DB;

// db-related section
const mongoose = require('mongoose');
mongoose.Promise = Promise;
mongoose.connect(DB)
  .then(() => console.log('successfully connected to', DB))
  .catch(err => console.log('connection failed', err));

  // server-related section
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});