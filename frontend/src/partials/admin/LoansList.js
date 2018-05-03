import React from 'react';

const LoansList = (props) => {
  return(
    <div className="container">
      <h4>Your current loans</h4>
      {props.list[0]['_id']}
    </div>
  );
}

export default LoansList;