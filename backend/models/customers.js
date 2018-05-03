const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CustomerSchema = new Schema({
  customerID : {
    type: String,
    required: true
  },
  first_name : {
    type: String,
    required: true
  },
  middle_names : {
    type: String
  },
  last_name : {
    type: String,
    required: true
  },
  address : {
    type: String,
    required: true
  },
  postcode : {
    type: String,
    required: true
  },
  dob : {
    type: String,
    required: true
  },
  risk_category : {
    type: String,
    default: "medium"
  },
  email: {
    type: String,
    required: true
  },
  passwordHash: {
    type: String,
    required: true
  },
  twitter: {
    type: String,
    default: "none"
  },
  group: {
    type: String,
    default: 'regular_user'
  },
  loans: [{ type: Schema.Types.ObjectId, ref: "loans" }]
});

module.exports = mongoose.model('customers', CustomerSchema);