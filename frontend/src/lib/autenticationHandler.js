module.exports = {
  setStatus: (user) => {
    sessionStorage.setItem('user', user._id);
    sessionStorage.setItem('autenticated', true);
    sessionStorage.setItem('group', user.group);
  },
  removeStatus: () => {
    // TODO
  },
  check: (data) => {
    // TODO
  }
};