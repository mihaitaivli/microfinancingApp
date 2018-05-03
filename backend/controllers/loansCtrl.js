const Loans = require('../models/loans');
const Customers = require('../models/customers');
const mongoose = require('mongoose');

module.exports = {
  getAll(cb){
    Loans.find()
      .then(loans => cb(null, loans))
      .catch(cb);
  },
  getAllFromList(list, cb){
    let listOfId = list.map(record => {
      return mongoose.Types.ObjectId(record);
    });
    Loans.find({"_id": { $in: listOfId}})
    .then(loans => cb(null, loans))
    .catch(cb);
  },
  getById(id, cb){
    Loans.findById(id)
      .populate('customer')
      .then(loan => cb(null, loan))
      .catch(cb);
  },
  updateStatus(id, newStatus, cb){
    Loans.findOneAndUpdate(id, {status:newStatus}, {new: true})
      .then(loan => cb(null, loan))
      .catch(cb)
  },
  add(data, cb){
    const details = {
      "customer": data.customer,
      "loan_amount": data.loan_amount,
      "loan_term": data.loan_term,
      "payment_date": data.payment_date
    };
    Loans.create(details)
      .then(loan => Customers.findByIdAndUpdate(data.customer, {$push: {"loans": loan._id}}, {new: true}))
      .then(updatedCustomer => cb(null, updatedCustomer))
      .catch(cb);
  }
}