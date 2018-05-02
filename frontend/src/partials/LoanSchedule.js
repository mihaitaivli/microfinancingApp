import React from 'react';
import LoanScheduleRow from './LoanScheduleRow';
import scheduler from '../lib/scheduler'

const LoanSchedule = (props) => {
  
  let schedule = scheduler(props);
  
  let rowList = schedule.map((element, index) => {
    return <LoanScheduleRow element={element} key={index} />
  });

  return(
    // Implement the schedule date properly
    <div className="container">
      <hr />
      <h4>This is how your payment schedule looks like</h4>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Amount remaining</th>
            <th scope="col">Payment</th>
            <th scope="col">Payment date</th> 
          </tr>
        </thead>
        <tbody>
          { rowList }
        </tbody>
      </table>
    </div>
  );
}

export default LoanSchedule;