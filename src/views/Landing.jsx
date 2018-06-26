// react
import * as React from 'react';

// jquery
import $ from 'jquery';

// images
import dbkLogo from '../assets/img/dbk-resized-white.svg';

export default class Landing extends React.Component {
  scroll = () => {
    $('html, body').animate(
      { scrollTop: $('#coverage').offset().top },
      500,
      'swing'
    );
  };

  render() {
    return (
      <div id="landing">
        <div className="landing-text">
          <div className="wrapper">
            {/*  */}
            <div className="text-container">
              <img
                src={dbkLogo}
                alt="Diamondback Logo"
                className="animated slideInLeft"
                id="dbk-logo-landing"
              />

              <h1 className="animated slideInRight heading">
                <span>The Diamondback's Guide to the Primaries</span>
                <span>Our Highlights of the Gubernatorial Race So Far</span>
              </h1>
            </div>
            {/*  */}
            <a
              href="#coverage"
              className="link-learn-more animated infinite pulse"
              onClick={this.scroll}
            >
              <span>Learn More</span>
              <i className="far fa-chevron-right" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}
