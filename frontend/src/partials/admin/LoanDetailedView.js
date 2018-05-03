import React, { Component } from 'react';
const API = require('../../lib/apiPoints').loans;

class LoanDetailedView extends Component {
  state={
    loan:{},
    haveData: false
  }

  componentDidMount(){
    fetch(API + this.props.match.params.id)
      .then(response => response.json())
      .then(loan => {
        console.log(loan)
        this.setState({
          loan,
          haveData:true
        })
      })
  }

  handleClick = (e) => {
    console.log(e.target.textContent);
  }

  render(){
    const { haveData, loan } = this.state;
    if(!haveData) return (<p>Loading...</p>)
    return(
      <div className="container">
        <div class="btn-group-lg" role="group" aria-label="Basic example">
          <button type="button" class="btn btn-secondary" onClick={this.handleClick}>Approve</button>
          <button type="button" class="btn btn-secondary" onClick={this.handleClick}>Reject</button>
        </div>
        <p>{loan.loan_amount}</p>
      </div>
    );
  }
}

export default LoanDetailedView;