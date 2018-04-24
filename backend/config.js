module.exports = {
  PORT: {
    test: 3090,
    dev: 3001
  },
  DB: {
    test: 'mongodb://localhost/microfinancing-test',
    dev: 'mongodb://localhost/microfinancing'
  },
  CREDIT_SCORE_API: "https://hpri26omx7.execute-api.eu-west-2.amazonaws.com/stage2/returnCreditScore"
};