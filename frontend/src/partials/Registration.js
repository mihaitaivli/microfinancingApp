import React, { Component } from 'react';

class Registration extends Component{
  render(){
    let amount = sessionStorage.getItem('amount');
    let duration = sessionStorage.getItem('duration');
    return(
      <div>
        amount is {amount} and duration is {duration} months
      </div>
    );
  }
}

export default Registration;