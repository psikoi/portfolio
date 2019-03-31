import React, { Component } from "react";
import "./styles/About.css";
import InfoOrb from "./InfoOrb";
import SocialLink from "./SocialLink";

export class About extends Component {
  render() {
    return (
      <div className="about">
        <div className="about-container">
          <div className="about-left">
            <h1>ABOUT</h1>

            <p>
              Praesent sodales est nulla, eu consectetur sem facilisis a. Proin
              accumsan ultricies turpis ut viverra. Sed ac tempor magna.
            </p>
            <p>
              Maecenas vitae mi felis. Praesent est ante, convallis in ante
              ultrices, luctus commodo neque. Aliquam eu leo id nulla venenatis.
            </p>
            <br />

            <SocialLink icon="github" url="https://github.com/psikoi" />
            <SocialLink icon="linkedin" url="https://www.linkedin.com/in/ruben-amendoeira/"/>
            <SocialLink icon="email" url="mailto:ruben.amendoeira@gmail.com" />
            
          </div>
          <div className="about-right">
            <InfoOrb text="Ruben Amendoeira, 22 y/o" icon="person" />
            <InfoOrb text="Lisbon, Portugal" icon="location" />
            <InfoOrb text="Software Engineering, 3rd year" icon="school" />
            <InfoOrb text="Full Stack Junior Dev" icon="code" />
          </div>
        </div>
      </div>
    );
  }
}

export default About;
