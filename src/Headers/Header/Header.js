import React from 'react';
import Parallax from '../Parallax/Parallax';
import NavigationItems from '../Navigation/NavigationItems/NavigationItems';
import classes from './Header.module.css';
import Logo from '../../Static/Logo/Logo';
import { Link } from 'react-router-dom';

const header = props => {
    
    const { data } = props,
    africapolis = data.logos.africapolis,
    africapolisWhite = data.logos.africapolisWhite,
    swac_en = data.logos.swac_en,
    swac_fr = data.logos.swac_fr;

    return (
        <header>
            <div className={classes.Header}>
                <Link to={{pathname:'/'}}> <Logo url={africapolisWhite + '.svg'} type='Main__nav'/> </Link>
                <NavigationItems data={data}/>
            </div>
        </header>
    )

}

export default header;