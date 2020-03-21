import React from 'react';
import Navigation from '../../Navigation/Navigation';
import classes from './HeaderItem.module.css';
import { NavLink } from 'react-router-dom';

export default props => {
    
    const { item, mouseOverDetected, navData, uniqId } = props;
    
    let linkStyle = classes.Item;
    if ( mouseOverDetected.hovered ) {
        linkStyle = [classes.Item, classes.active].join(' ');
        if ( mouseOverDetected.selected === uniqId ) {
            linkStyle = [classes.Item, classes.active, classes.selected].join(' ');
        }
    }
    
    return ( 
        <li 
            className={classes.HeaderItem}
            data-id={uniqId}
            onMouseOver={() => props.toggleHover(uniqId)} 
            onMouseLeave={props.toggleLeave}>
            <NavLink to={item.toLowerCase()} className={linkStyle} exact={props.exact}>
                {item}
            </NavLink>
            <Navigation uniqId={uniqId} data={navData} selectedList={mouseOverDetected.selected} />
        </li>
    )
}