import * as types from './types';

const initialState = {
    // keeps track of what part of the page you're at
    curSection: 'Discover',
    projects: [
        {
            // positions title
            name: 'Discover',
            pos: { x: 500, y: 500 },
            // to scrollTo etc
            ref: null,
            // the srcs
            content: [
                {
                    name: 'description',
                    src: 'https://docs.google.com/document/d/e/2PACX-1vSF2lq4C3kWr7Z7TQROzcSBizxDbCsTY_DrgsFKNM45MqG_4_i9_6NPNpphDW0ce7yY15mbQxSep5BF/pub?embedded=true',
                    type: 'document',
                    pos: { x: 1500, y: 200 },
                    dimensions: { width: 600, height: 400 },
                },
                {
                    name: 'image-slideshow',
                    src: 'https://docs.google.com/presentation/d/e/2PACX-1vTE_eZETJ1AEPRG2VOpZLLD0Ps5R25jCm_JsSQZy2m3AhAi-7UeVnBCFUO6NvTuM4Sf03mbbc3ygqxG/embed?start=true&loop=true&delayms=5000',
                    type: 'slideshow',
                    pos: { x: 2500, y: 100 },
                    dimensions: { width: 500, height: 500 },
                },
                {
                    name: 'calendar',
                    src: 'https://calendar.google.com/calendar/embed?src=iq9ud6jn84c8djhe0nhvdegfhs%40group.calendar.google.com&ctz=America%2FNew_York',
                    type: 'calendar',
                    pos: { x: 3500, y: 100 },
                    dimensions: { width: 500, height: 500 },
                },
            ],
        },
        {
            // positions title
            name: 'Exhibition',
            pos: { x: 4000, y: 800 },
            // to scrollTo etc
            ref: null,
            // the srcs
            content: [
                {
                    name: 'description',
                    src: 'https://docs.google.com/document/d/e/2PACX-1vSHEMtKyDCxLj-k6XwmRVqdGb0YQYtzC3uSKRpGPcu-hgwJBc-D2d9bJ5zDdAOmBF3i04DaX0UKiBI7/pub?embedded=true',
                    type: 'document',
                    pos: { x: 4600, y: 100 },
                    dimensions: { width: 200, height: 400 },
                },
                {
                    name: 'image-slideshow',
                    src: 'https://docs.google.com/presentation/d/e/2PACX-1vTE_eZETJ1AEPRG2VOpZLLD0Ps5R25jCm_JsSQZy2m3AhAi-7UeVnBCFUO6NvTuM4Sf03mbbc3ygqxG/embed?start=true&loop=true&delayms=5000',
                    type: 'slideshow',
                    pos: { x: 5000, y: 300 },
                    dimensions: { width: 500, height: 500 },
                },
            ],
        },
    ],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_PROJECT_POSITION: {
            const projectIndex = state.projects.findIndex((project) => project.title === action.projectTitle);

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
        case types.SET_CUR_SECTION: {
            return {
                ...state,
                curSection: action.curSection,
            };
        }
        default:
            return state;
    }
};

export default reducer;
