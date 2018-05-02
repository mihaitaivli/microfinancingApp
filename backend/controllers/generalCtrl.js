const Customers = require('../models/customers');
const checkEligibility = require('../lib/checkEligibility');
const checkPassword = require('../lib/checkPassword');

module.exports = {
  apply(data, cb){
    return cb(null, checkEligibility(data.amount, data.duration));
  },
  login(body, cb){
    Customers.findOne({email:body.email})
      .then(customer => {
        
        let error = {
          "error": {
            "status": 400,
            "message": "Invalid email or password"
          }
        }
        // check the password
        let response = checkPassword(body.password, customer.passwordHash) ? customer : error;
        
        cb(null, response)
      }).catch(cb);
  }
}