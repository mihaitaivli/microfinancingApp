import React, { Component } from 'react';
import NoPermission from './NoPermission';

class AdminInterface extends Component{

  state={
    hidden: true,
    isAuthenticated: false
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

  render(){
    const { hidden, isAuthenticated } = this.state;
    return(
      <div className="container">
        <div hidden={isAuthenticated}>
          <NoPermission />
        </div>
        <div hidden={hidden}>
          Admin interface
        </div>
      </div>
    );
  }
}

export default AdminInterface;