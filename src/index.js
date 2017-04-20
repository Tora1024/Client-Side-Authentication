import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Routes from './router';
import 'normalize.css';
import '../styles/styles.css';
import { AUTH_USER } from './actions/types';

const App = () => {

  const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

  const token = localStorage.getItem('token');
  //if theres a token, consider the user to be signed in

	if (token) {
		//we need to update app state here
		store.dispatch({ type: AUTH_USER });
  }

  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
