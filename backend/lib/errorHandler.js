const handleErrors = (err, req, res, next) => {
  let message = "";
  switch (err.status) {
    
    case 400:
      message = "Invalid email or password";
      break;
    
    case 404:
      message = "The requested resource does not exist";
      break;

    case 500:
      message = "We encountered an internal error";
      break;

    default:
      return next();
  }
  
  res.json({"error": {"status": err.status, message}});

}

module.exports = handleErrors;