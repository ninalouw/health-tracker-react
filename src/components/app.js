import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import '../styles/styles.css';
import FoodsIndex from './foods_index';
import FoodsNew from './foods_new';
import FoodsShow from './foods_show';
import FoodCaloriesShow from './food_calories_show';
import Main from './main';
import Header from './header';

const App = () => {
  return (
    <Router>
      <MuiThemeProvider>
        <div className="app">
          {injectTapEventPlugin()}
          <Header />
          <Switch>
            <Route path="/foods/new/:id" component={FoodCaloriesShow} />
            <Route path="/foods/new" component={FoodsNew} />
            <Route path="/foods/:id" component={FoodsShow} />
            <Route exact path="/foods" component={FoodsIndex} />
            <Route exact path="/" component={Main} />
          </Switch>
        </div>
      </MuiThemeProvider>
    </Router>
  );
};
export default App;
