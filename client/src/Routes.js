import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';


const Routes = (props) => {
	return (
		<React.Fragment>
			<Route path='/'>
				<Home />
			</Route>
			<Switch>
				<Route path='/:project'>
					
				</Route>
			</Switch>
		</React.Fragment>
	);
};

export default Routes;
