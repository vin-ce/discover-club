import React from 'react';
import classes from './ProjectsLayout.module.css';
import { connect } from 'react-redux';
import { Switch, Route, useParams } from 'react-router-dom';



const ProjectsLayout = (props) => {
	// -----------
	// POSITIONING
	// -----------
	const projectUrl = `/${useParams().project}`;
	// useHistory() does not cause component refresh on URL change. useParams() does.
	// const projectUrl = useHistory().location.pathname;

	let projectStyle;
	let projectPosition = {
		x: 0,
		y: 0,
		// either above (above title) or below
		relative: null,
	};

	// convoluted check to see that the positions have been set in the state.
	if (props.projects[0].position.x) {
		const project = props.projects.find((project) => project.url === projectUrl);

		const { position } = project;

		let relative;
		let topOffset;
		let distFromTitle = window.innerHeight * 0.1;

		if (position.y < window.innerHeight / 2 - 0.05 * window.innerHeight) {
			// title is higher than 50 + 20 vh (offsets the title height and footnote )

			// position below title
			topOffset = distFromTitle;
			relative = 'below';
		} else {
			// position above title
			topOffset = -(distFromTitle + window.innerHeight * 0.4);
			relative = 'above';
		}

		projectPosition = {
			x: position.x,
			y: position.y + topOffset,
			relative,
		};

		projectStyle = {
			left: position.x,
			top: position.y + topOffset,
		};
	}

	// ------
	// ROUTES
	// ------



	return (
		
	);
};

const mapStateToProps = (state) => {
	return {
		projects: state.project.projects,
	};
};
export default connect(mapStateToProps)(ProjectsLayout);
