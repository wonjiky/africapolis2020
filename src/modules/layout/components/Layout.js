import React from 'react';
import { Headers } from '../../headers/header';
// import classes from './Layout.module.css';

export default props => {

    const { config } = props;
    return (
        <>
            <Headers config={config} {...props} />
            <main>
                {props.children}
            </main>
        </>
    )
}
