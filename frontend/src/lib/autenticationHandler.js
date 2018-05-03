module.exports = {
  setStatus: (user) => {
    sessionStorage.setItem('user', user._id);
    sessionStorage.setItem('authenticated', true);
    sessionStorage.setItem('group', user.group);
  },
  removeStatus: () => {
    // TODO
  },
  check: () => {
    return sessionStorage.getItem('authenticated') ? true : false;
  },
  isAdmin: () => {
    return (sessionStorage.getItem('group') === 'admin' ? true: false;
  },
  getUser: () => {
    return sessionStorage.getItem('user');
  }
};