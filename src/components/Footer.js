import React, { Component } from "react";

export class Footer extends Component {
  style = {
    width: "100%",
    fontSize: "12px",
    textAlign: "center",
    padding: "20px 0px"
  };

  render() {
    return <div style={this.style}>Ruben Amendoeira © 2019 &nbsp; | &nbsp; Developed with REACT</div>;
  }
}

export default Footer;
