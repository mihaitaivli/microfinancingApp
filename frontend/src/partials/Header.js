import React, { Component } from 'react';
import Navigation from './Navigation';
import Jumbotron from './Jumbotron';

export default class Header extends Component {
  render(){
    return(
      <div className="header">
        <Navigation />
        <Jumbotron />
      </div>
    );
  };
}