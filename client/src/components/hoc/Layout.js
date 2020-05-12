import React, { useRef, useEffect } from 'react';
import classes from './Layout.module.css';

import HorizontalScroll from './HorizontalScroll';
import Randomizer from '../Randomizer';

import Home from '../../pages/Home';

const Layout = (props) => {
	return (
		<HorizontalScroll>
			<div className={classes.container}>
				<Randomizer />
				<Home />
			</div>
		</HorizontalScroll>
	);
};

export default Layout;
