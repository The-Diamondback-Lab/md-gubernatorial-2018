// react
import * as React from 'react';

// jquery
import $ from 'jquery';

// components
import AddThis from './AddThis.jsx';

export default class Footer extends React.Component {
  scroll = () => {
    $('html, body').animate(
      { scrollTop: $('#coverage').offset().top },
      500,
      'swing'
    );
  };

  render() {
    return (
      <footer>
        <div className="wrapper">
          <a
            href="http://www.dbknews.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="link-dbk"
          >
            The Diamondback
          </a>

          <a href="#coverage" onClick={this.scroll} className="scroll-to-top">
            Scroll to Top
          </a>
          <AddThis />
        </div>
      </footer>
    );
  }
}
