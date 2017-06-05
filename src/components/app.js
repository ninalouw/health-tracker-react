import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import '../styles/styles.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FoodsIndex from './foods_index';
import FoodsNew from './foods_new';
import FoodsShow from './foods_show';
import Main from './main';
import Header from './header';

export default class App extends Component {
  render() {
    return (
      <Router>
        <MuiThemeProvider>
          <div className="app">
            <Header />
            <Switch>
              <Route exact path="/" component={Main} />
              <Route exact path="/foods" component={FoodsIndex} />
              <Route path="/new" component={FoodsNew} />
              <Route path="/foods/:id" component={FoodsShow} />
            </Switch>
          </div>
        </MuiThemeProvider>
      </Router>
    );
  }
}
