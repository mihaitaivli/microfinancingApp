import React from 'react';
import { Link } from 'react-router-dom';
import LoanScheduleRow from './LoanScheduleRow';
import scheduler from '../lib/scheduler'

const LoanSchedule = (props) => {
  
  let schedule = scheduler(props);
  
  let rowList = schedule.map((element, index) => {
    return <LoanScheduleRow element={element} key={index} />
  });

  // cler the sessionStorage
  sessionStorage.clear();

  return(
    // Implement the schedule date properly
    <div className="container">
      <hr />
      <h4>This is how your payment schedule will look</h4>
      <h5>You will get an answer in 1h max. Guaranteed!</h5>
      <table className="table table-striped">
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
      <Link className="btn btn-primary" to="/">Ok</Link> 
    </div>
  );
}

export default LoanSchedule;