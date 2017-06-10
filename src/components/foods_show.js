import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { fetchFood, deleteFood } from '../actions/index';

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

  onDeleteClick() {
    const { id } = this.props.match.params;
    // here we call action creator deleteFood
    this.props.deleteFood(id, () => {
      this.props.history.push('/foods');
    });
  }

  render() {
    const { food } = this.props;

    if (!food) {
      return <div>Loading...</div>;
    }
    switch (food.category_id) {
      case 1:
        food.category_id = 'Breakfast';
        break;
      case 2:
        food.category_id = 'Lunch';
        break;
      case 3:
        food.category_id = 'Snack';
        break;
      case 4:
        food.category_id = 'Dinner';
        break;
    }

    return (
      <div className="foods-show">
        <h3>{food.title}</h3>
        <p> Meal Category: {food.category_id}</p>
        <p> Calories: {food.calories}</p>
        <p> Food Group: {food.macro_group}</p>
        <p> Date logged: {(new Date(food.date)).toUTCString()}</p>
        <button
          className="btn-secondary"
          onClick={this.onDeleteClick.bind(this)}
        >
          Delete Food
        </button>
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

export default connect(mapStateToProps, { fetchFood, deleteFood })(FoodsShow);
