import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Home from './Home';
import Apply from './Apply';
import Login from './Login';
import Admin from './Admin';
import Registration from './Registration';
import AddLoan from './AddLoan';

const Main = () => {
  return(
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/apply' component={Apply} />
        <Route path='/registration' component={Registration} />
        <Route path='/login' component={Login} />
        <Route path='/admin' component={Admin} />
        <Route path='/add_loan' component={AddLoan} />
      </Switch>
    </div>
  );
};

export default Main;