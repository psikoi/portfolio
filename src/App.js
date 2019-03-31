import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Work from './components/Work';
import About from './components/About';
import Footer from './components/Footer';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Navigation />
        <div className="sections">
          <Hero />
          <Work />
          <About />
          <Footer/>
        </div>
      </div>
    );
  }
}

export default App;
