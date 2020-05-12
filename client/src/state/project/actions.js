import * as types from './types';

const setProjectPosition = (projectTitle, position) => {
	return {
		type: types.SET_PROJECT_POSITION,
		position,
		projectTitle,
	};
};

export default { setProjectPosition };
