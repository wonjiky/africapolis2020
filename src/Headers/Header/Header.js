import React from 'react';
import Parallax from '../Parallax/Parallax';
import Navigation from '../Navigation/Navigation';
import classes from './Header.module.css';

const header = props => {

    return (
        <section className={classes.Header}>
            <Parallax
                image={props.image}
             />
             <Navigation 
             
             />
        </section>
    )

}

export default header;