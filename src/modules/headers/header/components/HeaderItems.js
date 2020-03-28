import React from 'react';
import { HeaderItem } from '../index';
import { MobileHeaderButton } from '../../../static';
import { NavLink } from 'react-router-dom';
import classes from './css/HeaderItems.module.css';


const generateUrl = (locale, path) => {
    let url = '/' + locale + path.substring(3)
    return url;
}

export default props => {
    const { data, mouseOver, url, pathname } = props;
    return (
        <nav>   
            <ul className={mouseOver.selected !== null ? classes.active : null}>
                {data.head.map((d, idx) => {
                    return <HeaderItem 
                        key={`Nav_Item__${idx}`}
                        itemId={d.id}
                        item={d.type}
                        pathname={pathname} url={url} 
                        navData={data.navigation[idx]}
                        mouseOver={mouseOver}
                        toggleHover={props.toggleHover}
                        toggleLeave={props.toggleLeave}
                    />
                })}
                <li><NavLink to={generateUrl('en', pathname)}>EN</NavLink></li>
                <li><NavLink to={generateUrl('fr', pathname)}>FR</NavLink></li>
                <MobileHeaderButton mobileHeaderToggle={props.mobileHeaderToggle} />
            </ul>
        </nav>
    )
}