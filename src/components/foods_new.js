import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchBar from '../containers/search_bar';
import { fetchFoodCalories } from '../actions/index';
// import FoodCalorieList from '../containers/food_calorie_list';


class FoodsNew extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Add Food Search Bar</h1>
        <p> Please type in a food, and select the correct food and calorie data combination</p>
        <SearchBar />
        <table className="table">
          <thead>
            <tr>
              <th>Foods New Calories heading</th>
            </tr>
          </thead>
          <tbody>
            {/*{this.props.foodCalorieList.map(this.renderFoodCaloriesList)}*/}
          </tbody>
        </table>
        {/*<FoodCalorieList />*/}
      </div>
    );
  }
}


function mapStateToProps(state) {
  return { foods: state.foods.foodCalorieList };
}

export default connect(mapStateToProps, { fetchFoodCalories })(FoodsNew);
