if (!process.env.NODE_ENV) process.env.NODE_ENV = 'dev';
const DB = require('../config').DB[process.env.NODE_ENV] || process.env.DB;
const Customers = require('../models/customers');
const Loans = require('../models/loans');
const Variables = require('../models/variables');

const mongoose = require('mongoose');

const savedData = {};

saveCustomer = () => {
  const customer = new Customers({
    first_name : "Mihaita",
    last_name: "Ivli",
    address : "123 Long Road, Wolverhampton",
    postcode : "WV109SN",
    dob: "17.09.1977",
    risk_category: "low"
  });
  return customer.save();
}

seedData = () => {
  mongoose.connect(DB);
  mongoose.connection.dropDatabase();
  return saveCustomer()
    .then(user => {
      savedData.user = user;
      console.log(savedData);
      mongoose.connection.close();
      return savedData;
    });
}

seedData();