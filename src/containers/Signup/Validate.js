const validate = formProps => {
	const errors = {};

  if (!formProps.email) {
    errors.email = 'Please enter an email';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formProps.email)) {
    errors.email = 'Invalid email address'
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

export default validate;