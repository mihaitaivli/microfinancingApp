import React, { Component } from 'react';
import NoPermission from './NoPermission';

class AdminInterface extends Component{

  state={
    hidden: true,
    isAuthenticated: false,
    isCustomersHidden: true,
    isLoansHidden: true,
    isCustomersActive: false,
    isLoansActive: false
  }

  componentDidMount(){
    const isAdmin = sessionStorage.getItem('group');
    if(isAdmin) {
      this.setState({
        hidden: false,
        isAuthenticated: true
      })
    }
  }

  handleCustomers = (e) => {
    this.setState({
      isCustomersActive: true,
      isCustomersHidden:false,
      isLoansActive: false,
      isLoansHidden: true
    })
  }

  handleLoans = (e) => {
    this.setState({
      isCustomersActive: false,
      isCustomersHidden:true,
      isLoansActive: true,
      isLoansHidden: false
    })
  }

  render(){
    const { hidden, isAuthenticated, isCustomersActive, isLoansActive, isCustomersHidden, isLoansHidden } = this.state;
    return(
      <div className="container admininterface">
        <div hidden={isAuthenticated}>
          <NoPermission />
        </div>
        <div hidden={hidden}>
          <div class="btn-group-lg" role="group" aria-label="Basic example">
            <button type="button" active={isCustomersActive} class="btn btn-secondary" onClick={this.handleCustomers}>Customers</button>
            <button type="button" active={isLoansActive} class="btn btn-secondary" onClick={this.handleLoans}>Loans</button>
          </div>
          <div hidden={isCustomersHidden}>Customers</div>
          <div hidden={isLoansHidden}>Loans</div>
        </div>
      </div>
    );
  }
}

export default AdminInterface;