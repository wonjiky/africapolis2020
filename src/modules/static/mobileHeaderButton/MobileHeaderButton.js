import React from 'react';
import classes from './MobileHeaderButton.module.css';

export default props => {

    return <li className={classes.MobileHeaderButton}>
        <button onClick={props.mobileHeaderToggle}>
            Menu
        </button>
    </li>
}