import React from 'react';

const LoanScheduleRow = (props) => {
  return(
    <tr>
      <th scope="row">{props.element.index}</th>
      <td>{props.element.remaining}</td>
      <td>{props.element.payment}</td>
      <td>{props.element.date}</td>
    </tr>
  );
}

export default LoanScheduleRow;