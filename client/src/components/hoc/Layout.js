import React from 'react';
import classes from './Layout.module.css';

import HorizontalScroll from './HorizontalScroll';
import Randomizer from '../Randomizer';

import Routes from '../../Routes';

const Layout = (props) => {
	return (
		<HorizontalScroll>
			<div className={classes.container}>
				<Randomizer />
				<Routes />
			</div>
		</HorizontalScroll>
	);
};

export default Layout;
