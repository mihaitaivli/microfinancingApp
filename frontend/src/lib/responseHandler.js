import loanStatusUpdater from './loanStatusUpdater';
const mailAPI = require('./apiPoints').mailAPI;

const responseHandler = (action, userAndLoan) => {

  let decision = action === 'Approve' ? 'approved' : 'rejected';

  const message = `Dear mister ${userAndLoan.first_name}. We inform you that your loan application for £${userAndLoan.amount} was ${decision}.`;

  const body = {
    "fromAddress": "mihaita@ivli.co.uk",
    "toAddress": userAndLoan.email,
    "subject": "Loan request",
    "content": message,
    "mailFormat": "plaintext"
  }

  let proxyUrl = 'https://cors-anywhere.herokuapp.com/';
  return fetch(proxyUrl + mailAPI, {
    body: JSON.stringify(body),
    headers:{
      'content-type': 'application/json'
    },
    method: 'POST'
  }).then(response => response.json())
    .then(status => {
      return loanStatusUpdater(userAndLoan.id, action)
        .then(r => r.json())
        .then(updated => updated);
    })
}

export default responseHandler;