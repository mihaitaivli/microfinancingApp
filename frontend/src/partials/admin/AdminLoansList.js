import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import ShortLoan from './ShortLoan';
const API = require('../../lib/apiPoints').loans;

class AdminLoansList extends Component{
  state={
    loans: []
  }
  componentDidMount(){
    fetch(API)
      .then(response => response.json())
      .then(loans => {
        this.setState({
          loans
        });
      })
  }
  render(){
    const { loans } = this.state;
    const loansList = loans.map((loan, key) => {
      return <ShortLoan loan={loan} number={key} key={key} />
    });
    return(
      <div className="container" style={{'margin-top':'1rem'}}>
        <h4>Loans situation</h4>
        <table className="table table-sm table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Status</th>
              <th scope="col">Amount</th>
              <th scope="col">Date requested</th>
            </tr>
          </thead>
          <tbody>
            {loansList}
          </tbody>
        </table>
      </div>
    );
  }
}

export default AdminLoansList;