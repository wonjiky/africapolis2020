import React from 'react';
import Parallax from '../Parallax/Parallax';
import NavigationItem from '../Navigation/NavigationItem/NavigationItem';
import classes from './Header.module.css';
import Logo from '../../Static/Logo/Logo';
import { Link } from 'react-router-dom';

const header = props => {
    
    const { data } = props,
    africapolisLogo = data.logos.africapolis,
    swac_en = data.logos.swac_en,
    swac_fr = data.logos.swac_fr;
    
    return (
        <header>
            <Link to={{pathname:'/'}}> <Logo url={africapolisLogo + '.png'} type='Header'/> </Link>
            <NavigationItem data={data}/>
        </header>
    )

}

export default header;