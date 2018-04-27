import React, { Component } from 'react';
import Header from './partials/Header';
import Footer from './partials/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div>Container</div>
        <Footer />
      </div>
    );
  }
}

export default App;
