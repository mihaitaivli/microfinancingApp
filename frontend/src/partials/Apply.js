import React, { Component } from 'react';
import Filler from './Filler';
import IsEligible from './IsEligible';

class Apply extends Component{
  state={
    amount:'',
    duration:'',
    isEligible:''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  getEstimate = (e) => {
    e.preventDefault();
    const amount = this.state.amount;
    const duration = this.state.duration;
    fetch('http://localhost:3001/api/apply', {
      body: JSON.stringify({amount, duration}),
      headers:{
        'content-type': 'application/json'
      },
      method: 'POST'
    })
    .then(response => response.json())
    .then(admitted => {
      sessionStorage.setItem('amount', amount);
      sessionStorage.setItem('duration', duration);
      this.setState({
        amount: '',
        duration: '',
        isEligible: admitted.isEligible
      });
    })
  }

  render(){
    return(
      <div>
        <Filler />
        <div className="container">
          <IsEligible isEligible={this.state.isEligible} />
          <form>
            <div className="form-group">
              <label for="amount">How much you need</label>
              <input type="text" className="form-control" id="amount" name="amount" placeholder="Enter amount" value={this.state.amount} onChange={this.handleChange}/>
            </div>
            <div className="form-group">
              <label for="duration">How long</label>
              <input type="number" className="form-control" id="duration" name="duration" placeholder="How many months" value={this.state.duration} onChange={this.handleChange} />
            </div>
            <button className="btn call-to-action" onClick={this.getEstimate}>Apply</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Apply;