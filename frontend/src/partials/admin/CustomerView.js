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
    data: '',
    loans:''
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
        // populate loans
        fetch(API.loans + 'list', {
          body: JSON.stringify({list: customer.loans}),
          headers:{
            'content-type': 'application/json'
          },
          method: 'POST'
        }).then(response => response.json())
          .then(loans => {
            this.setState({
              isLoansLoading: false,
              loans
            })
          })

      });
  }

  render(){
    const { isAuthenticated, isCustomerLoading, isLoansLoading, data, loans } = this.state;
    if(!isAuthenticated) return <NoPermission />;
    return(
      <div>
        <div>
          {isCustomerLoading ? 'Loading...' : <CustomerData data={data} />}
        </div>
        <div>
          {isLoansLoading ? 'Loading...' : <LoansList loans={loans} />}
        </div>
      </div>
    );
  }
}

export default CustomerView;