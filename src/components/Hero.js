import React, { Component } from 'react'
import './styles/Hero.css';

export class Hero extends Component {

  bannerStyle = {
    background: 'url(' + process.env.PUBLIC_URL + '/img/banner_bg.png' + ')',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  }

  render() {
    return (
      <div className="hero">
        <div className="hero-container" style={this.bannerStyle}>
        </div>
        <h1>
          SOFTWARE<br />
          <span>DEVELOPMENT</span> & <span>DESIGN</span><br />
          PORTFOLIO
        </h1>
      </div>
    )
  }
}

export default Hero
