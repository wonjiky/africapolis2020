import React from 'react';
import classes from './MobileHeaderButton.module.css';

export default props => {

    return <div className={classes.MobileHeaderButton}>
        <button onClick={props.mobileHeaderToggle}>
            Menu
        </button>
    </div>
}