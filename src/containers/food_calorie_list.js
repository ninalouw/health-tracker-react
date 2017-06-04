import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchFoodCalories } from '../actions/index';


class FoodCalorieList extends Component {
  constructor(props) {
    super(props);

    this.renderFoodCaloriesList = this.renderFoodCaloriesList.bind(this);
  }


  renderFoodCaloriesList() {
    return this.props.foods.map((food) => {
      return (
        <tr className="list-group-item" key={food.fields.item_id}>
          <td>{food.fields.item_name}</td>
        </tr>
      );
    });
  }

  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Food</th>
            <th>Calories</th>
            <th>Fat</th>
          </tr>
        </thead>
        <tbody>
          {this.renderFoodCaloriesList()}
        </tbody>
      </table>
    );
  }
}


function mapStateToProps({ state }) {
  return { foods: state.foods.foodCalorieList };
}


export default connect(mapStateToProps, { fetchFoodCalories })(FoodCalorieList);
