import React from 'react';
import classes from './BuildControl.module.css';

const buildControl = (props) => {
    return (
        <div className={classes.BuildControl}>
            <div className={classes.Label}>{props.label}</div>
            <button className={classes.Less} onClick={props.removeIng} disabled={props.disabled}>Less</button>
            <button className={classes.Less} onClick={props.addIng}>More</button>
        </div>
    )
};

export default buildControl;