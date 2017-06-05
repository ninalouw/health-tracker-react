import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchFood } from '../actions/index';
import { Link } from 'react-router';

class FoodsShow extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchFood(this.props.match.params.id);
  }

  render() {
    const { food } = this.props;

    if (!food) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h3>{food.title}</h3>
        <p>Category: {food.category_id}</p>
        <p> ID: {food.id}</p>
        <p> Calories: {food.calories}</p>
        <p> Food Group: {food.macro_group}</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { food: state.foods.food };
}
export default connect(mapStateToProps, { fetchFood })(FoodsShow);
