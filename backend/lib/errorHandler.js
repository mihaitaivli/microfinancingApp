const handleErrors = (err, req, res, next) => {
  let message = "";
  switch (err.status) {
    
    case 404:
      message = "The requested resource does not exist";
      break;
    
    default:
      return next();
  }
  
  res.json({"error": err.status, message});

}

module.exports = handleErrors;