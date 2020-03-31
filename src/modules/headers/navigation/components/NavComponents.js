import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './css/NavComponents.module.css';

export const NavWrapper = props => ( 
    <div className={classes.NavContainer}>
        <div className={classes.NavWrapper}>
            {props.children}
        </div>
    </div> 
    );

export const NavHeader = ({ header, locale, navUrl }) => {
    return (
        <div className={classes.NavHeader}>
            <h2>{header.title}</h2>
            <ul>
                {header.list.map((d, idx) =>
                    <li className={classes.NavHeader__Link} key={idx}>
                        <NavLink to={`${locale}/${navUrl}/${d.url}`}>{d.item}</NavLink> 
                    </li>
                )}
            </ul>
        </div>
    );
};

export const NavList = props => {
    let { data, locale, menuUrlKey, navUrl } = props;
    return ( 
        <div className={classes.NavListWrapper}>
            <div className={classes.NavList}>
                {data.map((d, idx) => (
                    <div key={idx} className={d.type === 'selector' 
                        ? [classes.NavList__Items, classes.Lg].join(' ') 
                        : classes.NavList__Items}>
                        {d.type === 'selector' 
                            ? <Selector
                                data={d.title}
                                menuUrlKey={menuUrlKey} 
                                menuUrlClick={props.menuUrlClick} /> 
                            : <h6> {d.title} </h6>}
                        <Item 
                            data={d.list} 
                            locale={locale}
                            type={d.type}
                            menuUrl={d.type ==='selector' && menuUrlKey === 0
                            ? d.title[menuUrlKey].url
                            : d.type === 'selector' && menuUrlKey === 1
                            ? '/' + d.title[menuUrlKey].url
                            : ''}
                            navUrl={navUrl} />            
                    </div>
                ))}
            </div>
        </div>
    )
}

// Populate items in list
function Item(props){
    let data = props.data;
    if ( props.type === 'selector' ) data = data.sort((a,b) => a.item.localeCompare(b.item)) 
    return (
        <ul>
            {data.map((d,idx) => (
                <li key={idx}>
                    <NavLink to={`${props.locale}/${props.navUrl}${props.menuUrl}/${d.item.toLowerCase()}`}>
                        {d.item}
                    </NavLink>
                </li>
            ))}
        </ul>
    )
}

// Sub-menus for Country tab
function Selector(props) {
    return (
        <ul className={classes.SubHeader}>
            {props.data.map((d, idx) => (
                <li 
                    key={idx}
                    className={idx === props.menuUrlKey ? classes.selected : null }
                    onClick={() => props.menuUrlClick(idx)}> 
                        {d.item} 
                </li>
            ))}
        </ul>
    )
}