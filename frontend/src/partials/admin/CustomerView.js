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
          data: customer
        })
        // TODO populate the loans
        // console.log(customer);
        fetch(API.loans + 'list', {
          body: JSON.stringify({list: customer.loans}),
          headers:{
            'content-type': 'application/json'
          },
          method: 'POST'
        }).then(response => response.json())
          .then(loans => {
            console.log(loans);
          })

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