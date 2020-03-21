import React from 'react';
import classes from './Backdrop.module.css';

export const Backdrop = props => <div className={props.hovered ? [classes.Backdrop, classes.active].join(' ') : classes.Backdrop}  />;

export const Backdrop__Mobile = props => 
    <div 
        onClick={props.handleBackdrop}
        className={props.clicked ? [classes.Backdrop__Mobile, classes.active].join(' ') : classes.Backdrop__Mobile} 
    />;