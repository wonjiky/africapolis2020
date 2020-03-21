import React from 'react';
import HeaderItems from '../HeaderItems/HeaderItems';
import classes from './Header.module.css';
import Logo from '../../Static/Logo/Logo';
import { Link } from 'react-router-dom';

const Header = props => {
    const { data, toggleActiveClass, africapolisLogos, mouseOver} = props;

    return (
        <div className={classes.Header}>
            <Link to={{pathname:'/'}}> 
                <Logo url={africapolisLogos} toggleActiveClass={toggleActiveClass} type='Main__nav'/> 
            </Link>
            <HeaderItems 
                data={data}
                toggleHover={props.toggleHover}
                toggleLeave={props.toggleLeave}
                mobileHeaderToggle={props.mobileHeaderToggle}
                toggleActiveClass={toggleActiveClass}
                mouseOverDetected={mouseOver} />
        </div>
    )
}

export default Header;