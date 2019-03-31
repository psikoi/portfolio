import React, { Component } from "react";
import "./styles/InfoOrb.css";

export class InfoOrb extends Component {
  render() {
    var url = process.env.PUBLIC_URL + "/img/icons/" + this.props.icon + ".png";

    return (
      <div className="orb">
        <div className="orb-icon">
          <img src={url} alt={this.props.icon} />
        </div>
        <div className="orb-text">{this.props.text}</div>
      </div>
    );
  }
}

export default InfoOrb;
