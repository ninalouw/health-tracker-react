import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router';
import { fetchFoods } from '../actions/index';


class FoodsIndex extends Component {
  constructor(props) {
    super(props);

    this.renderFoodsList = this.renderFoodsList.bind(this);
  }

  componentWillMount() {
    console.log('this would be a good time to call action creator to fetch foods');
    this.props.fetchFoods();
  }

  renderFoodsList() {
    return this.props.foods.map((food) => {
      return (
        <li className="list-group-item" key={food.id}>
          <strong>{food.title}</strong>
        </li>
      );
    });
  }


  render() {
    return (
      <div className="foodsIndex"> {this.renderFoodsList()} </div>
    );
  }

}

function mapStateToProps(state) {
  return { foods: state.foods.foodList };
}

export default connect(mapStateToProps, { fetchFoods })(FoodsIndex);
