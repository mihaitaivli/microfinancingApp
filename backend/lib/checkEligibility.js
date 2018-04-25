const checkEligibility = (amount, duration) => {
  
  // TODO - replace hardcoded values with ones from db
  const MAX_AMOUNT = 5000;
  const MAX_DURATION = 60;
  let outcome = false;

  if (amount <= MAX_AMOUNT && duration <= MAX_DURATION) outcome = true;

  return {
    "isEligible": outcome
  };
};

module.exports = checkEligibility;