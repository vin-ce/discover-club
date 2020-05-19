import * as types from './types';

const setProjectPosition = (projectTitle, position) => {
    return {
        type: types.SET_PROJECT_POSITION,
        position,
        projectTitle,
    };
};

const setCurSection = (curSection) => {
    return {
        type: types.SET_CUR_SECTION,
        curSection,
    };
};

export default { setProjectPosition, setCurSection };
