import React, { Component } from 'react';
// import { connect } from 'react-redux';
import SearchBar from '../containers/search_bar';
import FoodsForm from './foods_form';


class FoodsNew extends Component {
  render() {
    return (
      <div className="foods-new">
        <h3>Add Food</h3>
        <p> Please type in a food, and select the correct food and calorie data combination</p>
        <SearchBar />
        <p>Or, enter a food manually here:</p>
        <FoodsForm />
      </div>
    );
  }
}

export default FoodsNew;
