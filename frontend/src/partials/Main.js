import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Home from './Home';
import Apply from './Apply';
import Login from './admin/Login';
import Admin from './admin/Admin';
import Registration from './Registration';
import AddLoan from './AddLoan';
import LoanSchedule from './LoanSchedule';
import CustomerView from './admin/CustomerView';
import AdminInterface from './admin/AdminInterface';
import LoanDetailedView from './admin/LoanDetailedView';

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
        <Route path='/loanschedule' component={LoanSchedule} />
        <Route path='/customerview' component={CustomerView} />
        <Route path='/admininterface' component={AdminInterface} />
        <Route path='/loandetailedview/:id' component={LoanDetailedView} />
      </Switch>
    </div>
  );
};

export default Main;