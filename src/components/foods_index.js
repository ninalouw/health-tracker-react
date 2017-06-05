import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Link } from 'react-router-dom';
import { fetchFoods } from '../actions/index';
import FoodsNew from './foods_new';
import FoodsShow from './foods_show';


class FoodsIndex extends Component {
  constructor(props) {
    super(props);

    this.renderFoodsList = this.renderFoodsList.bind(this);
  }

  componentWillMount() {
    this.props.fetchFoods();
  }

  renderFoodsList() {
    return this.props.foods.map((food) => {
      return (
        <li className="list-group-item" key={food.id}>
          <span className="pull-xs-right">{food.categories}</span>
          <Link to={`foods/${food.id}`}><strong>{food.title}</strong></Link>
        </li>
      );
    });
  }


  render() {
    return (
      <div className="foods-index">
        <h3>Your Foods</h3>
        <div className="list-group">
          {this.renderFoodsList()}
        </div>
        <div className="text-xs-right">
          <Link to="/new" ><button className="btn btn-primary">Search for a Food</button></Link>
          <Switch>
            <Route exact path="/new" component={FoodsNew} />
            {/*<Route path="/foods/:id" component={FoodsShow} />*/}
          </Switch>
        </div>
      </div>
    );
  }

}

function mapStateToProps(state) {
  return { foods: state.foods.foodList };
}

export default connect(mapStateToProps, { fetchFoods })(FoodsIndex);
