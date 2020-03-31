import React from 'react';
import { HeaderItems } from '../index';
import { Logo } from '../../../static';
import { Link } from 'react-router-dom';
import { MobileHeaderButton } from '../../../static';
import classes from './css/Header.module.css';

export default props => {
    const { data, mouseOver, locale, pathname } = props;
    
    return (
        <div className={classes.Header}>
            <Link to={{pathname:`${locale}`}}> 
                <Logo url={[data.logos.africapolis, data.logos.africapolisWhite]} hovered={mouseOver} type='Main__nav'/> 
            </Link>
            <nav>
                <HeaderItems 
                    data={data}
                    pathname={pathname} locale={locale} 
                    mouseOver={mouseOver} type='web'
                    toggleHover={props.toggleHover}
                    toggleLeave={props.toggleLeave}
                    mobileHeaderToggle={props.mobileHeaderToggle}
                    subHeaderClick={props.subHeaderClick} />
            </nav>
            <MobileHeaderButton mobileHeaderToggle={props.mobileHeaderToggle} />
        </div>
    )
}