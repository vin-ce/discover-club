import React from 'react';
import classes from './Content.module.css';

const Content = (props) => {
    const containerStyle = {
        left: props.pos.x,
        top: props.pos.y,
    };
    const frameStyle = {
        width: props.dimensions.width,
        height: props.dimensions.height,
    };

    let content;
    console.log(props.type);
    switch (props.type) {
        case 'document': {
            content = <iframe style={frameStyle} src={props.src} />;
            break;
        }

        case 'slideshow': {
            content = <iframe style={frameStyle} src={props.src} frameBorder='0' allowFullScreen={true} mozallowfullscreen='true' webkitallowfullscreen='true' />;
            break;
        }

        case 'calendar': {
            content = <iframe style={frameStyle} src={props.src} />;
            break;
        }

        default:
            console.log('something went wrong in content');
            content = null;
    }

    return (
        <div style={containerStyle} className={classes.container}>
            {content}
        </div>
    );
};

export default Content;
