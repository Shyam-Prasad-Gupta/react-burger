import React from 'react';
import classes from '../DrawerToggle/DrawerToggle.module.css';

const drawerToggle = (props) => {
    return (
        <div onClick={props.onToggleClick} className={classes.DrawerToggle}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
}

export default drawerToggle;