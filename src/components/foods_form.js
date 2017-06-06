import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

class FoodsForm extends Component {
  renderField(field) {
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input
          className="form-input"
          type="text"
          {...field.input}
        />
      </div>
    );
  }


  render() {
    return (
      <form>
        <Field
          label="Title"
          name="title"
          component={this.renderField}
        />
        <Field
          label="Meal Category"
          name="food.category"
          component={this.renderField}
        />
        <Field
          label="Calories"
          name="calories"
          component={this.renderField}
        />
        <Field
          label="Macro Group"
          name="macro_group"
          component={this.renderField}
        />


      </form>
    );
  }
}

export default reduxForm({
  form: 'FoodsNewForm',
})(FoodsForm);
