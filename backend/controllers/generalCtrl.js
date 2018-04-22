const checkEligibility = require('../lib/checkEligibility');

module.exports = {
  apply(data, cb){
    return cb(null, checkEligibility(data.amount, data.duration));
  }
}