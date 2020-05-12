import * as types from './types';

const initialState = {
	projects: [
		{
			title: 'Discover',
			url: '/discover',
			position: {},
		},
		{
			title: 'Exhibition',
			url: '/exhibition',
			position: {},
		},
		{
			title: 'Food for Thought',
			url: '/food-for-thought',
			position: {},
		},
		{
			title: 'Conference',
			url: '/conference',
			position: {},
		},
		{
			title: 'Podcast',
			url: '/podcast',
			position: {},
		},
	],
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case types.SET_PROJECT_POSITION: {
			const projectIndex = state.projects.findIndex(
				(project) => project.title === action.projectTitle
			);

			const projectsCopy = [...state.projects];
			const updatedProject = {
				...projectsCopy[projectIndex],
				position: action.position,
			};
			projectsCopy.splice(projectIndex, 1, updatedProject);

			return {
				...state,
				projects: projectsCopy,
			};
		}
		default:
			return state;
	}
};

export default reducer;
