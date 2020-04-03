import React from 'react';
import { ContainerType } from '../../modules/layout/index'; 
import classes from './css/About.module.css';

export default props => {

    return (
        <ContainerType.Text
        	header='Africapolis Main'>
            <div className={classes.Contents}></div>
        </ContainerType.Text> 
    )
}


