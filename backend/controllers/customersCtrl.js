const Customers = require('../models/customers');

module.exports = {
  getAll(cb){
    Customers.find()
      .then(customers => cb(null, customers))
      .catch(cb);
  }
}