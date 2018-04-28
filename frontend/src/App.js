import React, { Component } from 'react';
import Navigation from './partials/Navigation';
import Footer from './partials/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Footer />
      </div>
    );
  }
}

export default App;
