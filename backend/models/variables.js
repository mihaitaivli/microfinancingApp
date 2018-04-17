const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VariableSchema = new Schema({
  low_credit_score : {
    type: Number,
    required: true,
    default: 300
  },
  high_credit_score : {
    type: Number,
    required: true,
    default: 600
  },
  interest_rate : {
    type: Number,
    required: true,
    default: 0.1
  },
  low_loan_amount : {
    type: Number,
    required: true,
    default: 500
  },
  high_loan_amount : {
    type: Number,
    required: true,
    default: 2500
  },
  loan_maximum_ceiling : {
    type: Number,
    required: true,
    default: 5000
  }
});

module.exports = mongoose.model('variables', VariableSchema);