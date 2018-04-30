import React from 'react';

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
      <p>You will be redirected to</p>
      <p>the registration page</p>
    </div>
  );
}

export default IsEligible;