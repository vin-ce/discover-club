import React, { useState, useEffect, useRef } from 'react';
import paper from 'paper';
import { connect } from 'react-redux';
import { projectOperations } from '../state/project/';

import classes from './Home.module.css';

import Footnote from './Home/Footnote';
import Title from './Home/ProjectTitle';

const Home = (props) => {
	const [
		footnotes,
		setFootnotes
	] = useState([]);
	const [
		titles,
		setTitles
	] = useState([]);
	const canvasEl = useRef(null);

	// have to be created after JSX happens to be able to document.querySelector. Replaces window.onLoad
	useEffect(() => {
		// Create an empty project and a view for the canvas:

		paper.setup('myCanvas');

		let x = 0;
		let xWidth;
		const NUM_OF_POINTS = 5;
		const VIEW_HEIGHT = paper.view.size.height;

		let footnotesArr = [];
		let titlesArr = [];

		let line = new paper.Path();
		line.style = {
			strokeColor : '#FFB255',
			strokeWidth : 5
		};

		// creates points
		for (let i = 0; i < NUM_OF_POINTS; i++) {
			// =================
			// LINE CONSTRUCTION
			// =================

			// --------
			// Y HEIGHT
			// --------

			// constricts between range 0.2 -> 0.7
			const ranHeight = parseFloat((Math.random() * (0.7 - 0.2) + 0.2).toFixed(1));
			// sets yHeight
			const yHeight = VIEW_HEIGHT * ranHeight;

			// --------
			// X HEIGHT
			// --------

			const ranWidth = Math.floor(Math.random() * (1500 - 500) + 500);

			if (i === 0) {
				// distance from left edge of screen
				xWidth = 1000;
			} else {
				xWidth = ranWidth;
			}

			// ----
			// LINE
			// ----

			const curPoint = new paper.Point((x += xWidth), yHeight);
			line.add(curPoint);

			// ==============
			// CORE ADDITIONS
			// ==============

			// ------
			// TITLES
			// ------

			const { projects } = props;

			titlesArr.push(<Title key={`title-${i}`} title={projects[i].title} url={projects[i].url} pos={curPoint} />);

			// ------------
			// UPDATE STATE
			// ------------
			props.setPosition(projects[i].title, {
				x : Math.floor(curPoint.x),
				y : Math.floor(curPoint.y)
			});

			// ---------
			// FOOTNOTES
			// ---------

			// Distance calculated from current point - prev point, so has to start when i > 0
			if (i > 0) {
				footnotesArr.push(<Footnote key={`footnote-num-${i}`} i={i} line={line} />);
			}
		}

		setFootnotes(footnotesArr);
		setTitles(titlesArr);
		// line.selected = true;
		line.smooth({ type: 'continuous' });
	}, []);

	return (
		<React.Fragment>
			<canvas onClick={() => console.log('clicked')} ref={canvasEl} id='myCanvas' resize='true' />
			<div className={classes.footnotesContainer}>{footnotes}</div>
			{titles}
		</React.Fragment>
	);
};

const mapStateToProps = (state) => {
	return {
		projects : state.project.projects
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		setPosition : (projectTitle, position) => dispatch(projectOperations.setProjectPosition(projectTitle, position))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
