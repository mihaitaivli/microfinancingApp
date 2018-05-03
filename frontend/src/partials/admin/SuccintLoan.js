import React from 'react';

const SuccintLoan = (props) => {
  return(
    <tr>
      <th scope="row">{props.number + 1}</th>
      <td>{props.loan.status}</td>
      <td>{props.loan.loan_amount}</td>
      <td>{props.loan.loan_amount - props.loan.loan_amount_paid}</td>
    </tr>
  );
};

export default SuccintLoan;