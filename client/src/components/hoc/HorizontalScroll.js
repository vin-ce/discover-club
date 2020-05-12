import React, { useRef } from 'react';
import classes from './HorizontalScroll.module.css';

const HorizontalScroll = (props) => {
	// there must be a wrapping horizontal scroll HOC to just set the horizontal scroll, and an inner div to set the sizings. Not sure why, but it's what works.
	// wrapper that listens/ manipulates scrolls ---> div that sets content size/ width ---> content itself

	const containerEl = useRef(null);

	// side-scroller
	const onWheelHandler = (e) => {
		let scrollSpeed = 40;
		let scrollDirection = e.deltaY > 0 ? 1 : -1;
		containerEl.current.scrollLeft += scrollSpeed * scrollDirection;
	};

	return (
		<div
			key='container'
			ref={containerEl}
			onWheel={onWheelHandler}
			className={classes.container}
		>
			{props.children}
		</div>
	);
};

export default HorizontalScroll;
