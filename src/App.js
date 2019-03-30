import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Projects from './components/Projects.js';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Navigation />
        <div className="sections">
          <Hero />
          <Projects />
        </div>
      </div>
    );
  }
}

export default App;
