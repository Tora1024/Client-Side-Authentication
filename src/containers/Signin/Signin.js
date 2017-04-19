import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import styles from './signin.css';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';
import renderField from './Render_Field';
import validate from './Validate';

class Signin extends Component {
	handleFormSubmit({ email, password }) {
		this.props.signinUser({ email, password });
	}

	renderAlert() {
		if (this.props.errorMessage ) {
			return (
				<div className={styles.error_message}>
					<strong>Oopps!</strong> { this.props.errorMessage }
				</div>
			);
		}
	}

  render () {
		const { handleSubmit } = this.props;

    return (
      <form className={styles.form_container} onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>

				<Field name="email" type="email" component={renderField} label="Email:" />

				<Field name="password" type="password" component={renderField} label="Password:" />

				{ this.renderAlert() }
				<button action="submit" className={styles.submit_button}>Sign in</button>
      </form>
		);
  }
}

Signin.propTypes = {
  handleSubmit: React.PropTypes.func,
  signinUser: React.PropTypes.func,
  errorMessage: React.PropTypes.string
};

function mapStateToProps(state) {
	return { errorMessage: state.auth.error };
}

const form = reduxForm({
  form: 'signin',
  validate
});

export default connect(mapStateToProps, actions)(form(Signin));