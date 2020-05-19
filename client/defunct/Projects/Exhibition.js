import React from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';

import classes from './Exhibition.module.css';
import { exhibition } from '../../assets';
import text from './Text/exhibitionText';
import utils from '../../components/utils/randomPosition';

const Exhibition = (props) => {
	console.log(exhibition);
	const { position } = props;

	let body = [];
	let imagesArr = [];

	text.body.forEach((para, i) => {
		body.push(<p key={`exhibition-para-${i}`}>{para}</p>);
	});

	exhibition.forEach((images, i) => {
		const style = utils.randomPosition(position.y, position.relative);
		imagesArr.push(
			<div className={classes.image}>
				<img className={classes.image} key={`exhibition-images-${i}`} style={style} src={images.src} />
				<p>{images.alt}</p>
			</div>
		);
	});

	return (
		<React.Fragment>
			<PerfectScrollbar>
				<div className={classes.container}>
					<p className={classes.header}>Exhibition.</p>
					{body}
				</div>
			</PerfectScrollbar>
			{imagesArr}
		</React.Fragment>
	);
};

export default Exhibition;
