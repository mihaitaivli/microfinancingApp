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

  render(){
    const { haveData, loan } = this.state;
    if(!haveData) return (<p>Loading...</p>)
    return(
      <div>
        <p>{loan.loan_amount}</p>
      </div>
    );
  }
}

export default LoanDetailedView;