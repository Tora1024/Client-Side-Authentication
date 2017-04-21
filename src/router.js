import React from 'react'; 
import { Router, Route, browserHistory, IndexRoute, Redirect } from 'react-router';

import Home from './containers/Home/Home';
import About from './containers/About/About';
import NotFound from './containers/404/404';

import Signin from './containers/Signin/Signin';
import Signout from './containers/Signout/Signout';
import Signup from './containers/Signup/Signup';
import Feature from './containers/Feature/Feature';
import Welcome from './containers/Welcome/Welcome';

import RequireAuth from './HOC/Auth/Require_Auth';

const Routes = () => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={Home} >
        <IndexRoute component={Welcome} />
				<Route path='signin' component={Signin}/>
				<Route path='signout' component={Signout}/>
        <Route path='signup' component={Signup}/>
        <Route path='feature' component={RequireAuth(Feature)}/>
				<Route path="about" component={About} />
      </Route>

      <Route path='/404' component={NotFound} />
      <Redirect from='*' to='/404' />
    </Router>
  );
};

export default Routes;
