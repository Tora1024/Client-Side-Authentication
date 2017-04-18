import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import styles from './signup.css';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';

const renderField = field =>(
  <fieldset className={styles.input_group}>
    <label>{field.label}</label>
    <input {...field.input} type={field.type}/>
    {field.meta.touched && field.meta.error && <div className={styles.error_message}>{field.meta.error}</div>}
  </fieldset>
);

class Signup extends Component {
	handleFormSubmit({ email, password, passwordConfirm }) {
		this.props.signupUser({ email, password, passwordConfirm });
	}

	render() {
		const { handleSubmit } = this.props;

		return (
			<form className={styles.form_container} onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>

				<Field name="email" type="email" component={renderField} label="Email:" />

				<Field name="password" type="password" component={renderField} label="Password:" />

				<Field name="passwordConfirm" type="password" component={renderField} label="Confirm Password:" />

				<button action="submit" className={styles.submit_button}>Sign in</button>
      </form>
		);
	}
}

Signup.propTypes = {
  handleSubmit: React.PropTypes.func,
  signupUser: React.PropTypes.func
};

function validate(formProps) {
	const errors = {};

	console.log("password: ", formProps.password);
	console.log("password confirm: ", formProps.passwordConfirm);
	console.log("pass = confpass?: ", formProps.passwordConfirm === formProps.password);
	console.log(errors);

  if (!formProps.email) {
    errors.email = 'Please enter an email';
  }

  if (!formProps.password) {
    errors.password = 'Please enter a password';
  }

  if (!formProps.passwordConfirm) {
    errors.passwordConfirm = 'Please confirm your password';
  }

	if (formProps.password !== formProps.passwordConfirm) {
		errors.passwordConfirm = 'Passwords must match';
	}

	return errors;
}

function mapStateToProps(state) {
	return { user: state.user };
}

const form = reduxForm({
  form: 'signup',
  validate
});

export default connect(mapStateToProps, actions)(form(Signup));