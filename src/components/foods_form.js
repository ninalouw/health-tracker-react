import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createFood } from '../actions/index';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import MenuItem from 'material-ui/MenuItem';
import {
  DatePicker,
  SelectField,
  TextField,
} from 'redux-form-material-ui';

const required = (value) => { return (value == null ? 'Required' : undefined); };

class FoodsForm extends Component {

  componentDidMount() {
    this.refs.title
      .getRenderedComponent()
      .getRenderedComponent()
      .focus();
  }

  onSubmit(values) {
    const createFoodCallback = () => { 
      this.props.history.push('/foods'); 
    };
    this.props.createFood(values, createFoodCallback.bind(this));
  }

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <div>
          <Field
            name="title"
            component={TextField}
            hintText="Food title"
            floatingLabelText="Your Food"
            validate={required}
            ref="title"
            withRef
          />
        </div>
        <div>
          <Field
            name="category_id"
            component={SelectField}
            hintText="Choose Meal Category"
            floatingLabelText="Meal Category"
            validate={required}
            ref="category_id"
            withRef
          >
            <MenuItem value={1} primaryText="Breakfast" />
            <MenuItem value={2} primaryText="Lunch" />
            <MenuItem value={3} primaryText="Snack" />
            <MenuItem value={4} primaryText="Dinner" />
          </Field>
        </div>
        <div>
          <Field
            name="calories"
            component={TextField}
            hintText="Enter number of calories"
            floatingLabelText="Calories"
            validate={required}
            ref="calories"
            withRef
          />
        </div>
        <div>
          <Field
            name="macro_group"
            component={SelectField}
            hintText="Choose Food Group"
            floatingLabelText="Food group"
            validate={required}
            ref="macro_group"
            withRef
          >
            <MenuItem value="Carbohydrates" primaryText="Carbohydrates" />
            <MenuItem value="Proteins" primaryText="Proteins" />
            <MenuItem value="Vegetables" primaryText="Non-Starchy Vegetables" />
            <MenuItem value="Fruits" primaryText="Fruits" />
            <MenuItem value="Fats" primaryText="Fats" />
            <MenuItem value="Sugars" primaryText="Sugars" />
          </Field>
        </div>
        <div>
          <Field
            name="date"
            component={DatePicker}
            format={null}
            hintText="Food log date"
            validate={required}
          />
        </div>
        <div>
          <button className="btn-primary" type="submit" disabled={submitting}>Submit</button>
          <button
            className="btn-secondary"
            type="button"
            disabled={pristine || submitting}
            onClick={reset}
          >
            Cancel
          </button>
        </div>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};
  if (!values.title) {
    errors.title = 'Please enter a title';
  }
  if (!values.categories) {
    errors.categories = 'Please enter some categories';
  }
  if (!values.calories) {
    errors.calories = 'Please enter the calories';
  }
  if (!values.fats) {
    errors.fats = 'Please enter total fat';
  }
  if (!values.serving_size) {
    errors.serving_size = 'Please enter the serving size';
  }
  if (!values.date) {
    errors.date = 'Please enter the date';
  }
  return errors;
}

export default reduxForm({
  validate,
  form: 'FoodsNewForm',
})(
connect(null, { createFood })(FoodsForm),
);

