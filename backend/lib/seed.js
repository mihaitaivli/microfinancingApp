if (!process.env.NODE_ENV) process.env.NODE_ENV = 'dev';
const DB = require('../config').DB[process.env.NODE_ENV] || process.env.DB;
const uuid = require('uuid/v4');
const Customers = require('../models/customers');
const Loans = require('../models/loans');
const Variables = require('../models/variables');

const mongoose = require('mongoose');

const savedData = {};

saveCustomer = () => {
  const customer = new Customers({
    customerID : uuid(),
    first_name : "Mihaita",
    last_name: "Ivli",
    address : "123 Long Road, Wolverhampton",
    postcode : "WV109SN",
    dob: "17.09.1977",
    risk_category: "low"
  });
  return customer.save();
}

saveVariables = () => {
  const variables = new Variables({});
  return variables.save();
}

seedData = () => {
  mongoose.connect(DB);
  mongoose.connection.dropDatabase();
  return saveCustomer()
    .then(user => {
      savedData.user = user;
      return saveVariables()
    })
    .then(variables => {
      savedData.variables = variables;
      mongoose.connection.close();
      console.log(savedData);
      return savedData;
    })
}

seedData();