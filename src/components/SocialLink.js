import React, { Component } from "react";

export class SocialLink extends Component {
  style = {
    marginRight: "20px"
  };

  render() {
    return (
      <a href={this.props.url} style={this.style}>
        <img
          src={
            process.env.PUBLIC_URL + "/img/icons/" + this.props.icon + ".png"
          }
          alt={this.props.icon}
        />
      </a>
    );
  }
}

export default SocialLink;
