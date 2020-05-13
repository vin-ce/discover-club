import React from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';

import classes from './Discover.module.css';
import utils from '../../components/utils/randomPosition';
import essay from './Text/whatLiesInBetween';

const Discover = (props) => {
	const { position } = props;

	// onclick change z-index?
	// title
	// introPoem
	// link
	// body
	// outroPoem
	const titleStyle = utils.randomPosition(position.y, position.relative);

	let title = (
		<div style={titleStyle} className={classes.title}>
			{essay.title}
		</div>
	);

	let essayArr = [];

	essay.body.forEach((para, i) => {
		essayArr.push(
			<p key={`discover-${i}`} className={classes.para}>
				{para}
			</p>
		);
	});

	return (
		<React.Fragment>
			<PerfectScrollbar>
				<div className={classes.container}>
					<p>DISCOVER</p>
					{essayArr}
				</div>
			</PerfectScrollbar>
			{title}
		</React.Fragment>
	);
};

export default Discover;
