const EL_WIDTH = 640; // 40rem
const EL_HEIGHT = window.innerHeight * 0.45;
const randomPosition = (y, relativePos) => {
	// decides if it's going to be generated left, right, or above/below
	let relative = Math.ceil(Math.random() * 4);
	let top;
	let left;

	if (relative === 1) {
		// lowest chance of occuring- 1:5 chance
		// generate to left
		left = -Math.floor((Math.random() * (0.35 - 0.2) + 0.2) * window.innerWidth);

		top = Math.floor(Math.random() * 0.3 * window.innerHeight);
	} else if (relative === 2) {
		// generate to right
		left = Math.floor((Math.random() * (0.4 - 0.05) + 0.05) * window.innerWidth + EL_WIDTH);

		top = Math.floor(Math.random() * 0.4 * window.innerHeight);
	} else {
		// base line -0.3 to offset starting pos
		left = Math.floor((Math.random() * 0.9 - 0.3) * window.innerWidth);

		// generate to top / bottom
		// opposite of where the project description box is positioned
		if (relativePos === 'above') {
			// generate below the desc box

			top = Math.floor(Math.random() * (window.innerHeight - (y + EL_HEIGHT)) + EL_HEIGHT - 0.1 * window.innerHeight);
		}
		if (relativePos === 'below') {
			// generate above the desc box
			top = -Math.floor(Math.random() * y);
		}
	}

	// returns style array
	return {
		position : 'absolute',
		top,
		left
	};
};

export default {
	randomPosition
};
