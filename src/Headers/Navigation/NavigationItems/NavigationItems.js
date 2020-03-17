import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';


export default props => {
    const { data } = props,
    menu = data.list;
    console.log(menu);
    return (
        <nav>   
            <ul className={classes.NavigationItems}>
                {menu.map(navItem => {
                    return <NavigationItem
                            key={navItem.id}
                            item={navItem.type}
                        />
                })}
            </ul>
        </nav>
    )
}
