const scheduler = (props) => {

  const dataReceived = props.location.state;
  const amount = dataReceived.loan_amount;
  const duration = dataReceived.loan_term;
  const paymentDate = dataReceived.payment_date;
  const fixedPayment = (amount / duration).toFixed(3);

  let schedule = [];
  for (let i = 1; i <= duration; i++) {
    let remaining = (amount - (fixedPayment * i)).toFixed(2);
    schedule.push({index : i, remaining: remaining, payment: fixedPayment, date: paymentDate});
  }
  return schedule;
}

export default scheduler;