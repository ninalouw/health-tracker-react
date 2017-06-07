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

// validation functions
const required = (value) => { return (value == null ? 'Required' : undefined); };

class FoodsForm extends Component {

  componentDidMount() {
    this.refs.name // the Field
      .getRenderedComponent() // on Field, returns ReduxFormMaterialUITextField
      .getRenderedComponent() // on ReduxFormMaterialUITextField, returns TextField
      .focus(); // on TextField
  }

  onSubmit(values) {
    console.log(values);
    //here we will call our action creator that will post to api
    this.props.createFood(values);

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
            name="category"
            component={SelectField}
            hintText="Meal Category"
            floatingLabelText="Meal Category"
            validate={required}
          >
            <MenuItem value="Breakfast" primaryText="Breakfast" />
            <MenuItem value="Lunch" primaryText="Lunch" />
            <MenuItem value="Snack" primaryText="Snack" />
            <MenuItem value="Dinner" primaryText="Dinner" />
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
            component={TextField}
            hintText="Enter Food Group"
            floatingLabelText="Food group"
            validate={required}
            ref="macro_group"
            withRef
          />
        </div>
        {/*<div>
          <Field
            name="fats"
            component={TextField}
            hintText="Enter fats"
            floatingLabelText="Total fats"
            validate={required}
            ref="fats"
            withRef
          />
        </div>*/}
        {/*<div>
          <Field
            name="servings"
            component={TextField}
            hintText="Enter number of servings"
            floatingLabelText="Number of Servings"
            validate={required}
            ref="fats"
            withRef
          />
        </div>*/}
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
// validate the inputs from 'values'
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
// if errors obj empty, the form can be submitted
  return errors;
}


export default reduxForm({
  validate,
  form: 'FoodsNewForm',
})(
connect(null, { createFood })(FoodsForm)
)

