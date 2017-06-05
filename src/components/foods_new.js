import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchBar from '../containers/search_bar';
// import { fetchFoodCalories } from '../actions/index';



class FoodsNew extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="foods-new">
        <h3>Add Food</h3>
        <p> Please type in a food, and select the correct food and calorie data combination</p>
        <SearchBar />
        <p>Or, enter a food manually here:</p>
        <form>
          <p>This is a form</p>
        </form>
      </div>
    );
  }
}

export default FoodsNew;
