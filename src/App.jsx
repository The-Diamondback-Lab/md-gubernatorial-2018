//react imports
import * as React from 'react';

//react-router imports
import { MemoryRouter } from 'react-router-dom';

//google analytics
import Analytics from 'react-router-ga';

//style imports
import './style/css/app.min.css';

export default class App extends React.Component {
  render() {
    return (
      <MemoryRouter>
        <Analytics id="" debug>
          <React.Fragment>
            <p>
              To get started, edit <code>src/App.jsx</code> and save to reload.
            </p>
          </React.Fragment>
        </Analytics>
      </MemoryRouter>
    );
  }
}
