import React from 'react';
import classes from './MobileHeader.module.css';

export default props => {

    let styles = classes.MobileHeader;
    if (props.clicked) styles = [classes.MobileHeader, classes.open].join(' ');

    return ( 
        <section className={styles}> 
            
        </section> 
    ); 
}
