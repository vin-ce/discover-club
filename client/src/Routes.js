import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import ProjectsLayout from './components/hoc/ProjectsLayout';

const Routes = (props) => {
	return (
		<React.Fragment>
			<Route path='/'>
				<Home />
			</Route>
			<Switch>
				<Route path='/:project'>
					<ProjectsLayout />
				</Route>
			</Switch>
		</React.Fragment>
	);
};

export default Routes;
