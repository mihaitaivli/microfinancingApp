const hash = require('hash.js');

const checkPassword = (password, hashedPassword) => {
  let newHashedPassword = hash.sha256().update(password).digest('hex');
  return newHashedPassword === hashedPassword ? true : false;
}

module.exports = checkPassword;