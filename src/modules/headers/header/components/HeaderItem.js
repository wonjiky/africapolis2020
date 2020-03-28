import React from 'react';
import { Navigation } from '../../navigation';
import { NavLink } from 'react-router-dom';
import classes from './css/HeaderItem.module.css';

export default props => {
    
    const { url, item, mouseOver, navData, itemId } = props;
    
    let linkStyle = classes.Item;
    if ( mouseOver.selected !== null ) {
        linkStyle = [classes.Item, classes.active].join(' ');
        if ( mouseOver.selected === itemId ) {
            linkStyle = [classes.Item, classes.active, classes.selected].join(' ');
        }
    }

    return ( 
        <li 
            className={classes.HeaderItem}
            onMouseEnter={() => props.toggleHover(itemId)} 
            onMouseLeave={props.toggleLeave}>
            <NavLink to={`${url}/${item.toLowerCase()}`} className={linkStyle} exact={props.exact}>
                {item}
            </NavLink>
            <Navigation 
                itemId={itemId} 
                data={navData} 
                selectedList={mouseOver.selected} />
        </li>
    )
}
