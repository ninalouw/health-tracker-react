import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import FoodsIndex from './foods_index';
import FoodsNew from './foods_new';
import Main from './main';
import Header from './header';

export default class App extends Component {
  render() {
    return (
      <Router>
        <MuiThemeProvider>
          <div className="app">
            <Header />
            <hr />
            <Switch>
              <Route exact path="/" component={Main} />
              <Route path="/foods" component={FoodsIndex} />
              <Route path="/new" component={FoodsNew} />
            </Switch>
          </div>
        </MuiThemeProvider>
      </Router>
    );
  }
}
