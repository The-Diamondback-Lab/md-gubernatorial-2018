//react imports
import * as React from 'react';

// react-router
import { MemoryRouter } from 'react-router-dom';

//google analytics
import Analytics from 'react-router-ga';

// views
import Landing from './views/Landing.jsx';
import Coverage from './views/Coverage.jsx';

// components
import Footer from './components/Footer.jsx';

//style
import './style/css/app.min.css';

export default class App extends React.Component {
  render() {
    return (
      <MemoryRouter>
        <Analytics id="" debug>
          <React.Fragment>
            <Landing />
            <Coverage />
            <Footer />
          </React.Fragment>
        </Analytics>
      </MemoryRouter>
    );
  }
}
