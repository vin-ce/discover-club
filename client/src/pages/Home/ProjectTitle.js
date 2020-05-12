import React from 'react';
import classes from './ProjectTitle.module.css';
import { Link } from 'react-router-dom';

const Title = (props) => {
	// scale of logo
	const SCALE = 0.75;
	const LOGO_SIZE = { x: 80, y: 80 };
	// calculates required translation for logo to be centered
	const calculateTranslation = (coords) => {
		return (1 - SCALE) * coords;
	};

	console.log(props.pos);
	const titleStyle = {
		top: Math.floor(props.pos.y - LOGO_SIZE.y / 4),
		left: Math.floor(props.pos.x - LOGO_SIZE.x / 4),
	};

	return (
		<React.Fragment>
			<Link to={props.url}>
				<div className={classes.logoContainer} style={titleStyle}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width={LOGO_SIZE.x}
						height={LOGO_SIZE.y}
					>
						<circle
							className={classes.circle}
							cx='50%'
							cy='50%'
							r='40'
						/>
						<path
							xmlns='http://www.w3.org/2000/svg'
							className={classes.logoSVG}
							d='M44.24,42.83,64.08,61.3l10.75-2.75L51.75,37.05l25.9-6.62-4.79-8.95-23.45,6L56,7.83l2-5.92L48.19,0,46.52,4.9l-7,20.73L20.61,8.05l-5.07,8L32.42,31.81,0,40.1l8.47,8,25.62-6.55h0l-8.48,25,8.89,5.14Z'
							transform={`translate(${calculateTranslation(
								40
							)}, ${
								calculateTranslation(40) + 3
							}) scale(${SCALE})`}
						/>
					</svg>
					<div className={classes.wordTitle}>{props.title}</div>
				</div>
			</Link>
		</React.Fragment>
	);
};

export default Title;
