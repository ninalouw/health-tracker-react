import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { fetchFoodCalorie } from '../actions/index';

class FoodCaloriesShow extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (!this.props.food) {
      const { id } = this.props.match.params;
      console.log('Here we call fetchFoodCalorie');
      this.props.fetchFoodCalorie(id);
    }
  }

  render() {
    const { food } = this.props;

    if (!food) {
      return <div>Loading...</div>;
    }

    return (
      <div className="foods-cal-show">
        <h3>{food.item_name}</h3>
        <p>Total Calories: {food.nf_calories} kcal</p>
        <p>Calories from Fat: {food.nf_calories_from_fat} kcal</p>
        <p>Cholestrol: {food.nf_cholesterol}</p>
        <p>Dietary Fibre: {food.nf_dietary_fiber} grams</p>
        <p>Protein: {food.nf_protein} grams</p>
        <p>Total Fat: {food.nf_total_fat} grams</p>
        <p>Serving Size: {food.nf_serving_size_qty} serving</p>
      </div>
    );
  }
}

function mapStateToProps({ foodCalories }) {
  return { food: foodCalories.food };
}

export default connect(mapStateToProps, { fetchFoodCalorie })(FoodCaloriesShow);
