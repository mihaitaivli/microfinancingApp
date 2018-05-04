const cs_API = require('./apiPoints').creditScore;

const getCreditScore = () => {
  let proxyUrl = 'https://cors-anywhere.herokuapp.com/';
  let targetUrl = cs_API;
  // return fetch(cs_API)
  return fetch(proxyUrl + targetUrl)
    .then(response => response.json())
    .then(score => score);
}

export default getCreditScore;