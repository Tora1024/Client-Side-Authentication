import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import styles from './signin.css';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';

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

				<fieldset className={styles.input_group}>
					<label>Email: </label>
					<Field name="email" component="input" />
				</fieldset>

				<fieldset className={styles.input_group}>
					<label>Password: </label>
					<Field name="password" type="password" component="input" />
				</fieldset>

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

/*export default reduxForm({
	form: 'signin'
}, null, actions)(Signin);
*/

//This was a workaround needed in order to implement this. 
//Seems like redux-form 6 and up is completely rewritten, and still 
//getting in the way of other things, like getting actions into props.

Signin = reduxForm({
  form: 'signin'
})(Signin);

export default Signin = connect(mapStateToProps, actions)(Signin);