import React, { Component } from 'react';
import Jumbotron from './Jumbotron';

export default class Home extends Component {
  render(){
    return(
      <div className="header">
        <Jumbotron />
      </div>
    );
  };
}