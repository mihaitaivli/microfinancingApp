import React from 'react';
import SuccintLoan from './SuccintLoan';

const LoansList = (props) => {
  let renderedListOfLoans = props.loans.map((loan, key) => {
    return <SuccintLoan key={key} loan={loan} number={key} />
  });
  return(
    <div className="container">
      <h4>Your current loans</h4>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Status</th>
            <th scope="col">Amount</th>
            <th scope="col">Remaining</th>
          </tr>
        </thead>
        <tbody>
          {renderedListOfLoans}
        </tbody>
      </table>
    </div>
  );
}

export default LoansList;