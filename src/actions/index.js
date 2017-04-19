import axios from 'axios';
import { hashHistory } from 'react-router';
import { AUTH_USER, AUTH_ERROR, UNAUTH_USER } from './types';

const API_URL = 'http://localhost:3090';

export function signinUser({ email, password }) {
	return function(dispatch) {
		axios.post(`${API_URL}/signin`, {email, password})
			.then(response => {

				//Update state to indicate user is authenticated
				dispatch({ type: AUTH_USER });
				//Save JWT token
				localStorage.setItem('token', response.data.token);
				//Redirect to the route '/feature'
				hashHistory.push('/feature');
			})
			.catch(() => {
				dispatch(authError('Bad Login Info'));
			}); 
	}
}

export function authError(error) {
	return {
		type: AUTH_ERROR,
		payload: error
	};
}

export function signupUser ({email, password}) {
	return function(dispatch) {
		axios.post(`${API_URL}/signup`, {email, password})
			.then(response => {
				dispatch({ type: AUTH_USER });
				
				localStorage.setItem('token', response.data.token);

				hashHistory.push('/feature');
			})
			.catch((error) => {
				dispatch(authError(error.response.data.error));
			}); 
	}
}

export function signoutUser () {
	localStorage.removeItem('token');

	return {
		type: UNAUTH_USER	
	};
}