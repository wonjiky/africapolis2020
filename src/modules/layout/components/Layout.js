import React from 'react';
import { Headers } from '../../headers/header';
import { Footer } from '../../footer';
import classes from './css/Layout.module.css';

export default props => {
    return (
        <>
            <Headers {...props} />
                {props.children}
            <Footer />
        </>
    )
}
