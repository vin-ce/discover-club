import React, { useRef, useState, useEffect } from 'react';
import classes from './HorizontalScroll.module.css';
import { connect } from 'react-redux';
import { projectOperations } from '../../state/project';

const HorizontalScroll = (props) => {
    // there must be a wrapping horizontal scroll HOC to just set the horizontal scroll, and an inner div to set the sizings. Not sure why, but it's what works.
    // wrapper that listens/ manipulates scrolls ---> div that sets content size/ width ---> content itself

    const [target, setTarget] = useState(null);
    const containerEl = useRef(null);

    // side-scroller
    const onWheelHandler = (e) => {
        let scrollSpeed = 40;
        let scrollDirection = e.deltaY > 0 ? 1 : -1;
        target.scrollLeft += scrollSpeed * scrollDirection;
    };

    // figuring out which section user is scrolled at

    const [posData, setPosData] = useState(null);
    const [documentWidth, setDocumentWidth] = useState(null);

    const { projects } = props;
    useEffect(() => {
        if (!target) setTarget(containerEl.current);

        if (target) {
            const posArr = [];
            const documentWidth = target.childNodes[0].clientWidth;

            // determines boundries of each project
            for (let i = 0; i < projects.length; i++) {
                let min;
                let max;
                if (i === 0) {
                    min = 0;
                } else {
                    min = projects[i].pos.x;
                }

                if (i === projects.length - 1) {
                    max = documentWidth;
                } else {
                    max = projects[i + 1].pos.x;
                }

                posArr.push({ name: projects[i].name, min, max });
            }
            setPosData(posArr);
        }
    }, [projects, target]);

    const onScrollHandler = (e) => {
        if (target) {
            const scrollLeft = target.scrollLeft;

            for (const pos of posData) {
                if (scrollLeft > pos.min && scrollLeft < pos.max) {
                    if (pos.name !== props.curSection) {
                        props.setCurSection(pos.name);
                    }
                    break;
                }
            }
        }
    };

    return (
        <div key='container' ref={containerEl} onScroll={onScrollHandler} onWheel={onWheelHandler} className={classes.container}>
            {props.children}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        projects: state.project.projects,
        curSection: state.project.curSection,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setCurSection: (curSection) => dispatch(projectOperations.setCurSection(curSection)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HorizontalScroll);
