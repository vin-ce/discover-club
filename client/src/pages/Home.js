import React from 'react';
import { connect } from 'react-redux';
import { projectOperations } from '../state/project/';

import classes from './Home.module.css';

import Title from './Home/ProjectTitle';
import Content from './Home/Content';

const Home = ({ projects }) => {
    const titles = [];
    const contents = [];

    for (let i = 0; i < projects.length; i++) {
        const project = projects[i];

        titles.push(<Title key={`${project.name}`} name={project.name} pos={project.pos} />);

        for (let j = 0; j < project.content.length; j++) {
            const content = project.content[j];

            contents.push(<Content key={`${project.name}_content${j}`} pos={content.pos} src={content.src} dimensions={content.dimensions} type={content.type} />);
        }
    }

    return (
        <React.Fragment>
            {titles}
            {contents}
        </React.Fragment>
    );
};

const mapStateToProps = (state) => {
    return {
        projects: state.project.projects,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setPosition: (projectTitle, position) => dispatch(projectOperations.setProjectPosition(projectTitle, position)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
