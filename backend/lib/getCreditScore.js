const CREDIT_SCORE_API = require('../config').CREDIT_SCORE_API;

const getCreditScore = (loan) => {
  fetch(CREDIT_SCORE_API)
    .then(response => response.json())
    .then(score => score);
}

module.exports = getCreditScore;