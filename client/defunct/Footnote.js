import React from 'react';
import classes from './Footnote.module.css';

const Footnote = (props) => {
	// because it's flex, the x is defined by where the first one starts (everything else stacks based on the width of the previous div)

	const { line, i } = props;

	const pointX = line.segments[0].point.x;

	// set width for div
	const footnoteDivWidth =
		line.segments[i].point.x - line.segments[i - 1].point.x;

	const footnoteStyle = {
		left: pointX + 'px',
		width: footnoteDivWidth + 'px',
	};
	// add footnote content which is sticky
	const footnoteContent = (
		<p className={classes.footnoteContent}>
			{'Test num: ' + i + 'x pos: ' + pointX}
		</p>
	);

	// add footnote div that sets width

	return (
		<div className={classes.footnoteDiv} style={footnoteStyle}>
			{footnoteContent}
		</div>
	);
};

export default Footnote;
