import React from 'react';

const CustomerData = (props) => {
  let customer = props.data;
  return(
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
        </div>
      </div>
    </div>
  );
}

export default CustomerData;