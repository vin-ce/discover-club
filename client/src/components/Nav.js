import React from 'react';
import { connect } from 'react-redux';
import classes from './Nav.module.css';
import { constantCase } from 'change-case';

const Nav = ({ projects, curSection }) => {
    const navArr = [];
    for (const project of projects) {
        let contentStyle;
        if (project.name === curSection) {
            console.log(project.name, curSection);
            contentStyle = {
                color: 'rgb(249,100,121)',
            };
        }

        navArr.push(
            <div key={`navItem_${project.name}`} style={contentStyle} className={classes.nav}>
                {constantCase(project.name)}
            </div>
        );
    }

    return (
        <div className={classes.container}>
            
            {/*  */}
            {navArr}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        projects: state.project.projects,
        curSection: state.project.curSection,
    };
};

export default connect(mapStateToProps)(Nav);
