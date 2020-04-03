import React from 'react';
import { NavLink } from 'react-router-dom';
import { Localiser } from '../../../static';
import { Navigation } from '../../navigation'; 
import classes from './css/HeaderItems.module.css';

export default props => {
    const { mouseOver, data, locale, pathname } = props;
    return (
        <ul className={mouseOver !== null 
            ? classes.active 
            : classes.HeaderItems}>
            {data.nav.map((d, idx) => {
                let linkStyle = classes.Item;
                if ( mouseOver !== null || pathname.length > 3) {
                    linkStyle = [classes.Item, classes.active].join(' ');
                    // For selected id
                    // if ( mouseOver === d.id ) linkStyle = [linkStyle, classes.selected].join(' ');
                }
                return (
                    <li key={idx} 
                        className={classes.HeaderItem} 
                        onMouseEnter={() => props.toggleHover(d.id)} 
                        onMouseLeave={props.toggleLeave}>
                        <NavLink 
                            to={`${locale}/${d.url}`} 
                            className={linkStyle} 
                            exact={d.exact}>
                            {d.item}
                        </NavLink>
                        <Navigation 
                            itemId={d.id}
                            navUrl={d.url} 
                            locale={locale}
                            pathname={pathname} 
                            data={d.menu} 
                            selected={mouseOver} />
                    </li>
                )
            })}
        <Localiser data={data.i18nSelector} pathname={pathname} mouseOver={mouseOver} />
    </ul>
    )
}
