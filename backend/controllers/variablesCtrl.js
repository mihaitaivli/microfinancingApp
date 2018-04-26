const Variables = require('../models/variables');

module.exports = {
  modify(data, cb){
    let vars = {
      "low_credit_score": data.low_credit_score,
      "high_credit_score": data.high_credit_score,
      "interest_rate": data.interest_rate,
      "low_loan_amount": data.low_loan_amount,
      "high_loan_amount": data.high_loan_amount,
      "loan_maximum_ceiling": data.loan_maximum_ceiling
    }
    Variables.findOneAndUpdate({}, vars, {new: true})
      .then(variables => cb(null, variables))
      .catch(cb);
  },
  get(cb){
    Variables.findOne({}, '-__v')
    .then(variables => cb(null, variables))
    .catch(cb);
  }
};