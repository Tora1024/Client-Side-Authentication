import React from 'react'; 
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import Home from './containers/Home/Home';
import About from './containers/About/About';
import NotFound from './containers/404/404';

import Signin from './containers/Signin/Signin';

const Routes = () => {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={Home} > 
				<Route path='signin' component={Signin}/>
				<Route path="about" component={About} />
      </Route>

      <Route path='*' component={NotFound} />
    </Router>
  );
};

export default Routes;
