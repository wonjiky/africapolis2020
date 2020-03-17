import React from 'react';
import { Link } from 'react-router-dom';
import Dropdown from '../Dropdown/Dropdown';
import classes from './NavigationItem.module.css';

export default props => {
    
    const { item } = props;
    let navItem = null;

    switch(props.item) {
        case 'Countries': 
            return navItem = (
                <li className={classes.NavigationItem}>
                    <Link to={item.toLowerCase()} exact={props.exact}> {item} </Link>
                    <Dropdown />
                </li>
            )    

        case 'Research':
        case 'Data':
        case 'About':
            return navItem = (
                <li className={classes.NavigationItem}>
                   <Link to={item.toLowerCase()} exact={props.exact}> {item} </Link>
                </li>
            )

        default: 
            return navItem;
    }
}