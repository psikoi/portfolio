import React, { Component } from 'react';
import './styles/Navigation.css';
import $ from "jquery";

export class Navigation extends Component {

  componentDidMount() {
    $(window).scroll(function () {
      var scroll = $(window).scrollTop();
      var nav = $("nav");

      if (scroll > 550) {
        nav.addClass("scrolled");
      } else {
        nav.removeClass("scrolled");
      }

    });
  }

  render() {
    return (
      <nav>
        <img src={process.env.PUBLIC_URL + '/img/logo.png'} alt="Ruben Amendoeira" />
        <ul>
          <li>WORK</li>
          <li>ABOUT</li>
          <li>BLOG</li>
        </ul>
      </nav>
    )
  }
}

export default Navigation
