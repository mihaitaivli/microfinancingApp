import React from 'react';

const LoanSchedule = (props) => {
  const dataReceived = props.location.state;
  return(
    <div>
    {/* {console.log(props)} */}
      Data received - {JSON.stringify(dataReceived, null, 2)}
    </div>
  );
}

export default LoanSchedule;