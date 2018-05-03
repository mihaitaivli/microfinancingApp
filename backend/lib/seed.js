if (!process.env.NODE_ENV) process.env.NODE_ENV = 'dev';
const DB = require('../config').DB[process.env.NODE_ENV] || process.env.DB;
const uuid = require('uuid/v4');
const Customers = require('../models/customers');
const Loans = require('../models/loans');
const Variables = require('../models/variables');

const mongoose = require('mongoose');

const savedData = {};

saveCustomer = () => {
  const admin = new Customers({
    customerID : uuid(),
    first_name : "Admin",
    last_name: "Admin",
    address : "123 Long Road, Manchester",
    postcode : "M123AB",
    dob: "17.09.1977",
    risk_category: "low",
    email : "admin@admin.com",
    passwordHash : "8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918",
    twitter : "@admin",
    group: "admin"
  });
  const customer = new Customers({
    customerID : uuid(),
    first_name : "Mihaita",
    last_name: "Ivli",
    address : "123 Long Road, Wolverhampton",
    postcode : "WV109SN",
    dob: "17.09.1977",
    risk_category: "low",
    email : "mihaita@test.com",
    passwordHash : "test",
    twitter : "@mihaitaivli"
  });
  admin.save();
  return customer.save();
}

saveLoans = (user) => {
  const loan = new Loans({
    customer : user._id,
    loan_amount : 1500,
    loan_term : 10,
    payment_date : 15
  });
  user.loans.push(loan._id);
  return loan.save();
}

saveVariables = () => {
  const variables = new Variables({});
  return variables.save();
}

const seedData = () => {
  mongoose.connect(DB);
  mongoose.connection.dropDatabase();
  return saveCustomer()
    .then(user => {
      savedData.user = user;
      return saveLoans(user)
    })
    .then(loans => {
      savedData.loans = loans;
      return saveVariables();
    })
    .then(variables => {
      savedData.variables = variables;
      mongoose.connection.close();
      return savedData;
    });
}

seedData();
module.exports = {seedData, savedData};