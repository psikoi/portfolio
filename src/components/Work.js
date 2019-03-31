import React, { Component } from 'react';
import './styles/Projects.css';
import Selector from './Selector';
import Thumbnail from './Thumbnail';

export class Work extends Component {

  projects = [
    { title: "RUNELITE" },
    { title: "FITTOGETHER" },
    { title: "NATURAL" },
    { title: "LOGOÀNOITE" },
    { title: "FLAPPY PERCEPTRON" },
    { title: "GENETIC EVOLTUION" }
  ];

  render() {
    return (
      <div className="projects">
        <div className="container">

          <h1>MY WORK</h1>
          <Selector />

          <div className="projects-grid">

            {
              this.projects.map((project, index) => (
                <Thumbnail key={project.title} project={project} index={index} />
              ))
            }

          </div>

        </div>
      </div>
    )
  }
}

export default Work
