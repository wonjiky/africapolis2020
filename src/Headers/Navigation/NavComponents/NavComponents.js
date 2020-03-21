import React from 'react';
import classes from './NavComponents.module.css';


export const NavWrapper = props => <div className={classes.NavWrapper}><div className={classes.NavContainer}>{props.children}</div></div>

export const NavHeader = props => {

    return <div className={classes.NavHeader}>hello</div>;
};

export const NavList = props => {
    return <div className={classes.NavList}>hi</div>;
}