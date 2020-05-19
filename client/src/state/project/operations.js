import actions from './actions';

const setProjectPosition = (projectTitle, position) => {
    return actions.setProjectPosition(projectTitle, position);
};

const setCurSection = (curSection) => {
    return actions.setCurSection(curSection);
};

export default { setProjectPosition, setCurSection };
