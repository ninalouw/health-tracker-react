import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchFoodCalorie, enableCreateMode } from '../actions/index';
import FoodCalorieForm from './food_calories_new';

class FoodCaloriesShow extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchFoodCalorie(id);
  }
  onCreateClick() {
    const { id } = this.props.match.params;
    // populate form or modal
    this.props.enableCreateMode(id);
  }

  render() {
    const { food } = this.props;
    const { createMode } = this.props;
    const { id } = this.props.match.params;

    if (!food) {
      return <div>Loading...</div>;
    }
    if (createMode) {
      return (
        <div className="foods-new">
          <h2>Submit your Food</h2>
          <FoodCalorieForm
            id={this.props.match.params}
            value={this.props.food}
            history={this.props.history}
          />
        </div>
      );
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
        <button
          className="btn-primary"
          onClick={this.onCreateClick.bind(this)}
        >
          Create Food
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { food: state.foodCalories.food, createMode: state.foodCalories.createMode };
}


export default connect(mapStateToProps, { fetchFoodCalorie, enableCreateMode })(FoodCaloriesShow);
