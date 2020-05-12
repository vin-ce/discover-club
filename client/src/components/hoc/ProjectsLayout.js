import React from 'react';
import classes from './ProjectsLayout.module.css';
import { connect } from 'react-redux';
import { Switch, Route, useHistory, useParams } from 'react-router-dom';
import Exhibition from '../../pages/Projects/Exhibition';
import FoodForThought from '../../pages/Projects/FoodForThought';

const ProjectsLayout = (props) => {
	// -----------
	// POSITIONING
	// -----------
	const projectUrl = `/${useParams().project}`;
	// useHistory() does not cause component refresh on URL change. useParams() does.
	// const projectUrl = useHistory().location.pathname;

	let projectStyle;

	// convoluted check to see that the positions have been set in the state.
	if (props.projects[0].position.x) {
		const project = props.projects.find(
			(project) => project.url === projectUrl
		);

		const { position } = project;

		let topOffset;
		let distFromTitle = window.innerHeight * 0.1;

		if (position.y < window.innerHeight / 2 - 0.05 * window.innerHeight) {
			// title is higher than 50 + 20 vh (offsets the title height and footnote )

			// position below title
			topOffset = distFromTitle;
		} else {
			// position above title
			topOffset = -(distFromTitle + window.innerHeight * 0.4);
		}

		projectStyle = {
			left: position.x,
			top: position.y + topOffset,
		};
	}

	// ------
	// ROUTES
	// ------

	const routes = (
		<Switch>
			<Route exact path='/exhibition'>
				<Exhibition />
			</Route>
			<Route exact path='/food-for-thought'>
				<FoodForThought />
			</Route>
		</Switch>
	);

	return (
		<div style={projectStyle} className={classes.container}>
			{routes}
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		projects: state.project.projects,
	};
};
export default connect(mapStateToProps)(ProjectsLayout);
