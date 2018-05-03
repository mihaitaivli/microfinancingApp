import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class ShortLoan extends Component{
  
  state={
    redirect:false
  }

  handleClick = (e) => {
    this.setState({
      redirect:true
    })
  }

  render(){
    const { _id, status, loan_amount, starting_date } = this.props.loan;
    const {redirect} = this.state;
    if (redirect) {
      let destination = '/loandetailedview/' + _id;
      return <Redirect to={destination}/>
    }
    return(
      <tr onClick={this.handleClick}>
        <th scope="row">{this.props.number + 1}</th>
        <td>{status}</td>
        <td>{loan_amount}</td>
        <td>{starting_date}</td>
      </tr>
    );
  }
}

export default ShortLoan;