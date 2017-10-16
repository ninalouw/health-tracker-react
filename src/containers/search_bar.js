import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { fetchFoodCalories } from '../actions/index';
// import ModalForm from '../components/modal_form';
import { Link } from 'react-router-dom';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.renderFoodCaloriesList = this.renderFoodCaloriesList.bind(this);
    // this.handleFoodClick = this.handleFoodClick.bind(this);
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
    const { foods } = this.props;

    if (!foods) {
      return <div>Loading...</div>;
    }
    return this.props.foods.map((food) => {
      return (
        <li className="list-group-item" key={food.fields.item_id}>
          <span><strong>{food.fields.item_name}</strong></span>
          <span>Calories: {food.fields.nf_calories} kcal</span>
          <span>Serving Size: {food.fields.nf_serving_size_qty} serving</span>
          <Link to={`new/${food.fields.item_id}`}>
            <button className="btn btn-secondary">ADD THIS FOOD</button>
          </Link>
        </li>
      );
    });
  }

  render() {
    return (
      <div className="search-bar">
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
          <div className="list-group">
            {this.renderFoodCaloriesList()}
          </div>
        </form>
      </div>
    );
  }
}


function mapStateToProps({ foodCalories }) {
  return { foods: foodCalories.foodCalorieList };
}

export default connect(mapStateToProps, { fetchFoodCalories })(SearchBar);
