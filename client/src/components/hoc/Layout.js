import React from 'react';
import classes from './Layout.module.css';

import HorizontalScroll from './HorizontalScroll';
import Nav from '../Nav';

import Routes from '../../Routes';

const Layout = (props) => {
    return (
        <React.Fragment>
            <Nav />
            <HorizontalScroll>
                <div className={classes.container}>
                    <Routes />
                </div>
            </HorizontalScroll>
        </React.Fragment>
    );
};

export default Layout;
