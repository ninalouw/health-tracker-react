import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Link } from 'react-router-dom';
import { fetchFoods } from '../actions/index';
import FoodsNew from './foods_new';


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
          <strong>{food.title}</strong>
        </li>
      );
    });
  }


  render() {
    return (
      <div>
        <h3>Your Foods</h3>
        <div className="list-group">
          {this.renderFoodsList()}
        </div>
        <div className="text-xs-right">
          <Link to="/new" className="btn btn-primary"><button>Add a Food</button></Link>
          <Switch>
            <Route exact path="/new" component={FoodsNew} />
            {/* <Route path={`/foods/${food.id}`} component={FoodsShow}/> */}
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
