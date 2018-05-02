import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
const API = require('../lib/apiPoints');

class AddLoan extends Component{
  state={
    customer: sessionStorage.getItem('customer'),
    loan_amount: sessionStorage.getItem('amount'),
    loan_term: sessionStorage.getItem('duration'),
    payment_date: 15,
    pathname: null
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { customer, loan_amount, loan_term, payment_date } = this.state;
    const LOAN = { customer, loan_amount, loan_term, payment_date};
    fetch(API.add_loan, {
      body: JSON.stringify(LOAN),
      headers:{
        'content-type': 'application/json'
      },
      method: 'POST'
    }).then(response => response.json())
      .then(updatedCustomer => {
        this.setState({
          pathname: '/loanschedule'
        });
      })
  }

  render(){
    let { loan_amount, loan_term, payment_date, pathname, user } = this.state;
    if (pathname) return <Redirect to={{
              pathname: pathname,
              state: { loan_amount, loan_term, payment_date }
              }} />
    return(
      <div className="container">
        <h3>Loan details</h3>
        <form className="form">
          <div className="form-group">
            <label for="loan_amount">Amount</label>
            <input type="text" required className="form-control" id="loan_amount" name="loan_amount" value={loan_amount} onChange={this.handleChange}/>
          </div>
          <div className="form-group">
            <label for="loan_term">Duration</label>
            <input type="text" required className="form-control" id="loan_term" name="loan_term" value={loan_term} onChange={this.handleChange}/>
          </div>
          <div className="form-group">
            <label for="payment_date">Payment date</label>
            <input type="number" min="1" max="31" step="1" value={payment_date} required className="form-control" id="payment_date" name="payment_date" onChange={this.handleChange}/>
          </div>
          <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default AddLoan;