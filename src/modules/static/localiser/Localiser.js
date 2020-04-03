import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Localiser.module.css';

export default function Localiser({ data, pathname, mouseOver }) {
    
    let i18nStyle = classes.i18nStyle;
    if ( mouseOver !== null || pathname.length > 3 ) {
        i18nStyle = [classes.i18nStyle, classes.active].join(' ');
    }

    return (
        data.map((d, idx) => (
            <li key={`i18n-${idx}`} className={classes.HeaderItem}>
                <NavLink className={i18nStyle} to={generateUrl(d.url, pathname)}>{d.item}</NavLink>
            </li>
        ))
    );
}

function generateUrl(locale, path){
    let url = '/' + locale + path.substring(3)
    return url;
}