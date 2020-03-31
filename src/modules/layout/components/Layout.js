import React from 'react';
import { Headers } from '../../headers/header';
import { Footer } from '../../footer';
// import classes from './Layout.module.css';

export default props => {
    return (
        <>
            <Headers {...props} />
            <main>
                {props.children}
            </main>
            <Footer />
        </>
    )
}
