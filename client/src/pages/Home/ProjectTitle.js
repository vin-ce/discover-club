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
                    d='M44.24,42.83,64.08,61.3l10.75-2.75L51.75,37.05l25.9-6.62-4.79-8.95-23.45,6L56,7.83l2-5.92L48.19,0,46.52,4.9l-7,20.73L20.61,8.05l-5.07,8L32.42,31.81,0,40.1l8.47,8,25.62-6.55h0l-8.48,25,8.89,5.14Z'
                    // transform={`translate(${LOGO_SIZE.width / 4}, ${LOGO_SIZE.height / 4}) scale(${SCALE})`}
                    transform={`scale(${SCALE})`}
                />
            </svg>
            <div className={classes.wordTitle}>{props.name}</div>
        </div>
    );
};

export default Title;
