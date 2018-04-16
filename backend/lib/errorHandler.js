const handleErrors = (err, req, res, next) => {

  switch (err.status) {
    
    case 404:
      res.send(err.message || 'An error occured');  
      break;
  
    default:
      return next();
  }

}

module.exports = handleErrors;