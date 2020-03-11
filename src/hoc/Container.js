import React from 'react';
import classes from './Container.module.css';

export default props => {
    return (
        <main className={classes.Main}>
            <div className={classes.Container}> {props.children} </div>
        </main>
    )
}