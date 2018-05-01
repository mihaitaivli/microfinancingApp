const hash = require('hash.js');

const encrypt = (plainPassword) => {
  return hash.sha256().update(plainPassword).digest('hex');
}

export default encrypt;