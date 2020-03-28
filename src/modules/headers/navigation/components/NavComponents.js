import React from 'react';
import _ from 'lodash';
import { NavLink } from 'react-router-dom';
import classes from './css/NavComponents.module.css';


export const NavWrapper = props => <div className={classes.NavContainer}><div className={classes.NavWrapper}>{props.children}</div></div>

export const NavHeader = props => {
    const d = props.data;
    return (
        <div className={classes.NavHeader}>
            <h2>
                {d.header}
            </h2>
            <ul>
                {d.links.map((link, idx) =>
                    <li className={classes.NavHeader__Link} key={idx}>
                        <NavLink to={'countries'}>{link.EN_Name}</NavLink> 
                    </li>
                )}
            </ul>
        </div>
    );
};

export const NavList = props => {
    let { data : d, subHeader, type } = props;

    // For country tab, sort them alphabetically
    let navSubMenu = null;
    if ( type === 'countries' ) { 
        d = d.map(d => ({ ...d , list: _.sortBy(d.list, [o => o.EN_Name])})) 
        navSubMenu = <NavSubMenu data={props.navSubMenu} selected={subHeader} subHeaderClick={props.subHeaderClick}/>;
    }

    return ( 
        <div className={classes.NavListWrapper}>
            {navSubMenu}
            <NavListItems data={d} type={type} />
        </div>
    )
}

function NavListItems(props){
    return (
        <div className={classes.NavList}>
            {props.data.map((d, idx) => {
                return (
                    <div key={idx} className={props.type === 'countries' ? [classes.NavList__Items, classes.Lg].join(' ') : classes.NavList__Items}>
                        {props.type === 'countries' ? null : <h6>{d.header}</h6>}
                        <Item type='List' data={d.list} />            
                    </div>
                )
            })}
        </div>
    )
}

// Populate items in list
function Item(props){
    return (
        <ul>
            {props.data.map((item,idx) => {
                return (
                    <li key={idx}>
                        <NavLink to={'/'}>
                            {item.EN_Name}
                        </NavLink>
                    </li>
                )
            })}
        </ul>
    )
}

// Sub-menus for Country tab
function NavSubMenu(props) {
    return (
        <ul className={classes.SubHeader}>
            {props.data.map((item, idx) => {
                return (
                    <li 
                        key={idx} 
                        className={item.id === props.selected.id ? classes.selected : null }
                        onClick={() => props.subHeaderClick(item.EN_Name.toLowerCase(), item.id)}> 
                            {item.EN_Name} 
                    </li>
                )
            })}
        </ul>
    )
}