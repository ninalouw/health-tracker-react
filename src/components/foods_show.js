import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import EditForm from './edit_form';
// import { Link } from 'react-router';
import { fetchFood, deleteFood, enableEditMode } from '../actions/index';

class FoodsShow extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // if (!this.props.food) {
    const { id } = this.props.match.params;
    this.props.fetchFood(id);
    // console.log('Fetched food:', id);
    // }
  }

  onDeleteClick() {
    const { id } = this.props.match.params;
    // here we call action creator deleteFood
    this.props.deleteFood(id, () => {
      // should show delete confirmation msg here
      // before redirect
      this.props.history.push('/foods');
    });
  }

  onEditClick() {
    const { id } = this.props.match.params;
    // populate form or modal
    this.props.enableEditMode(id);
    console.log('edit click', id);
  }

  render() {
    const { food } = this.props;
    const { editMode } = this.props;
    const { id } = this.props.match.params;

    if (!food) {
      return <div>Loading...</div>;
    }
    if (editMode) {
      return (
        // render edit form here
        <div className="foods-new">
          <h2>Edit your Food</h2>
          <EditForm id={this.props.match.params} value={this.props.food} history={this.props.history} />
        </div>
      );
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
          Delete
        </button>
        <button
          className="btn-primary"
          onClick={this.onEditClick.bind(this)}
        >
          Edit
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { food: state.foods.food, editMode: state.foods.editMode };
}

// grider - to ensure we are only rendering the one post
// function mapStateToProps( {foods}, ownProps) {
//     return { food: foods[ownProps.match.params.id] };
// }

export default connect(mapStateToProps, { fetchFood, deleteFood, enableEditMode })(FoodsShow);
