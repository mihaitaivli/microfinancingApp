import React from 'react';
const API = require('./apiPoints').loans;

const loanStatusUpdater = (id, action) => {

  let response = action === 'Approve' ? 'approved' : 'rejected';
  let body = {
    "newStatus": response
  }

  return fetch(API + id, {
    body: JSON.stringify(body),
    headers:{
      'content-type': 'application/json'
    },
    method: 'PUT'
  }).then(res => res.json())
    .then(updatedLoan => {
      return updatedLoan.status === response;
    })
}

export default loanStatusUpdater;