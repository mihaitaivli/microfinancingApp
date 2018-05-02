import React, { Component } from 'react';
import NoPermission from './NoPermission';
import autenticationHandler from '../../lib/autenticationHandler';
const API = require('../../lib/apiPoints').customers;

class CustomerView extends Component {
  state={
    isAuthenticated: false,
    isLoading: true,
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
          isLoading: false,
          data: customer
        })
        console.log(customer);
      });
  }

  render(){
    const { isAuthenticated, isLoading, data } = this.state;
    if(!isAuthenticated) return <NoPermission />;
    return(
      <div className="container">
        <p>{isLoading ? 'Loading...' : data.first_name}</p>
      </div>
    );
  }
}

export default CustomerView;