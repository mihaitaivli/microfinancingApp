const Customers = require('../models/customers');
const uuid = require('uuid/v4');

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
  },
  addNewCustomer(data, cb){
    let newCustomer = {
      customerID : uuid(),
      first_name : data.first_name,
      last_name: data.last_name,
      address : data.address,
      postcode : data.address,
      dob: data.dob,
      risk_category: data.risk_category
    };
    Customers.create(newCustomer)
      .then(customer => cb(null, customer))
      .catch(cb);
  }
}