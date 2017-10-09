import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editFood, fetchFood, enableEditMode } from '../actions/index';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import MenuItem from 'material-ui/MenuItem';
import {
    DatePicker,
    SelectField,
    TextField,
} from 'redux-form-material-ui';

// validation functions
const required = (value) => { return (value == null ? 'Required' : undefined); };

class EditForm extends Component {


  componentDidMount() {
    const { id } = this.props.id;
    const food = this.props.fetchFood(id);
    console.log('fetched food with id:', id);
    this.refs.title // the Field
            .getRenderedComponent() // on Field, returns ReduxFormMaterialUITextField
            .getRenderedComponent() // on ReduxFormMaterialUITextField, returns TextField
            .focus(); // on TextField
  }

  onSubmit(values) {
    const { id } = this.props.id;
    // here we will call our action creator that will post to api
    const editFoodCallback = () => {
    // show confirm edited message here
      this.props.history.push('/foods');
      console.log('food updated', id);
    };
    this.props.editFood(id, values, editFoodCallback.bind(this));
  }

  render() {
    const { food, handleSubmit, pristine, reset, submitting } = this.props;
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
            format={(value, name) => value === '' ? null : (typeof value === 'string') ? new Date(value) : value}
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
            Undo Changes
          </button>
        </div>
      </form>
    );
  }
}

EditForm = reduxForm({
  form: 'FoodsEditForm',
  enableReinitialize: true,
})(EditForm);

EditForm = connect(
    (state) => {
      return ({
        initialValues: state.foods.food,
      });
    }, { editFood, fetchFood, enableEditMode })(EditForm);

export default EditForm;
