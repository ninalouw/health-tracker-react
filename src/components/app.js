import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import FoodsIndex from './foods_index';

// import Header from './header';

export default class App extends Component {
  render() {
    return (
      <Router>
        <MuiThemeProvider>
          <div className="app">
            {/* <Header /> */}
            <Route path="/" component={FoodsIndex} />
          </div>
        </MuiThemeProvider>
      </Router>
    );
  }
}
