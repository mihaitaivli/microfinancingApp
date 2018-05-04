import React, { Component } from 'react'; 
import { Redirect } from 'react-router-dom';
import getCreditScore from '../../lib/getCreditScore';
import responseHandler from '../../lib/responseHandler';
const API = require('../../lib/apiPoints').loans;

class LoanDetailedView extends Component {
  state={
    loan:{},
    customer:{},
    creditScore:'',
    AI_suggestions:'',
    haveData: false,
    haveCScore: false,
    haveAI_suggestions:false,
    isDecisionTaken:false
  }

  componentDidMount(){
    fetch(API + this.props.match.params.id)
      .then(response => response.json())
      .then(loan => {

        // console.log(loan)
        this.setState({
          loan,
          customer: loan.customer,
          haveData:true
        });
        getCreditScore()
          .then(response => {
            this.setState({
              creditScore: response,
              haveCScore:true
            });
            // make suggestions based on cs
            if(response.actualCreditScore <= 350){
              //reject
              this.setState({
                haveAI_suggestions:true,
                AI_suggestions:'REJECT'
              })
            } else if(response.actualCreditScore >= 550) {
              //aprove
              this.setState({
                haveAI_suggestions:true,
                AI_suggestions:'APROVE'
              })
            } else {
              // TODO get ibm sugestions
            }

          })
      })
  }

  handleClick = (e) => {

    let action = e.target.textContent;
    let userAndLoan = {
      first_name: this.state.customer.first_name,
      email: this.state.customer.email,
      amount: this.state.loan.loan_amount,
      id: this.state.loan._id
    }
    responseHandler(action, userAndLoan)
      .then(status => {
        console.log(status)
        this.setState({
          isDecisionTaken: true
        })
      });
  }

  render(){
    const { haveData, loan, customer, creditScore, haveCScore, haveAI_suggestions, AI_suggestions, isDecisionTaken } = this.state;
    if(!haveData) return (<p>Loading...</p>)
    if(isDecisionTaken) return <Redirect to='/admininterface' />
    return(
      <div className="container-fluid">
        <div className="btn-group-lg" role="group" aria-label="Basic example" style={{'margin':'1rem'}}>
          <button type="button" className="btn btn-secondary" onClick={this.handleClick}>Approve</button>
          <button type="button" className="btn btn-secondary" onClick={this.handleClick}>Reject</button>
        </div>
        <div>
          <div className="row customerData">
            <div className="col-sm-6">
              <h5>Firts name: </h5><p>{customer.first_name}</p>
              <h5>Last name: </h5><p>{customer.last_name}</p>
              <h6>Email: </h6><p>{customer.email}</p>
            </div>
            <div className="col-sm-6">
              <h5>Address - </h5><p>{customer.address}</p>
              <h5>Postcode - </h5><p>{customer.postcode}</p>
              <h5>Twitter handle - </h5><p>{customer.twitter}</p>
            </div>
          </div>
          <div className="row customerData">
            <div className="col-sm-6">
              <h5>Amount: </h5><p>{loan.loan_amount}</p>
              <h5>Duration: </h5><p>{loan.loan_term}</p>
            </div>
            <div className="col-sm-6">
              <h5>Credit score - </h5><p>{!haveCScore? 'Loading...': creditScore.actualCreditScore}</p>
              <h5>AI suggestions - </h5><p>{!haveAI_suggestions? 'Need more data': AI_suggestions}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoanDetailedView;