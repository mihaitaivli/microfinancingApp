const cs_API = require('./apiPoints').creditScore;

const getCreditScore = (loan) => {
  return fetch(cs_API)
    .then(response => response.json())
    .then(score => score);
}

export default getCreditScore;