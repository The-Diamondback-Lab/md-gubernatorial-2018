//react imports
import * as React from 'react';

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
      <React.Fragment>
        <Landing />
        <Coverage />
        <Footer />
      </React.Fragment>
    );
  }
}
