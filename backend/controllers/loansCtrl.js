const Loans = require('../models/loans');

module.exports = {
  getAll(cb){
    Loans.find()
      .then(loans => cb(null, loans))
      .catch(cb);
  },
  getById(id, cb){
    Loans.findById(id)
      .then(loans => cb(null, loans))
      .catch(cb);
  },
}