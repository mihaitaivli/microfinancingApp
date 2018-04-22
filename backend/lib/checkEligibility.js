const checkEligibility = (amount, duration) => {
  
  // TODO - replace hardcoded values with ones from db
  const MAX_AMOUNT = 5000;
  const MAX_DURATION = 60;

  if (amount <= MAX_AMOUNT && duration <= MAX_DURATION) return true;
  else return false;
};

module.exports = checkEligibility;