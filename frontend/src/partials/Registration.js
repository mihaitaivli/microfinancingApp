import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import encrypt from '../lib/passwordHash';
const API_POINTS = require('../lib/apiPoints');

class Registration extends Component{

  state={
    "first_name":'',
    "middle_names": '',
    "last_name": '',
    "address":'',
    "postcode":'',
    "dob":'',
    "email":'',
    "password":'',
    "twitter":'',
    "checked": false,
    "referrer": null
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleCheck = (e) => {
    this.setState({
      checked : !this.state.checked
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let { first_name, middle_names, last_name, address, postcode, email, dob, password, twitter } = this.state;
    let passwordHash = encrypt(password);
    const CUSTOMER = {
      first_name, middle_names, last_name, address, postcode, email, dob, passwordHash, twitter
    }
    fetch(API_POINTS.registration, {
      body: JSON.stringify(CUSTOMER),
      headers:{
        'content-type': 'application/json'
      },
      method: 'POST'
    }).then(newCustomer => newCustomer.json())
      .then(addedCustomer => {
        // store in session the id of the customer
        sessionStorage.setItem("customer", addedCustomer._id);

        this.setState({
          "first_name":'',
          "middle_names": '',
          "last_name": '',
          "address":'',
          "postcode":'',
          "dob":'',
          "email":'',
          "password":'',
          "twitter":'',
          "checked": false,
          "referrer": '/addLoan'
        });

      })
  }

  render(){
    let amount = sessionStorage.getItem('amount');
    let duration = sessionStorage.getItem('duration');
    let { first_name, middle_names, last_name, address, postcode, dob, email, password, twitter, checked, referrer } = this.state;
    if (referrer) return <Redirect to={referrer} />
    return(
      <div className="container">
        <h3>Personal details</h3>
        {/* <div>amount is {amount} and duration is {duration} months</div> */}
        <form className="form">
          <div className="form-group">
            <label for="first_name">First name</label>
            <input type="text" required className="form-control" id="first_name" name="first_name" placeholder="First name" value={first_name} onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <label for="middle_names">Middle names</label>
            <input type="text" className="form-control" id="middle_names" name="middle_names" placeholder="Middle names" value={middle_names} onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <label for="last_name">Last name</label>
            <input type="text" required className="form-control" id="last_name" name="last_name" placeholder="Last name" value={last_name} onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <label for="address">Address</label>
            <input type="text" required className="form-control" id="address" name="address" placeholder="Full address" value={address} onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <label for="postcode">Postcode</label>
            <input type="text" required className="form-control" id="postcode" name="postcode" placeholder="Postcode" value={postcode} onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <label for="dob">Date of birth</label>
            <input type="date" required className="form-control" id="dob" name="dob" value={dob} onChange={this.handleChange} />
          </div>
          <hr className="my-4"/>
          <h3>Login details</h3>
          <div className="form-group">
            <label for="email">Email</label>
            <input type="email" required className="form-control" id="email" name="email" placeholder="email" value={email} onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <label for="password">Password</label>
            <input type="password" required className="form-control" name="password" id="password" placeholder="Password" value={password} onChange={this.handleChange}  />
          </div>
          <div className="form-group">
            <label for="twitter">Twitter handle</label>
            <input type="text" className="form-control" id="twitter" name="twitter" placeholder="twitter handle" value={twitter} onChange={this.handleChange}  />
          </div>
          <div className="form-group form-check">
            <input type="checkbox" className="form-check-input" id="acceptCheck" onClick={this.handleCheck} />
            <label className="form-check-label" for="acceptCheck" >I accept the terms and conditions</label>
          </div>
          <button type="submit" disabled={!checked} className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default Registration;