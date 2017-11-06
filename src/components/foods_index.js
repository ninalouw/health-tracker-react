import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchFoods } from '../actions/index';


class FoodsIndex extends Component {
  constructor(props) {
    super(props);

    this.renderFoods = this.renderFoods.bind(this);
  }

  componentDidMount() {
    this.props.fetchFoods();
  }

  renderFoods() {
    return this.props.foods.map((food) => {
      return (
        <li className="list-group-item" key={food.id}>
          <Link to={`foods/${food.id}`}>{food.title}</Link>
        </li>
      );
    });
  }


  render() {
    return (
      <div className="foods-index">
        <h3>Your Foods</h3>
        <ul className="list-group">
          {this.renderFoods()}
        </ul>
        <div className="text-xs-right">
          <Link to="/foods/new" ><button className="btn btn-primary">Add Food</button></Link>
        </div>
      </div>
    );
  }

}

function mapStateToProps(state) {
  return { foods: state.foods.foodList };
}

export default connect(mapStateToProps, { fetchFoods })(FoodsIndex);
