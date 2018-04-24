exports.handler = function(event, context) {
    
  const MAX_CR_SCORE = 750;
  const MIN_CR_SCORE = 200;
  
  let score = Math.floor(Math.random() * (MAX_CR_SCORE - MIN_CR_SCORE) + MIN_CR_SCORE);
  let body = {
      "maxCreditScore" : MAX_CR_SCORE,
      "minCreditScore" : MIN_CR_SCORE,
      "actualCreditScore" : score
  }
  const response = {"statusCode": 200,"headers": {"Content-Type": "application/json"},"body": JSON.stringify(body)};
  context.done(null, response);
};