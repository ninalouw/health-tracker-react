import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { fetchFood } from '../actions/index';

class FoodsShow extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (!this.props.post) {
      const { id } = this.props.match.params;
      this.props.fetchFood(id);
    }
  }

  render() {
    const { food } = this.props;

    if (!food) {
      return <div>Loading...</div>;
    }

    return (
      <div className="foods-show">
        <h3>{food.title}</h3>
        <p>Category: {food.category_id}</p>
        <p> Calories: {food.calories}</p>
        <p> Food Group: {food.macro_group}</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { food: state.foods.food };
}

// grider - to ensure we are only rendering the one post
// function mapStateToProps( {foods}, ownProps) {
//     return { food: foods[ownProps.match.params.id] };
// }

export default connect(mapStateToProps, { fetchFood })(FoodsShow);
