import React from 'react';
import { HeaderItems } from '../index';
import { Logo } from '../../../static';
import { Link } from 'react-router-dom';
import classes from './css/Header.module.css';

export default props => {
    const { data, africapolisLogos, mouseOver, url, pathname } = props;

    return (
        <div className={classes.Header}>
            <Link to={{pathname:`${url}`}}> 
                <Logo url={africapolisLogos} hovered={mouseOver.selected} type='Main__nav'/> 
            </Link>
            <HeaderItems 
                data={data}
                pathname={pathname} url={url} 
                mouseOver={mouseOver}
                toggleHover={props.toggleHover}
                toggleLeave={props.toggleLeave}
                mobileHeaderToggle={props.mobileHeaderToggle}
                subHeaderClick={props.subHeaderClick} />
        </div>
    )
}