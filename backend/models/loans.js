const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LoanSchema = new Schema({
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  starting_date: {
    type: Number,
    default: new Date().getTime()
  },
  loan_amount : {
    type: Number,
    required: true
  },
  loan_amount_paid : {
    type: Number,
    required: true
  },
  loan_term : {
    type: Number,
    required: true
  },
  due_date : {
    type: Number,
    required: true
  },
});

module.exports = mongoose.model('loans', LoanSchema);