import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import AuthFailure from './AuthFailure';
const autenticationHandler = require('../../lib/autenticationHandler');
const API = require('../../lib/apiPoints');

class Login extends Component {

  state={
    email: '',
    password: '',
    hidden: true,
    isSuccess: false
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  login = (e) => {
    e.preventDefault();
    const DETAILS = {email: this.state.email, password: this.state.password}
    fetch(API.login, {
      body: JSON.stringify(DETAILS),
      headers:{
        'content-type': 'application/json'
      },
      method: 'POST'
    }).then(data => data.json())
      .then(response => {
        if(response.error){
          this.setState({
            hidden: false
          })
        } else {
          autenticationHandler.setStatus(response);
          this.setState({
            email: '',
            password: '',
            hidden: true,
            isSuccess: true
          });
        }
      });
  }

  render(){
    if(this.state.isSuccess) return <Redirect to='/admininterface' />
    return(
      <div className="container">
        <div hidden={this.state.hidden}>
          <AuthFailure />
        </div>
        <h4>Admin login</h4>
        <form>
          <div className="form-group">
            <label for="email">Email</label>
            <input type="email" className="form-control" id="email" name="email" placeholder="Your email" value={this.state.email} onChange={this.handleChange}/>
          </div>
          <div className="form-group">
            <label for="password">Password</label>
            <input type="password" className="form-control" id="password" name="password" placeholder="password" value={this.state.password} onChange={this.handleChange} />
          </div>
          <button className="btn btn-primary" onClick={this.login}>Login</button>
        </form>
      </div>
    );
  }
}

export default Login;