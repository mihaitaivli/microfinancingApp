const Customers = require('../models/customers');
const uuid = require('uuid/v4');

module.exports = {
  getAll(cb){
    Customers.find()
      .then(customers => cb(null, customers))
      .catch(cb);
  },
  findAggregate(criteria, cb){
    let last_name = criteria.name;
    let postcode = criteria.postcode;
    let dob = criteria.dob;
    
    Customers.find({$or:[{ postcode }, { dob }, { last_name }]})
    .then(customers => cb(null, customers))
    .catch(cb);
  },
  findById(id, cb){
    Customers.findById(id)
    .then(customer => cb(null, customer))
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
      email: data.email,
      passwordHash: data.passwordHash,
      twitter: data.twitter,
      risk_category: data.risk_category
    };
    Customers.create(newCustomer)
      .then(customer => cb(null, customer))
      .catch(cb);
  },
  modify(id, data, cb){
    let modifiedData = {
      first_name : data.first_name,
      last_name: data.last_name,
      address : data.address,
      postcode : data.address,
      dob: data.dob,
      risk_category: data.risk_category
    };
    Customers.findByIdAndUpdate(id, modifiedData, {new: true})
      .then(modifiedCustomer => cb(null, modifiedCustomer))
      .catch(cb);
  }
}