import React from 'react';
import { Redirect } from 'react-router-dom';
import AdminLogin from './AdminLogin';

const Admin = () =>  {
  return(
    <div className="container">
      <AdminLogin />
    </div>
  );
}

export default Admin;