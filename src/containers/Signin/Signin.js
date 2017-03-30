import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import { reduxForm } from 'redux-form';
import styles from './signin.css';

class Signin extends Component {
	handleFormSubmit({ email, password }) {
		console.log(email, password);
	}

  render () {
		const { handleSubmit, fields: { email, password }} = this.props;

    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
				<fieldset>
					<label>Email: </label>
					<input {...email} type="text" />
				</fieldset>
				<fieldset>
					<label>Password: </label>
					<input {...password} type="text" />
				</fieldset>
				<button action="submit" >Sign in</button>
      </form>
		);
  }
}

const exportSignIn = reduxForm({
	form: 'signin',
	fields: ['email', 'password']
})(Signin);

export default CSSModules(exportSignIn, styles);