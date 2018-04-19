const Customers = require('../models/customers');

module.exports = {
  getAll(cb){
    Customers.find()
      .then(customers => cb(null, customers))
      .catch(cb);
  },
  findByName(name, cb){ // TODO - find by aggregating name and postcode
    Customers.findOne({"last_name": name})
    .then(customers => cb(null, customers))
    .catch(cb);
  }
}