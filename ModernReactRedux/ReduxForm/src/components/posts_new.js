import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createPost } from "../actions";

class PostsNew extends Component {
  renderField = ({ input, label, meta }) => {
    const className = `form-group ${
      meta.touched && meta.error ? "has-danger" : ""
    }`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input className="form-control" type="text" {...input} />
        <div className="text-help">{meta.touched ? meta.error : ""}</div>
      </div>
    );
  };

  onSubmit = values => {
    this.props.createPost(values, () => {
      this.props.history.push("/");
    });
  };
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <Field label="Title" name="title" component={this.renderField} />
        <Field label="Tags" name="tags" component={this.renderField} />
        <Field
          label="Post Content"
          name="content"
          component={this.renderField}
        />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <Link to="/" className="btn btn-danger">
          Cancel
        </Link>
      </form>
    );
  }
}

const validate = values => {
  //console.log(values) --> { title: "asdf", categories: "asdf", content: "asdf"}
  const errors = {};

  // Validate the inputs from 'values'
  if (!values.title || values.title.length < 3) {
    errors.title = "Enter a title that is at least 3 characters!";
  }

  if (!values.tags) {
    errors.tags = "Enter some categories!";
  }

  if (!values.content) {
    errors.content = "Enter some content please";
  }
  // If errors is empty, the form is fine to submit
  return errors;
};

export default reduxForm({
  validate,
  form: "PostsNewForm"
})(
  connect(
    null,
    { createPost }
  )(PostsNew)
);
