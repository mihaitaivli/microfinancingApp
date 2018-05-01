import React from 'react';
import { Link } from 'react-router-dom';

const IsEligible = (props) => {
  return(
    <div>
      {props.isEligible !== '' ? (props.isEligible ? <Success />: <Failure />) : ''}
    </div>
  );
}

const Failure = () => {
  return(
    <div className="failure">
      <p>Unfortunately, you do not qualify</p>
      <p>Try lowering the amount or the duration</p>
    </div>
  );
}

const Success = () => {
  return(
    <div className="success">
      <p>Congratulations!</p>
      <p>You are one step closer!</p>
      <p>Just fill out some details...</p>
      <Link to='/registration' className="btn btn-success">Proceed</Link>
    </div>
  );
}

export default IsEligible;