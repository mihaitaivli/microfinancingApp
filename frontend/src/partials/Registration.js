import React, { Component } from 'react';

// {
//   "first_name" : "Alexandra",
//   "last_name" : "Ivli",
//   "address" : "The same",
//   "postcode" : "m12399sn",
//   "dob" : "underage",
//   "risk_category" : "medium" - to do later
// ----------------------------
// "email"
// "password"
// "twitter" - not required
// ->returns a customer id
//   }

class Registration extends Component{

  state={
    "first_name":'',
    "middle_names": '',
    "last_name": '',
    "address":'',
    "postcode":'',
    "email":'',
    "password":'',
    "twitter":'',
    "checked": false
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
    console.log(this.state);
  }

  render(){
    let amount = sessionStorage.getItem('amount');
    let duration = sessionStorage.getItem('duration');
    let { first_name, middle_names, last_name, address, postcode, email, password, twitter, checked } = this.state;
    return(
      <div className="container">
        <h3>Personal details</h3>
        {/* <div>amount is {amount} and duration is {duration} months</div> */}
        <form className="form">
          <div className="form-group">
            <label for="first_name">First name</label>
            <input type="text" required class="form-control" id="first_name" name="first_name" placeholder="First name" value={first_name} onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <label for="middle_names">Middle names</label>
            <input type="text" class="form-control" id="middle_names" name="middle_names" placeholder="Middle names" value={middle_names} onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <label for="last_name">Last name</label>
            <input type="text" required class="form-control" id="last_name" name="last_name" placeholder="Last name" value={last_name} onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <label for="address">Address</label>
            <input type="text" required class="form-control" id="address" name="address" placeholder="Full address" value={address} onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <label for="postcode">Postcode</label>
            <input type="text" required class="form-control" id="postcode" name="postcode" placeholder="Postcode" value={postcode} onChange={this.handleChange} />
          </div>
          <hr className="my-4"/>
          <h3>Login details</h3>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" required class="form-control" id="email" name="email" placeholder="email" value={email} onChange={this.handleChange} />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" required class="form-control" name="password" id="password" placeholder="Password" value={password} onChange={this.handleChange}  />
          </div>
          <div class="form-group">
            <label for="twitter">Twitter handle</label>
            <input type="text" class="form-control" id="twitter" name="twitter" placeholder="twitter handle" value={twitter} onChange={this.handleChange}  />
          </div>
          <div class="form-group form-check">
            <input type="checkbox" class="form-check-input" id="acceptCheck" onClick={this.handleCheck} />
            <label class="form-check-label" for="acceptCheck" >I accept the terms and conditions</label>
          </div>
          <button type="submit" disabled={!checked} class="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default Registration;