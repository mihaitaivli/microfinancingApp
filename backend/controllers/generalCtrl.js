const Customers = require('../models/customers');
const checkEligibility = require('../lib/checkEligibility');

module.exports = {
  apply(data, cb){
    return cb(null, checkEligibility(data.amount, data.duration));
  },
  login(body, cb){
    Customers.findOne({email:body.email})
      .then(customer => cb(null, customer))
      .catch(cb);
  }
}