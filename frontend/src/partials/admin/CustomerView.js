import React, { Component } from 'react';
import NoPermission from './NoPermission';
import CustomerData from './CustomerData';
import autenticationHandler from '../../lib/autenticationHandler';
const API = require('../../lib/apiPoints').customers;

class CustomerView extends Component {
  state={
    isAuthenticated: false,
    isCustomerLoading: true,
    data: ''
  }

  componentDidMount(){
    let status = autenticationHandler.check();
    if(status === true) this.setState({isAuthenticated: true});
    let ID = autenticationHandler.getUser();
    fetch(API + ID)
      .then(response => response.json())
      .then(customer => {
        this.setState({
          isCustomerLoading: false,
          data: customer
        })
        console.log(customer);
      });
  }

  render(){
    const { isAuthenticated, isCustomerLoading, data } = this.state;
    if(!isAuthenticated) return <NoPermission />;
    return(
      <div className="container">
        {isCustomerLoading ? 'Loading...' : <CustomerData data={data} />}
      </div>
    );
  }
}

export default CustomerView;