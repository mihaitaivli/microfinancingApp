import React, { Component } from 'react';
import Jumbotron from './Jumbotron';

export default class Header extends Component {
  render(){
    return(
      <div className="header">
        <Jumbotron />
      </div>
    );
  };
}