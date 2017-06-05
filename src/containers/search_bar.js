import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchFoodCalories } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.renderFoodCaloriesList = this.renderFoodCaloriesList.bind(this);
  }

  onInputChange(event) {
    console.log(event.target.value);
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
    // Here need to fetch the food calorie data
    this.props.fetchFoodCalories(this.state.term);
    this.setState({ term: '' });
  }

  renderFoodCaloriesList() {
    /*return this.props.foods.map((food) => {
      return (
        <li className="list-group-item" key={food.fields.item_id}>
          {food.fields.item_name}
        </li>
      );
    });*/
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Get calorie data from your food search term"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-primary">Submit</button>
        </span>
        {/*<div className="list-group">
          {this.renderFoodCaloriesList()}
        </div>*/}
        {/*<button
          onClick={this.renderFoodCaloriesList()}
          name="renderFoodCaloriesList"

        />Render*/}
      </form>
    );
  }
}


function mapStateToProps(state) {
  return { foods: state.foods.foodCalorieList };
}

export default connect(mapStateToProps, { fetchFoodCalories })(SearchBar);