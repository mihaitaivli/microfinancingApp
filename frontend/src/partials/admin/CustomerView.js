import React, { Component } from 'react';
import NoPermission from './NoPermission';
import CustomerData from './CustomerData';
import LoansList from './LoansList';
import autenticationHandler from '../../lib/autenticationHandler';
const API = require('../../lib/apiPoints');

class CustomerView extends Component {
  state={
    isAuthenticated: false,
    isCustomerLoading: true,
    isLoansLoading: true,
    data: ''
  }

  componentDidMount(){
    let status = autenticationHandler.check();
    if(status === true) this.setState({isAuthenticated: true});
    let ID = autenticationHandler.getUser();
    fetch(API.customers + ID)
      .then(response => response.json())
      .then(customer => {
        this.setState({
          isCustomerLoading: false,
          isLoansLoading:false,
          data: customer
        })
        // TODO populate the loans
        console.log(customer);
      });
  }

  render(){
    const { isAuthenticated, isCustomerLoading, isLoansLoading, data } = this.state;
    if(!isAuthenticated) return <NoPermission />;
    return(
      <div>
        <div>
          {isCustomerLoading ? 'Loading...' : <CustomerData data={data} />}
        </div>
        <div>
          {isLoansLoading ? 'Loading...' : <LoansList list={data.loans} />}
        </div>
      </div>
    );
  }
}

export default CustomerView;