import React, { useRef } from 'react';
import classes from './ProjectTitle.module.css';

const Title = (props) => {
    const containerEl = useRef(null);

    const clickHandler = (event) => {
        //.current is verification that your element has rendered
        if (containerEl.current) {
            containerEl.current.scrollIntoView({
                behavior: 'smooth',
                inline: 'center',
                block: 'nearest',
            });
        }
    };
    // scale of logo
    const SCALE = 1;
    const LOGO_SIZE = { width: 120, height: 120 };

    const titleStyle = {
        top: Math.floor(props.pos.y - LOGO_SIZE.height / 4),
        left: Math.floor(props.pos.x - LOGO_SIZE.width / 4),
    };

    return (
        <div ref={containerEl} onClick={clickHandler} className={classes.logoContainer} style={titleStyle}>
            <p><div className={classes.wordTitle}>{props.name}</div></p>
            <svg
                //
                xmlns='http://www.w3.org/2000/svg'
                width={LOGO_SIZE.width}
                height={LOGO_SIZE.height}
            >
                <circle
                    //
                    className={classes.circle}
                    cx='50%'
                    cy='50%'
                    r={LOGO_SIZE.width / 2}
                />
            </svg>
            <svg className={classes.logoSVGContainer} xmlns='http://www.w3.org/2000/svg' width={LOGO_SIZE.width} height={LOGO_SIZE.height} viewBox={`0 0 ${LOGO_SIZE.width} ${LOGO_SIZE.height}`}>
                <path
                    //
                    xmlns='http://www.w3.org/2000/svg'
                    className={classes.logoSVG}
                    d='M58.68,48.83,43.6,42.54,44.22,64,28.93,61.38,28.5,45.63,16.37,54,0,47,20.48,32.88,8.17,27.74l3.08-14.6L27.8,20.05,27.32,2.46,42.36,0l.51,17.42,11.5-7.94L66,19.76,51.31,29.87,73,38.94Z'
                    // transform={`translate(${LOGO_SIZE.width / 4}, ${LOGO_SIZE.height / 4}) scale(${SCALE})`}
                    transform={`scale(${SCALE})`}
                />
            </svg>
            
            
        </div>
    );
};

export default Title;
