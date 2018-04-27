import React, { Component } from 'react';
import Header from './partials/Header';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div>Container</div>
        <div>Footer</div>
      </div>
    );
  }
}

export default App;
