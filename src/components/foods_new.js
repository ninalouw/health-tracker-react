import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchBar from '../containers/search_bar';


class FoodsNew extends Component {

  renderCaloriesData(calorieData) {
    const name = calorieData.hits.fields.item_name;
    const calories = calorieData.hits.map(foodCalories => foodCalories.fields.nf_calories);

    return (
      <tr key={name}>
        <td>{calories}</td>
      </tr>
    );
  }

  render() {
    return (
      <div>
        <h1>Add Food Search Bar</h1>
        <p> Please type in a food, and select the correct food and calorie data combination</p>
        <SearchBar />
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Calories</th>
            </tr>
          </thead>
          <tbody>
            {this.props.foodCalories.map(this.renderCaloriesData)}
          </tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps({ foodCalories }) {
  return { foodCalories };
}

export default connect(mapStateToProps)(FoodsNew);
