import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import { reduxForm, Field } from 'redux-form';
import styles from './signin.css';

class Signin extends Component {
	handleFormSubmit({ email, password }) {
		console.log(email, password);
	}

  render () {
		const { handleSubmit } = this.props;

    return (
      <form className={styles.form_container} onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>

				<fieldset className={styles.input_group}>
					<label>Email: </label>
					<Field name="email" component="input" />
				</fieldset>

				<fieldset className={styles.input_group}>
					<label>Password: </label>
					<Field name="password" component="input" />
				</fieldset>

				<button action="submit" className={styles.submit_button}>Sign in</button>
      </form>
		);
  }
}

Signin.propTypes = {
  handleSubmit: React.PropTypes.func
};

const exportSignIn = reduxForm({
	form: 'signin'
})(Signin);

export default CSSModules(exportSignIn, styles);